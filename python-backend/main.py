from fastapi import FastAPI, Request, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import time as dt_time 
import time
import logging
import uuid

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title="PerfectEducation API", version="1.0.0")

# msg response class
class MessageResponse(BaseModel):
    message: str

# data class for post api

class ApplicationForm(BaseModel):
    name: str
    year_group: int
    subjects: list[str]       # Accepts ["subject1", "subject2"]
    time: dt_time             # Accepts stuff like "14:30:00"
    days: list[str]           # Accepts ["day1", "day2"]
    email: EmailStr           # Makes sure its a real email


# middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# api style logging part so u can see if requests get held up and who from
@app.middleware("http")
async def logging_middleware(request: Request, call_next):
    request_id = str(uuid.uuid4())[:8]
    start = time.perf_counter()
    logger.info(f"[{request_id}] {request.method} {request.url.path}")
    response = await call_next(request)
    duration_ms = (time.perf_counter() - start) * 1000
    logger.info(f"[{request_id}] {response.status_code} ({duration_ms:.1f}ms)")
    response.headers["X-Request-ID"] = request_id
    response.headers["X-Response-Time-ms"] = f"{duration_ms:.1f}"
    return response


# function to log people submitting to a file
def save_application(name, year_group, subjects, time, days, email):
    try:
        with open("applications.txt", "a", encoding="utf-8") as file:
            file.write("\n==================================")
            file.write(f"\nName: {name}")
            file.write(f"\nYear: {year_group}")
            file.write(f"\nSubjects: {subjects}")
            file.write(f"\nTime: {time}")
            file.write(f"\nDays: {days}")
            file.write(f"\nEmail: {email}")
    except Exception as error:
        return False #tell the endpoint that it didn't work
    return True 
#post api endpoint

@app.post("/submit", response_model=MessageResponse)
async def submit_appl(form: ApplicationForm):
    saved = save_application(
        name=form.name,
        year_group=form.year_group,
        subjects=form.subjects,
        time=form.time,
        days=form.days,
        email=form.email
    )
    if not saved:
        raise HTTPException(status_code=500, detail="Failed to save application")
        
    return {
        "message": "Saved",
    }
