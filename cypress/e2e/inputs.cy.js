describe ('Input Fields', ()=>{
    beforeEach(()=>{
        cy.goHome()
       })
   it('Deve preencher  o campo texto', ()=>{
    cy.login('papito@cyskills.com.br','showtime')
    cy.userLoggedIn()

    cy.get('nav a[href="/input-fields"]').click()
    cy.contains('h2', 'Input Fields').should('be.visible')
    cy.get('[data-cy="fullname"]').type('Luana Beatriz')
    cy.get('[data-cy="email"]').type('luanaqa@teste.com')
    cy.get('[data-cy="number"]').type("2025")
    cy.get('[data-cy="date"]').type('2025-01-08')
   })
})