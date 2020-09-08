class Payment {

    cardNumber() {
        // return cy.get('input[id="card.cardNumber"]')
        return cy.get('#cardNumber')
    }
    cardHolderName() {
        //return cy.get('input[id="card.cardHolderName"]')
        return cy.get('#cardholderName')
    }
    expiryMonth() {
        // return cy.get('select[id="card.expiryMonth"]')
        return cy.get('#expiryMonth')
    }
    expiryYear() {
        // return cy.get('select[id="card.expiryYear"]')
        return cy.get('#expiryYear')
    }
    cvcCode() {
        // return cy.get('input[id="card.cvcCode"]')
        return cy.get('#csc')
    }

    submit() {
        // return cy.get('input[name=pay]')
        return cy.get('#btnSubmit')
    }

    back() {
        
    }
}

export default Payment