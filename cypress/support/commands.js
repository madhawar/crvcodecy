Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, callback = () => {}) => {
    cy.log('Getting iframe body')

    return cy
        .wrap($iframe)
        .should(iframe => expect(iframe.contents().find('body')).to.exist)
        .then(iframe => cy.wrap(iframe.contents().find('body')))
        .within({}, callback)
})

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
