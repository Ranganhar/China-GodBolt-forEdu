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
    data = await websocket.receive_json()  # 获取数据的函数
    if not data:
        time.sleep(0.01)
    else:
        prompt_text=data.get('text')
        response_generator = dashscope.Generation.call(
            model='qwen-turbo',
            prompt=prompt_text,
            stream=True,
            top_p=0.8
            )
        result=''
        for resp in response_generator:
            paragraph = resp.output['text']
            result = paragraph
            if (paragraph.rfind('\n') != -1):
                result=paragraph.rfind('\n') + 1
            await websocket.send_text(result)
            
uvicorn.run(app, host="127.0.0.1", port=8848)