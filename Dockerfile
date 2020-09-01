FROM node:12 as node

WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/store /usr/share/nginx/html

# Para ejecutarlo
# docker build . -t store:latest
# docker run -d -p 8080:80 store:latest