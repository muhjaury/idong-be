import * as request from 'supertest';
import { createApp } from '../src/app';

describe('Express API (e2e)', () => {
  it('GET / returns the API name', () => {
    return request(createApp()).get('/').expect(200).expect('SMKS API');
  });
});
