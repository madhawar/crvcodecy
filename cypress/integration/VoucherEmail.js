/// <reference types="Cypress" />

class VoucherEmail {

    visitSTS() {
        cy.visit('https://qa09sts.intertrav.co.uk/travelinsurance/quote/applyVoucher?voucherCode=madhawar')
    }
        
    visitAVN() {
        cy.visit('https://qa09avn.intertrav.co.uk/travelinsurance/quote/applyVoucher?voucherCode=madhawar') 
    }
        
    visitEXP() {
        cy.visit('https://qa09exp.intertrav.co.uk/travelinsurance/quote/applyVoucher?voucherCode=madhawar')
    }

}

export default VoucherEmail