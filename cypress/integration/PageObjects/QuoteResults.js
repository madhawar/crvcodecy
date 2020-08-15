class QuoteResults {

    stBasic() {
        return cy.get('#SINGLE_TRIP_BASIC_BTN')
    }

    stComprehensive() {
        return cy.get('#SINGLE_TRIP_COMPREHENSIVE_BTN')
    }

    amtBasic() {
        return cy.get('#ANNUAL_MULTI_TRIP_BASIC_BTN')
    }

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

    travelAdviseExtension() {
        return cy.get('#OEWEB_FCO_ADVICE > label')
        //return cy.get('//*[@id="optionalExtras[8].selected"]')
    }
}

export default QuoteResults