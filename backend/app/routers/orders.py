from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db
from app.email import send_notification

router = APIRouter(prefix="/api/orders", tags=["orders"])


@router.post("", response_model=schemas.OrderRead, status_code=201)
def submit_order(payload: schemas.OrderCreate, db: Session = Depends(get_db)):
    total = sum(item.unit_price * item.quantity for item in payload.items)

    order = models.Order(
        customer_name=payload.customer_name,
        phone=payload.phone,
        email=payload.email,
        address=payload.address,
        notes=payload.notes,
        total=total,
        items=[
            models.OrderItem(
                name=item.name,
                unit=item.unit,
                unit_price=item.unit_price,
                quantity=item.quantity,
            )
            for item in payload.items
        ],
    )
    db.add(order)
    db.commit()
    db.refresh(order)

    lines = "\n".join(
        f"  - {item.quantity} x {item.name} ({item.unit}) @ Rs.{item.unit_price:.2f}"
        for item in payload.items
    )
    send_notification(
        subject=f"New order inquiry from {payload.customer_name} (Rs.{total:.2f})",
        body=(
            f"Customer: {payload.customer_name}\n"
            f"Phone: {payload.phone}\n"
            f"Email: {payload.email}\n"
            f"Address: {payload.address}\n"
            f"Notes: {payload.notes or '(none)'}\n\n"
            f"Items:\n{lines}\n\n"
            f"Total: Rs.{total:.2f}\n\n"
            "This is an order INQUIRY -- no payment has been taken. "
            "Contact the customer to confirm and arrange payment."
        ),
    )

    return order
