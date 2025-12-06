FROM node:lts-alpine AS deps

WORKDIR /app

COPY . .

RUN npm ci --omit=dev


FROM node:lts-alpine

EXPOSE 8080

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/index.js ./index.js

RUN adduser -S appuser && \
  chown -R appuser .

USER appuser

CMD ["node", "index.js"]
