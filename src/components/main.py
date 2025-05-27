from fastapi import FastAPI, UploadFile, Form
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os
import datetime

app = FastAPI()

BASE_DIR = "C:/ArtyData"

class UploadPayload(BaseModel):
    tenant_id: str
    device_name: str
    log: str
    summary: str = ""
    script: str = ""

@app.post("/api/upload")
async def upload_log(payload: UploadPayload):
    tenant_path = os.path.join(BASE_DIR, payload.tenant_id)
    os.makedirs(os.path.join(tenant_path, "logs"), exist_ok=True)
    os.makedirs(os.path.join(tenant_path, "summaries"), exist_ok=True)
    os.makedirs(os.path.join(tenant_path, "tasks"), exist_ok=True)

    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    log_path = os.path.join(tenant_path, "logs", f"{payload.device_name}_{timestamp}.txt")
    with open(log_path, "w", encoding="utf-8") as f:
        f.write(payload.log)

    if payload.summary:
        with open(os.path.join(tenant_path, "summaries", f"{payload.device_name}_{timestamp}.txt"), "w", encoding="utf-8") as f:
            f.write(payload.summary)

    if payload.script:
        with open(os.path.join(tenant_path, "tasks", f"{payload.device_name}_{timestamp}.py"), "w", encoding="utf-8") as f:
            f.write(payload.script)

    return JSONResponse({"status": "stored", "tenant": payload.tenant_id})
