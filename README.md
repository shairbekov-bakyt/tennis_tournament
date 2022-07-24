# tennis tournament

- We create an abstract tennis application that will:
  - payment system
  - rate system
  - multilingual systems
 
# Installation
- clone this repo :
```
$ git clone https://github.com/Shairbekov-Bakyt/tennis_tournament
```
- run application :
```
$ sudo docker-compose up -d  --build
```

# Instruction
- migrations :
```
$ docker-compose exec web python3 manage.py makemigrations
```
- migrate :
```
$ docker-compose exec web python3 manage.py migrate
```
- create admin user:
```
$ docker-compose exec web python3 manage.py createsuperuser
```
