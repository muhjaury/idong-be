import { createApp } from './app';
import { initializeDatabase } from './database/database.providers';
import { createApiRouter } from './routes';

async function bootstrap() {
  const dataSource = await initializeDatabase();
  const app = createApp(createApiRouter(dataSource));
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`SMKS API listening on port ${port}`);
  });
}

bootstrap().catch((error: unknown) => {
  console.error('Failed to start SMKS API', error);
  process.exitCode = 1;
});
