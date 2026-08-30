from fastapi import FastAPI, Request, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr
from datetime import time as dt_time 
from fastapi.responses import FileResponse
import time
import logging
import uuid
import json

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title="PerfectEducation API", version="2.1.2")

# msg response class
class MessageResponse(BaseModel):
    message: str

# data class for post api

class ApplicationForm(BaseModel):
    name: str
    year_group: int
    subjects: list[str]       # Accepts ["subject1", "subject2"]
    days: list[str]           # Accepts ["day1", "day2"]
    email: EmailStr           # Makes sure its a real email
    extra: str = ""      # Anything extra, default empty


# middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# compress the js/css bundles vite spits out, they're big
app.add_middleware(GZipMiddleware, minimum_size=1000)

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

# Display api for lessons page, returns content for all lessons
@app.get("/api/lessons/display", response_model=list[dict])
async def display_lessons():
    with open("lessons.json", "r", encoding="utf-8") as file:
        parsed_json = json.load(file)
    return parsed_json.get("Lessons", [])

# get lessons
# Why does the word "lesson" suddenly look really weird to me??? It looks like it's spelt wrong
async def get_lessons():
    with open("lessons.json", "r", encoding="utf-8") as file:
        lessons_data = file.read()

    parsed_json = json.loads(lessons_data)
    
    lesson_names = [{"title": lesson["title"]} for lesson in parsed_json.get("Lessons", [])]
    return lesson_names


@app.get("/api/lessons", response_model=list[dict])
async def lessons():
    lessons = await get_lessons()
    return lessons

# singular lesson query

@app.get("/api/lessons/{lesson}", response_model=dict)
async def lookup_lesson(lesson: str):
    lessons = await get_lessons() 
    lessonl = lesson.lower()
    
    if lessonl not in [l["title"].lower() for l in lessons]:
        raise HTTPException(status_code=404, detail="Lesson not found")
    
    # open and parse
    with open("lessons.json", "r", encoding="utf-8") as file:
        parsed_json = json.load(file) 
    
    for l in parsed_json.get("Lessons", []):
        if l.get("title", "").lower() == lessonl:
            print(f"lesson: {l}")
            return l

    #  stops it returning none
    raise HTTPException(
        status_code=500, 
        detail="Lesson not found in JSON file"
    )
#serve favicon
@app.get("/favicon.svg")
async def favicon():
    return FileResponse("favicon.svg", media_type="image/svg+xml")

# function to log people submitting to a file
def save_application(name, year_group, subjects, days, email, extra):
    try:
        with open("applications.txt", "a", encoding="utf-8") as file:
            file.write("\n==================================")
            file.write(f"\nName: {name}")
            file.write(f"\nYear: {year_group}")
            file.write(f"\nSubjects: {subjects}")
            file.write(f"\nDays: {days}")
            file.write(f"\nEmail: {email}")
            file.write(f"\nExtra: {extra}")
    except Exception as error:
        return False #tell the endpoint that it didn't work
    return True 
#post api endpoint
bad_usernames = ["idk", "1234", "gay"]
async def is_invalid_name(name):
    if name in bad_usernames:
        return True
    else:
        return False
served_subjects = ["math", "science", "english", "digi-tech", "german", "music", "music", "arts", "hass"]
async def is_served_subject(subject):
    print(f"Subject submitted: {subject}")
    if subject not in served_subjects:
        return True
    else:
        return False

@app.post("/submit", response_model=MessageResponse)
async def submit_application(form: ApplicationForm):
    print(f"Name: {form.name}, Grade: {form.year_group}, Subjects: {form.subjects}, Days: {form.days}, Email: {form.email}, Extra: {form.extra}.")
    if form.year_group >= 9 or not str(form.year_group).isdigit():
        print("Rejected grade")
        raise HTTPException(status_code=422, detail="This grade is unavailable for lessons")
        return {
            "message": "This grade is unavailable for lessons",
        }
    invalid_name = await is_invalid_name(form.name)
    if invalid_name:
        if invalid_name is True:
            print("Rejected name")
            raise HTTPException(status_code=422, detail="Your name is invalid")
            return {
                "message": "Your name is invalid",
            }
    for subject in form.subjects:
        rejected = await is_served_subject(subject)
        if rejected is True:
            print("Rejected subjects")
            raise HTTPException(status_code=422, detail="One or more of the subjects selected aren't served")
            return {
                "message": "One or more of the subjects selected aren't served"
            }
    for day in form.days:
        if day.lower() != "monday":
            print("Rejected days")
            raise HTTPException(status_code=422, detail="That day isn't available for lessons")
            return {
                "message": "That day isn't available for lessons"
            }
    saved = save_application(
        name=form.name,
        year_group=form.year_group,
        subjects=form.subjects,
        days=form.days,
        email=form.email,
        extra=form.extra
    )
    if not saved:
        raise HTTPException(status_code=500, detail="Failed to save application")
        
    return {
        "message": "Saved",
    }

@app.get("/assets/images/{filename}")
async def serve_image(filename: str):
    return FileResponse(f"assets/images/{filename}", media_type="image/*")

# the hashed js/css/image files vite puts in dist/assets.
# has to be mounted AFTER the /assets/images route above, otherwise the mount
# swallows those urls first and the lesson images 404
app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

#so ts works properly and serves the website that *I* compiled hehe
@app.get("/", response_class=FileResponse)
async def serve_website():
    return FileResponse("dist/index.html")

# catch all so refreshing on a router path like /about or /lessons/content/1 still
# gives you the app instead of a 404. must stay below every /api route so it only
# picks up whatever is left over
@app.get("/{full_path:path}", response_class=FileResponse)
async def serve_spa(full_path: str):
    # unknown api urls should still come back as json, not the html page
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="Not found")
    return FileResponse("dist/index.html")

# main entry point for server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
