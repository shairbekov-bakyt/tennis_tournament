FROM node:lts-alpine3.12 as build

WORKDIR /frontend

COPY ./webserver/frontend/package.json ./
COPY ./webserver/frontend/package-lock.json ./

RUN npm install
COPY ./webserver/frontend/ ./
RUN npm run build


FROM nginx:1.18.0-alpine

COPY ./webserver/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend/build /usr/share/nginx/html