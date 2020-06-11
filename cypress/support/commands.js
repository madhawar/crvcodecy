// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("staysure", (username, password, server) => {
    cy.visit('https://' + server + 'sts.intertrav.co.uk/sts/login')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(password)
    cy.get('input[name=submit]').click()
})

Cypress.Commands.add("avanti", (username, password, server) => {
    cy.visit('https://' + server + 'avn.intertrav.co.uk/avanti/login')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(password)
    cy.get('input[name=submit]').click()
})

Cypress.Commands.add("expat", (username, password, server) => {
    cy.visit('https://' + server + 'exp.intertrav.co.uk/expat/login')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(password)
    cy.get('input[name=submit]').click()
})

Cypress.Commands.add("web", (server, domain) => {
    cy.visit('https://' + server + domain + '.intertrav.co.uk/travelinsurance/quote/policy-details')
})
