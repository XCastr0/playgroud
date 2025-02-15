describe ('Radio Buttons', ()=>{
    beforeEach(()=>{
        cy.goHome()
        cy.login('papito@cyskills.com.br','showtime')
        cy.userLoggedIn()
       })
   it('Deve marcar o framework usado no curso', ()=>{
  
    cy.goTo('/radio','Radio Buttons')

    cy.contains('label','Cypress').click()


   })


})

