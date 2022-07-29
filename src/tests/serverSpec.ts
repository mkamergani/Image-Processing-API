import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Testing endpoints responses', () => {
  it('expects "/api/images" endpoint to respond with status code of 200', async (): Promise<void> => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });

  it('expects "/api/images" endpoint to respond with status code of 200 with the correct params', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/resize?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('expects "/api/images" endpoint to respond with status code of 400 with any missing param', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/resize?filename=fjord&width=200'
    );
    expect(response.status).toBe(400);
  });
});
