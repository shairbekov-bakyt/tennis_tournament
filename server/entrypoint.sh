#!/bin/bash

# Collect static files
echo "Collect static files"
python3 manage.py collectstatic --no-input

# Make migrations
echo "Make migrations"
python3 manage.py makemigrations

# migrate
echo "migrate"
python3 manage.py migrate

# Start server
echo "Starting server"

# python3 manage.py runserver 0.0.0.0:8000
gunicorn config.wsgi:application --bind 0.0.0.0:8000

exec "$@"