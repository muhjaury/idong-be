import express = require('express');
import { Express, Router } from 'express';

export function createApp(apiRouter?: Router): Express {
  const app = express();

  app.use((request, response, next) => {
    const origin = request.headers.origin;
    if (origin) {
      response.setHeader('Access-Control-Allow-Origin', origin);
      response.setHeader('Vary', 'Origin');
    }
    response.setHeader(
      'Access-Control-Allow-Methods',
      'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    );
    response.setHeader(
      'Access-Control-Allow-Headers',
      request.headers['access-control-request-headers'] ??
        'Content-Type,Authorization',
    );

    if (request.method === 'OPTIONS') {
      response.sendStatus(204);
      return;
    }

    next();
  });

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  const appBasePath = process.env.APP_BASE_PATH || '/smks-api';
  app.get(['/', appBasePath, `${appBasePath}/`], (_request, response) => {
    response.send('SMKS API');
  });

  if (apiRouter) {
    app.use(['/api', `${appBasePath}/api`], apiRouter);
  }

  return app;
}
