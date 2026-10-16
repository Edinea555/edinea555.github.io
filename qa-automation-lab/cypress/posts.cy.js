describe('JSONPlaceholder | API Posts', () => {
  const api = 'https://jsonplaceholder.typicode.com';

  it('GET /posts/1: valida status e contrato básico', () => {
    cy.request(`${api}/posts/1`).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.include({ id: 1, userId: 1 });
      expect(body.title).to.be.a('string').and.not.be.empty;
      expect(body.body).to.be.a('string').and.not.be.empty;
    });
  });

  it('GET /posts/999999: retorna 404', () => {
    cy.request({ url: `${api}/posts/999999`, failOnStatusCode: false })
      .its('status').should('eq', 404);
  });
});
