describe ('Upload', ()=>{
    beforeEach(()=>{
        cy.goHome()
        cy.login('papito@cyskills.com.br','showtime')
        cy.userLoggedIn()
        cy.goTo('/tags','Tags')
       })
   it('Deve adiconar algumas tags', ()=>{
  const tags = ['Cypress', 'JavaScript', 'NodeJs']

  tags.forEach(
    t =>{
      cy.get('.new-tag').type(`${t}{Enter}`)
    }
  )
 
  })


   })



