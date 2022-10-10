FROM node:18-alpine as builder
WORKDIR /app

COPY . .

RUN npm install && npm run build-prod

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]