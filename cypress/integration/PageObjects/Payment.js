class Payment {

    cardNumber() {
        return cy.get('input[id="card.cardNumber"]')
    }
    cardHolderName() {
        return cy.get('input[id="card.cardHolderName"]')
    }
    expiryMonth() {
        return cy.get('select[id="card.expiryMonth"]')
    }
    expiryYear() {
        return cy.get('select[id="card.expiryYear"]')
    }
    cvcCode() {
        return cy.get('input[id="card.cvcCode"]')
    }

    submit() {
        return cy.get('input[name=pay]')
    }
}

export default Payment