import { createApp } from './app';
import * as request from 'supertest';
import { DataSource } from 'typeorm';
import { createApiRouter } from './routes';

describe('Express app', () => {
  it('returns the API name at the root route', async () => {
    await request(createApp()).get('/').expect(200).expect('SMKS API');
  });

  it('returns the API name under the hosting subpath', async () => {
    await request(createApp()).get('/smks-api/').expect(200).expect('SMKS API');
  });

  it('serves the archive fetch route through the API router', async () => {
    const dataSource = {
      getRepository: () => ({ find: async () => [] }),
    } as unknown as DataSource;

    await request(createApp(createApiRouter(dataSource)))
      .get('/api/arsip/fetch')
      .expect(200)
      .expect({ status: 'SUCCESS', data: [] });

    await request(createApp(createApiRouter(dataSource)))
      .get('/smks-api/api/arsip/fetch')
      .expect(200)
      .expect({ status: 'SUCCESS', data: [] });
  });
});
