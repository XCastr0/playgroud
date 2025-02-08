describe ('Text', ()=>{
    beforeEach(()=>{
        cy.goHome()
       })
   it('Deve preencher  o campo de area de texto', ()=>{
    cy.login('papito@cyskills.com.br','showtime')
    cy.userLoggedIn()
    cy.goTo('/textarea','Textarea')

    cy.get('textarea[name="message"]').type('Bem vindo a automação usando cypress para o projeto playground')
   })
})

