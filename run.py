from flask import Flask, request
from flask_cors import CORS
import os
import sys
import subprocess

app = Flask(__name__)
CORS(app)  # 这将为所有路由启用 CORS

# 可执行文件绝对地址
compiler_path=sys.path[0]+"/build/SYSY-compiler"
rev_root=sys.path[0]+"/rev"
return_src={}

@app.route('/receive_string', methods=['POST'])
def receive_string():
    data = request.get_json()
    if not data:
        return "No data received.", 400
    O0=True
    risv_V=False
    file_path=rev_root+"/source_code.sy"    
    file_path_2=rev_root+"/source_code.c"
    os.makedirs(rev_root,exist_ok=True)
    for key, values in data.items():
        #处理输入的代码+命令
        if(key=="code"):
            with open(file_path, 'w') as f:
                f.write(values+'\n')
                given_code=values
            with open(file_path_2, 'w') as f:
                f.write(values+'\n')
            compiler_args=[compiler_path, file_path]
        if(key=="option"):
            if "O1" in values:
                O0=False
            if "--riscV" in values:
                risv_V=True
    given_code=given_code.replace(" ","").replace("\n","").replace("\r","")
    #ir
    try:
        result_1=subprocess.run(compiler_args,capture_output=True,text=True,timeout=3)
    except subprocess.TimeoutExpired:
        return "Source_code format wrong"
    with open(sys.path[0]+"/rev/source.ll", 'w') as f:
        if result_1.stderr:
            f.write(result_1.stderr)
        else:
            f.write(result_1.stdout)
    with open(sys.path[0]+"/rev/source.ll", 'r') as f:
        return_src["source_code"] = f.read()

    #pipe
    if O0 == False:
        return_src["pipe"]=['PRE','DCE','mem2reg','cfgSimplify','Loop_Unroll','ConstProp','LoopRotate','StraightLineStrengthReduce']
    else :
        return_src["pipe"]=[]
    return_src["pipeline"]=[]
    #pipline
    with open(sys.path[0]+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    result_2=subprocess.run([compiler_path,file_path,'--dce'],capture_output=True,text=True)
    with open(sys.path[0]+"/rev/dce.ll", 'w') as f:
        f.write(result_2.stdout)
    with open(sys.path[0]+"/rev/dce.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    result_3=subprocess.run([compiler_path,file_path,'--mem2reg'],capture_output=True,text=True)
    with open(sys.path[0]+"/rev/mem2reg.ll", 'w') as f:
        f.write(result_3.stdout)
    with open(sys.path[0]+"/rev/mem2reg.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(sys.path[0]+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(sys.path[0]+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    result_4=subprocess.run([compiler_path,file_path,'--constprop'],capture_output=True,text=True)
    with open(sys.path[0]+"/rev/constprop.ll", 'w') as f:
        f.write(result_4.stdout)
    with open(sys.path[0]+"/rev/constprop.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(sys.path[0]+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    with open(sys.path[0]+"/rev/out.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    #AST
    ast_file_path = file_path[0:-3:1] + ".c"
    ast_args=["clang","-fsyntax-only","-Xclang", "-ast-dump" , ast_file_path]
    result_ast=subprocess.run(ast_args,capture_output=True,text=True)
    with open(sys.path[0]+"/rev/source.ast", 'w') as f:
        f.write(result_ast.stdout)
    with open(sys.path[0]+"/rev/source.ast", 'r') as f:
        return_src["ast"] = f.read()
    return_src["testcase"]=[]
    hook=False

    for folder_name in os.listdir(rev_root):
        folder_path = os.path.join(rev_root, folder_name)
        if os.path.isdir(folder_path):
            for file_name in os.listdir(folder_path):
                filepath = os.path.join(folder_path, file_name)
                if os.path.isfile(filepath):
                    with open(filepath, 'r') as f:
                        if(file_name[-1]=='c'):
                            target_root=folder_path
                            str=f.read()
                            str=str.replace(" ","").replace("\n","").replace("\r","")
                            if given_code==str:
                                hook=True
    if hook:
        for folder_name in os.listdir(rev_root):
            folder_path = os.path.join(rev_root, folder_name)
            if os.path.isdir(folder_path):
                if folder_path==target_root:
                    for file_name in os.listdir(folder_path):
                        if(file_name[-1]=='c'):
                            return_src["testcase"].append(file_name[:-4])
                        if(file_name[-1]=='t'):
                            with open(folder_path+"/"+file_name, 'r') as f:
                                return_src["exe"]=f.read()

    return return_src

@app.route('/receive_text', methods=['POST'])
def receive_text():
    data = request.get_json()
    if not data:
        return "No data received.", 400
    print(data)
if __name__ == '__main__':
    app.run()