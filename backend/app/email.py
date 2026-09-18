import logging
import os
import smtplib
from email.message import EmailMessage

logger = logging.getLogger("arkagreens.email")


def send_notification(subject: str, body: str) -> None:
    """Best-effort email notification.

    Never raises: a missing SMTP config or a delivery failure is logged and
    swallowed so that the submission that triggered it is never lost just
    because email isn't wired up yet.
    """
    host = os.getenv("SMTP_HOST")
    port = os.getenv("SMTP_PORT")
    user = os.getenv("SMTP_USER")
    password = os.getenv("SMTP_PASSWORD")
    from_email = os.getenv("FROM_EMAIL") or user
    to_email = os.getenv("TO_EMAIL")

    if not all([host, port, user, password, from_email, to_email]):
        logger.warning(
            "SMTP is not configured (see backend/.env.example) -- "
            "skipping email for: %s",
            subject,
        )
        return

    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = from_email
    message["To"] = to_email
    message.set_content(body)

    try:
        with smtplib.SMTP(host, int(port), timeout=10) as server:
            server.starttls()
            server.login(user, password)
            server.send_message(message)
    except Exception:
        logger.exception("Failed to send notification email: %s", subject)
