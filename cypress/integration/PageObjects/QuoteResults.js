class QuoteResults {

    amtC() {
        return cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN')
    }

    amtDeluxe() {
        return cy.get('#ANNUAL_MULTI_TRIP_DELUXE_BTN')
    }
}

export default QuoteResults