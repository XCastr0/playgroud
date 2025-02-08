describe ('CheckBox', ()=>{
    beforeEach(()=>{
        cy.goHome()
       })
   it('Deve marcar as linguagens que usam node.js', ()=>{
    cy.login('papito@cyskills.com.br','showtime')
    cy.userLoggedIn()
    cy.goTo('/checkbox','Checkbox')

    cy.get('input[value=1]').click({force:true})

    cy.get('input[value=5]').click({force:true})
   })
   it('Deve marcar as linguagens que não usam node.js', ()=>{
    cy.login('papito@cyskills.com.br','showtime')
    cy.userLoggedIn()
    cy.goTo('/checkbox','Checkbox')

    cy.get('input[value=2]').click({force:true})

    cy.get('input[value=3]').click({force:true})
    cy.get('input[value=4]').click({force:true})
   })
   it('Deve marcar as linguagens que não usam node.js', ()=>{
    cy.login('papito@cyskills.com.br','showtime')
    cy.userLoggedIn()
    cy.goTo('/checkbox','Checkbox')

    cy.get('input[value=2]').click({force:true})

    cy.get('input[value=3]').click({force:true})
    cy.get('input[value=4]').click({force:true})
   })
   it('Deve marcar todas as linguagens ', ()=>{
    cy.login('papito@cyskills.com.br','showtime')
    cy.userLoggedIn()
    cy.goTo('/checkbox','Checkbox')

    
    cy.get('input[value=1]').click({force:true})
    cy.get('input[value=2]').click({force:true})

    cy.get('input[value=3]').click({force:true})
    cy.get('input[value=4]').click({force:true})
    
    cy.get('input[value=5]').click({force:true})
   })
})

