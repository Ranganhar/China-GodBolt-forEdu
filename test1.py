from flask import Flask, request
from flask_cors import CORS
import os
import sys
import subprocess

app = Flask(__name__)
CORS(app)  # 这将为所有路由启用 CORS

# 可执行文件绝对地址
compiler_path="clang-10"
rev_root=os.getcwd()+"/rev"
return_src={}

@app.route('/receive_string', methods=['POST'])
def receive_string():
    data = request.get_json()
    if not data:
        return "No data received.", 400
    O0=True
    risv_V=False
    file_path=rev_root+"/source_code.c"    
    os.makedirs(rev_root,exist_ok=True)
    for key, values in data.items():
        #处理输入的代码+命令
        if(key=="code"):
            given_code=values
            with open(file_path, 'w') as f:
                f.write(values+'\n')
            compiler_args=[compiler_path, file_path,'-emit-llvm','-S','-g0','-O','-Xclang','-disable-llvm-passes','-o',os.getcwd()+"/rev/source.ll"]
        if(key=="option"):
            if values!="O0":
                O0=False
        if(key=='version'):
            if(values=='RISCV-rv64gc 慧编 1.0.1'):
                risv_V=True
    given_code=given_code.replace(" ","").replace("\n","").replace("\r","")
    #ir
    try:
        result_1=subprocess.run(compiler_args,capture_output=True,text=True,timeout=10)
    except subprocess.TimeoutExpired:
        return "Source_code format wrong"
    if result_1.stderr:
        with open(os.getcwd()+"/rev/source.ll", 'w') as f:
            f.write("compiler error")
    with open(os.getcwd()+"/rev/source.ll", 'r') as f:
        return_src["source_code"] = f.read()
    #riscv
    if risv_V is True:
        try:
            riscvasm=subprocess.run("llc -march=riscv64 -filetype=asm /rev/source.ll -o /rev/riscvasm.s",capture_output=True,text=True,timeout=3)
        except:
            return "RISCV compile error"
        if riscvasm.stderr:
            with open(os.getcwd()+"/rev/riscvasm.s", 'w') as f:
                f.write(riscvasm.stderr)
        with open(os.getcwd()+"/rev/riscvasm.s", 'r') as f:
            return_src["source_code"] = f.read()
    #pipe
    if O0 == False:
        return_src["pipe"]=['reassociate','DCE','mem2reg','cfgSimplify','Loop_Unroll','ConstProp','LoopRotate','StraightLineStrengthReduce']
    else :
        return_src["pipe"]=[]
    return_src["pipeline"]=[]
    #pipline
    opt_path=[]
    result_2=subprocess.run([compiler_path,file_path,'--dce'],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/dce.ll", 'w') as f:
        f.write(result_2.stdout)
    with open(os.getcwd()+"/rev/dce.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    result_3=subprocess.run([compiler_path,file_path,'--mem2reg'],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/mem2reg.ll", 'w') as f:
        f.write(result_3.stdout)
    with open(os.getcwd()+"/rev/mem2reg.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(os.getcwd()+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(os.getcwd()+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    result_4=subprocess.run([compiler_path,file_path,'--constprop'],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/constprop.ll", 'w') as f:
        f.write(result_4.stdout)
    with open(os.getcwd()+"/rev/constprop.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(os.getcwd()+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(os.getcwd()+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    #AST
    ast_file_path = file_path[0:-3:1] + ".c"
    ast_args=["clang","-fsyntax-only","-Xclang", "-ast-dump" , ast_file_path]
    result_ast=subprocess.run(ast_args,capture_output=True,text=True)
    with open(os.getcwd()+"/rev/source.ast", 'w') as f:
        f.write(result_ast.stdout)
    with open(os.getcwd()+"/rev/source.ast", 'r') as f:
        return_src["ast"] = f.read()
    return_src["testcase"]=[]
    hook=False

    subprocess.run(['opt', '--dot-cfg', './source_code.ll', '-disable-output', '-enable-new-pm=0'])
    dot_files = []
    svg_files = []
    for file_name in os.listdir('./'):
        if file_name.endswith('.dot'):
            dot_files.append(file_name)
            file_name_without_extension = file_name[:-4]
    for file_name in dot_files:
        file_name_without_extension = file_name[:-4]
        svg_file_name = file_name_without_extension + '.svg'
        command = ['dot', '-Tsvg', file_name, '-o', svg_file_name]
        subprocess.run(command)
    for file_name in os.listdir('./'):
        if file_name.endswith('.svg'):
            svg_files.append(file_name)
    for file_name in svg_files:
        file_name_without_extension = file_name[:-4]
        file_name_without_extension = file_name_without_extension[1:]
        with open(file_name, 'r') as f:
            svg_content = f.read()
            return_src["svg"].append(file_name_without_extension)
            return_src["svg"].append(svg_content)
    for file_name in os.listdir('./'):
        if file_name.endswith('.svg') or file_name.endswith('.dot'):
            file_path = os.path.join('./', file_name)
            os.remove(file_path)
    #     # Do something with the file name without extension
    # for folder_name in os.listdir(rev_root):
    #     folder_path = os.path.join(rev_root, folder_name)
    #     if os.path.isdir(folder_path):
    #         for file_name in os.listdir(folder_path):
    #             filepath = os.path.join(folder_path, file_name)
    #             if os.path.isfile(filepath):
    #                 with open(filepath, 'r') as f:
    #                     if(file_name[-1]=='c'):
    #                         target_root=folder_path
    #                         str=f.read()
    #                         str=str.replace(" ","").replace("\n","").replace("\r","")
    #                         if given_code==str:
    #                             hook=True
    # if hook:
    #     for folder_name in os.listdir(rev_root):
    #         folder_path = os.path.join(rev_root, folder_name)
    #         if os.path.isdir(folder_path):
    #             if folder_path==target_root:
    #                 for file_name in os.listdir(folder_path):
    #                     if(file_name[-1]=='c'):
    #                         return_src["testcase"].append(file_name[:-4])
    #                     if(file_name[-1]=='t'):
    #                         with open(folder_path+"/"+file_name, 'r') as f:
    #                             return_src["exe"]=f.read()

    return return_src

@app.route('/receive_text', methods=['POST'])
def receive_text():
    data = request.get_json()
    if not data:
        return "No data received.", 400



if __name__ == '__main__':
    app.run()
from fastapi import FastAPI, WebSocket
from http import HTTPStatus
import dashscope
import time
import uvicorn

dashscope.api_key = "sk-619d7c54c64f4716abf03020a22da908"
app = FastAPI()

@app.websocket("/ws/123456")
async def receive_text(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()  # 获取数据的函数
        if not data:
            time.sleep(0.01)
        else:
            prompt_text=data
            response_generator = dashscope.Generation.call(
                model='qwen-turbo',
                prompt=prompt_text,
                stream=True,
                top_p=0.8
                )
            result=''
            index=0
            for resp in response_generator:
                paragraph = resp.output['text']
                result += paragraph[index:]
                index=len(result)
                if (paragraph.rfind('\n') != -1):
                    result=paragraph.rfind('\n') + 1
                await websocket.send_text(result)
            await websocket.close()  # 在生成器完成后关闭WebSocket连接


uvicorn.run(app, host="127.0.0.1", port=8848)