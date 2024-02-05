FROM node:21
COPY . /app
WORKDIR /app
RUN npm i
EXPOSE 8080
ENTRYPOINT npm run dev
