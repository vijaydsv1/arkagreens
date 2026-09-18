from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    subject: str = Field(default="", max_length=300)
    message: str = Field(min_length=1, max_length=5000)


class ContactRead(BaseModel):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class NewsletterCreate(BaseModel):
    email: EmailStr


class NewsletterRead(BaseModel):
    id: int
    email: str
    created_at: datetime

    model_config = {"from_attributes": True}


class OrderItemCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    unit: str = Field(min_length=1, max_length=100)
    unit_price: float = Field(gt=0)
    quantity: int = Field(gt=0, le=999)


class OrderCreate(BaseModel):
    customer_name: str = Field(min_length=1, max_length=200)
    phone: str = Field(min_length=6, max_length=30)
    email: EmailStr
    address: str = Field(min_length=1, max_length=2000)
    notes: str = Field(default="", max_length=2000)
    items: list[OrderItemCreate] = Field(min_length=1)


class OrderRead(BaseModel):
    id: int
    total: float
    created_at: datetime

    model_config = {"from_attributes": True}
