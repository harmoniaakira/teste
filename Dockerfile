ARG dockerRepository
FROM ${dockerRepository}nginx:1.18
COPY build /usr/share/nginx/html
EXPOSE 80


