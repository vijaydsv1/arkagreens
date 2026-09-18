import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

from app.database import Base, engine  # noqa: E402
from app.routers import contact, newsletter, orders  # noqa: E402

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Arka Greens API")

origins = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(contact.router)
app.include_router(newsletter.router)
app.include_router(orders.router)


@app.get("/api/health")
def health():
    return {"status": "ok"}
