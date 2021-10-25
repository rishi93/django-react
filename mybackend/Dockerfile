# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /mybackend
COPY requirements.txt /mybackend/
RUN pip install -U pip
RUN pip install -r requirements.txt
COPY . /mybackend/
EXPOSE 8000