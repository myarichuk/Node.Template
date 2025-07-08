FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate && pnpm install --prod
COPY . .
RUN pnpm build
CMD ["node", "dist/index.js"]
