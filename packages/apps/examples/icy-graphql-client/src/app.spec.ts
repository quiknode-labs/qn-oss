import request from 'supertest';
import { app } from './app';

describe('main', () => {
  it('works', async () => {
    const response = await request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toStrictEqual({
      message: 'Welcome to icy-graphql-client example!',
    });
  });
});
