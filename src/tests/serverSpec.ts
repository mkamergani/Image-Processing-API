import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Testing endpoints responses', (): void => {
  it('expects "/api/images" endpoint to respond with status code of 200', async (): Promise<void> => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });

  it('expects "/api/images/resize" endpoint to respond with status code of 200 with the correct params', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/resize?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('expects "/api/images/resize" endpoint to respond with status code of 400 with any missing param', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/resize?filename=fjord&width=200'
    );
    expect(response.status).toBe(400);
  });
  it('expects "/api/images/resize" endpoint to respond with status code of 400 if width is not a number', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/resize?filename=fjord&width=200f&height=200'
    );
    expect(response.status).toBe(400);
  });
  it('expects "/api/images/resize" endpoint to respond with status code of 400 if height is not a number', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/resize?filename=fjord&width=200&height=200d'
    );
    expect(response.status).toBe(400);
  });
});
