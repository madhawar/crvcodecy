class QuoteResults {

    amtComprehensive() {
        return cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN')
    }

    amtDeluxe() {
        return cy.get('#ANNUAL_MULTI_TRIP_DELUXE_BTN')
    }

    continueOE() {
        return cy.get('#OEContinueBtn')
    }

    cancellationCoverButton() {
        return cy.get('#cancellationCoverChangeSubmit')
    }
}

export default QuoteResults