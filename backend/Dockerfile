FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY backend/requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY backend /app

RUN python manage.py collectstatic --noinput

# ✅ ใส่ชื่อ Django project ที่ถูกต้อง (ของอาปอยคือ "core")
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
