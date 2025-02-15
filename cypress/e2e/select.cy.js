describe ('Radio Buttons', ()=>{
    beforeEach(()=>{
        cy.goHome()
        cy.login('papito@cyskills.com.br','showtime')
        cy.userLoggedIn()
       })
   it('Deve marcar o framework usado no curso', ()=>{
  
    cy.goTo('/select','Select')

    cy.contains('label','Selecione um Framework de Testes').parent().find('select').select('Cypress')


   })


   it('Deve escolher as linguagens que usam node.js', ()=>{
  
    cy.goTo('/select','Select')

    cy.get('input[placeholder="Linguagens de programação..."]').click()
    cy.contains('.option-item', 'JavaScript').click()

   })

})

