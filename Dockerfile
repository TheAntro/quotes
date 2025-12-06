FROM node:lts-alpine

EXPOSE 8080

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && \
  adduser -S appuser && \
  chown -R appuser .

COPY index.js node_modules ./

USER appuser

CMD ["node", "index.js"]
