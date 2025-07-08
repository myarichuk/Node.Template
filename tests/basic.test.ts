import request from 'supertest';
import app from '../src/index';

describe('API root', () => {
  it('returns greeting JSON', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello world!' });
  });
});
