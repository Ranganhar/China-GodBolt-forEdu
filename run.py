from flask import Flask, request
from flask_cors import CORS
import os
import sys
import subprocess
import shutil

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
            compiler_args=[compiler_path, file_path,'--target=riscv64-unknown-elf','-emit-llvm','-S','-g0','-O','-Xclang','-disable-llvm-passes','-o',os.getcwd()+"/rev/source.ll"]
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
            riscvasm=subprocess.run(["llc","-march=riscv64","-filetype=asm","./rev/source.ll","-o","./rev/riscvasm.s"],capture_output=True,text=True,timeout=3)
        except Exception as e:
            print(e)
            return "RISCV compile error"
        if riscvasm.stderr:
            with open(os.getcwd()+"/rev/riscvasm.s", 'w') as f:
                f.write(riscvasm.stderr)
        with open(os.getcwd()+"/rev/riscvasm.s", 'r') as f:
            return_src["source_code"] = f.read()
    #pipe
    if O0 == False:
        return_src["pipe"]=['mem2reg','DCE','simplifycfg','reassociate','gvn','ConstProp','LoopRotate','StraightLineStrengthReduce']
    else :
        return_src["pipe"]=[]
    return_src["pipeline"]=[]
    #pipline
    subprocess.run(['opt','--mem2reg','-S','./rev/source.ll','--debug-pass=Structure','-stats','-o','./rev/mem2reg.ll'],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/mem2reg.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--dce','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/dce.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/dce.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--simplifycfg','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/cfgsimple.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/cfgsimple.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--reassociate','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/reassociate.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/reassociate.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--gvn','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/gvn.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/gvn.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--constprop','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/constprop.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/constprop.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--loop-rotate','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/looprotate.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/looprotate.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    subprocess.run(['opt','--mem2reg','--slsr','-S',os.getcwd()+"/rev/source.ll",'--debug-pass=Structure','-stats','-o',os.getcwd()+"/rev/slsr.ll"],capture_output=True,text=True)
    with open(os.getcwd()+"/rev/slsr.ll", 'r') as f:
        return_src["pipeline"].append(f.read())
    #AST
    ast_file_path = file_path[0:-3:1] + ".c"
    ast_args=["clang","-fsyntax-only","-Xclang", "-ast-dump", './rev/source_code.c']
    res=subprocess.run(ast_args,capture_output=True,text=True)
    with open(os.getcwd()+"/rev/source.ast", 'w') as f:
        f.write(res.stdout)
    with open(os.getcwd()+"/rev/source.ast", 'r') as f:
        return_src["ast"] = f.read()
    return_src["graph"]=[]
    shutil.copy('./rev/source.ll', './source_code.ll')
    subprocess.run(['opt', '--dot-cfg', './source_code.ll', '-disable-output'])
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
            if not any(d['name'] == file_name_without_extension for d in return_src["graph"]):
                return_src["graph"].append({"name":file_name_without_extension,"svg":svg_content})
            # return_src["graph"].append(svg_content)
    for file_name in os.listdir('./'):
        if file_name.endswith('.svg') or file_name.endswith('.dot'):
            file_path = os.path.join('./', file_name)
            os.remove(file_path)

    return return_src

@app.route('/receive_text', methods=['POST'])
def receive_text():
    data = request.get_json()
    if not data:
        return "No data received.", 400



if __name__ == '__main__':
    app.run()