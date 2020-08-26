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

    stEssential() {
        return cy.get('#SINGLE_TRIP_ESSENTIALS_BTN')
    }

    stClassic() {
        return cy.get('#SINGLE_TRIP_CLASSIC_BTN')
    }

    stDeluxe() {
        return cy.get('#SINGLE_TRIP_DELUXE_BTN')
    }

    amtEssential() {
        return cy.get('#ANNUAL_MULTI_TRIP_ESSENTIALS_BTN')
    }

    amtClassic() {
        return cy.get('#ANNUAL_MULTI_TRIP_CLASSIC_BTN')
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
    }          

    travelAdviseExtensionPopupOpen() {
        return cy.get(':nth-child(5) > :nth-child(2) > .covertype > .tooltip-icon > .AocMore')        
    }

    travelAdviseExtensionPopupOpenBasic() {
        return cy.get(':nth-child(2) > :nth-child(2) > .covertype > .tooltip-icon > .AocMore')    
    }    

    travelAdviseExtensionPopupClose() {
        return cy.get('.sub-close')
    }    

    ossi_popup_thank_you() {
        return cy.get('#save-quote-thank-you-popup > .popup-content > .popup-footer > .btn-submit')
    }

    ossi_popup_login_to_selfserv() {
        return cy.get('#save-quote-thank-you-popup > .popup-content > .popup-footer > .btn-submit-outline')
    }

    ossi_email() {
        return cy.get('#signInFormId > #signInForm > #username')
    }

    ossi_btn_save_quote() {
        return cy.get('.d-flex > #\#')
    }

    ossi_popup_close() {
        return cy.get('#save-quote-thank-you-popup > .popup-content > .popup-header > .close')
    }
}

export default QuoteResults