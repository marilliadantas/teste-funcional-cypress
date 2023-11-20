import loc from './locators'

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.login.user).type(user)
    cy.get(loc.login.password).type(passwd)
    cy.get(loc.login.btn_login).click()
    cy.get(loc.message).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.menu.settings).click()
    cy.get(loc.menu.reset).click()
})