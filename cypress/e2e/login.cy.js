describe('Login', () => {

  beforeEach(()=>{
   cy.goHome()
  })
  it('Deve logar com sucesso ', () => {
cy.login('papito@cyskills.com.br','showtime')

  cy.userLoggedIn()
  })

  it('Não deve logar com senha inválida ', () => {
    cy.login('papito@cyskills.com.br','Teste1234')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  
  })
  it('Não deve logar com email não cadastrado', () => {
    cy.login('testeqa@cyskills.com.br','Teste1234')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })
  it('Não deve logar com email inválido', () => {
    cy.login('testeqacyskills.com.br','Teste1234')
cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  
  })
})

