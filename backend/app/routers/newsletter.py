from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db
from app.email import send_notification

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])


@router.post("", response_model=schemas.NewsletterRead, status_code=201)
def subscribe(payload: schemas.NewsletterCreate, db: Session = Depends(get_db)):
    existing = db.scalar(
        select(models.NewsletterSubscriber).where(
            models.NewsletterSubscriber.email == payload.email
        )
    )
    if existing:
        return existing

    record = models.NewsletterSubscriber(email=payload.email)
    db.add(record)
    db.commit()
    db.refresh(record)

    send_notification(
        subject="New newsletter subscriber",
        body=f"New subscriber: {payload.email}",
    )

    return record
