# SMKS API

Backend API built with Express, TypeScript, and TypeORM.

## Requirements

- Node.js
- MySQL

## Setup

```bash
npm install
```

Database connection settings are in `src/database/database.providers.ts`.

## Run

```bash
npm run start:dev
npm run build
npm run start:prod
```

The API listens on port `3000` by default. Set `PORT` to override it.

## Test

```bash
npm test
npm run test:e2e
```
