FROM node:12.18-alpine3.9

WORKDIR /indecision-app
# ENV PATH /indecision-app/node_modules/.bin:PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

ENV test_value 8585
ENV KUBERNETES_SERVICE_PORT=555

EXPOSE 8080

CMD ["npm", "start"]