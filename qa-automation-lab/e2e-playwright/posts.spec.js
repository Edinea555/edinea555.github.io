const { test, expect } = require('@playwright/test');
const api = 'https://jsonplaceholder.typicode.com';

test('GET /posts?userId=1 filtra posts por usuário', async ({ request }) => {
  const response = await request.get(`${api}/posts`, { params: { userId: 1 } });
  expect(response.status()).toBe(200);
  const posts = await response.json();
  expect(posts.length).toBeGreaterThan(0);
  expect(posts.every(post => post.userId === 1)).toBe(true);
});

test('POST /posts simula criação sem persistência', async ({ request }) => {
  const payload = { title: 'QA Automation Lab', body: 'Teste de contrato', userId: 1 };
  const response = await request.post(`${api}/posts`, { data: payload });
  expect(response.status()).toBe(201);
  expect(await response.json()).toMatchObject(payload);
});
