describe ('Tables', ()=>{
    beforeEach(()=>{
        cy.goHome()
        cy.login('papito@cyskills.com.br','showtime')
        cy.userLoggedIn()
        cy.goTo('/tables','Tables')
       })
   it('Deve validar a linha do Github', ()=>{
   cy.contains( 'table tbody tr','1004' ).should('be.visible').and('contain', 'Github' )
 
  })


   })


