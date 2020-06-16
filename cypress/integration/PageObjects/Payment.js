class Payment {

    cardNumber() {
        return cy.get('#card\.cardNumber')
    }
    cardHolderName() {
        return cy.get('#card\.cardHolderName')
    }
    expiryMonth() {
        return cy.get('#card\.expiryMonth')
    }
    expiryYear() {
        return cy.get('#card\.expiryYear')
    }
    cvcCode() {
        return cy.get('#card\.cvcCode')
    }

    submit() {
        return cy.get('input[type=submit]')
    }

}

export default Payment