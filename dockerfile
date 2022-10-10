FROM node:18-alpine as frontend-builder

WORKDIR /app

COPY ./shop-frontend .

RUN npm install && npm run build

FROM node:18-alpine

WORKDIR /app

COPY ./shop-backend .

RUN npm install && npm run build

COPY --from=frontend-builder /app/build/* /app/client/

EXPOSE 4200

CMD ["node", "dist/main.js"]