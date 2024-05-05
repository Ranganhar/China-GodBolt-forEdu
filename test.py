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