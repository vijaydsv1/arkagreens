from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db
from app.email import send_notification

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=schemas.ContactRead, status_code=201)
def submit_contact(payload: schemas.ContactCreate, db: Session = Depends(get_db)):
    record = models.ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
    )
    db.add(record)
    db.commit()
    db.refresh(record)

    send_notification(
        subject=f"New contact message from {payload.name}",
        body=(
            f"Name: {payload.name}\n"
            f"Email: {payload.email}\n"
            f"Subject: {payload.subject or '(none)'}\n\n"
            f"{payload.message}"
        ),
    )

    return record
