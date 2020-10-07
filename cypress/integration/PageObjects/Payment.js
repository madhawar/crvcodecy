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

    back() {
        return cy.get('#mainBack')
    }

    // New 
    
    cardNumberTuna() {
        return cy.get('#cardNumber')
    }
    cardHolderNameTuna() {
        return cy.get('#cardholderName')
    }
    expiryMonthTuna() {
        return cy.get('#expiryMonth')
    }
    expiryYearTuna() {
        return cy.get('#expiryYear')
    }
    cvcCodeTuna() {
        return cy.get('#csc')
    }

    submitTuna() {
        return cy.get('#btnSubmit')
    }

    backTuna() {
        return cy.get('#btnCancel')
    }
}

export default Payment