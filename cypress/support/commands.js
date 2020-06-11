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
Cypress.Commands.add("staysure", (username, password) => {
    cy.visit('https://qa09sts.intertrav.co.uk/sts/login')
    cy.get('input[name=username]').type("stay")
    cy.get('input[name=password]').type("January*27")
    cy.get('input[name=submit]').click()
})

Cypress.Commands.add("avanti", (username, password) => {
    cy.visit('https://qa09avn.intertrav.co.uk/avanti/login')
    cy.get('input[name=username]').type("avanti")
    cy.get('input[name=password]').type("January*27")
    cy.get('input[name=submit]').click()
})

Cypress.Commands.add("expat", (username, password) => {
    cy.visit('https://qa09exp.intertrav.co.uk/expat/login')
    cy.get('input[name=username]').type("stay")
    cy.get('input[name=password]').type("January*27")
    cy.get('input[name=submit]').click()
})