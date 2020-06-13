/// <reference types="Cypress" />

import TravelDetails from './PageObjects/TravelDetails'
import VoucherEmail from './VoucherEmail'

describe ('Voucheer Email', function () {

    beforeEach(function() {
        Cypress.Cookies.preserveOnce('JSESSIONID')
    })

    after(function() {
        
    })

    it('Click Email Link', function () {  
        const crv = new VoucherEmail()
        crv.visitSTS()
        cy.wait(2000)        
    })

    it('Redeem Voucher', function() {
        cy.get('#voucherApplyProceed').should('be.visible').should('be.enabled').click()
    })
})

describe ('Travel Insurance Web', function() {

    before(function() {
        //https://' + server + domain + '.intertrav.co.uk/travelinsurance/quote/policy-details
        //cy.web('qa09','sts')
    })

    beforeEach(function() {
        Cypress.Cookies.preserveOnce('JSESSIONID')
        //Cypress.Cookies.debug(true)
        //cy.get('#voucher-header-box').should('not.exist')

        cy.fixture('organiser').then(function(organiser) {
            this.organiser = organiser
        })

        cy.fixture('quote').then(function(quote) {
            this.quote = quote
        })
    })
    /*
    it('Get Quote', function () {
        https://' + server + domain + '.intertrav.co.uk/travelinsurance/quote/policy-details
        cy.web('qa09','sts')
    })
    */
    it('Travel Details', function() { 
        cy.get('#cover > .question-container > :nth-child(2) > label').click()
        cy.get('#going-cruise > div > div:nth-child(3) > label').click()
        //cy.get('#multiple-destination > .question-container > :nth-child(3)').click()

        cy.get('#cover-for > div > div:nth-child(2) > label').click()
        cy.get('input[id=traveler_age_1]').should('be.visible').should('be.enabled').clear().type(this.quote.traveller_1)      

        cy.get('#organiserTitle').select(this.organiser.organiserTitle)
        cy.get('input[id=firstname]').should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        cy.get('input[id=lastname]').should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)
        cy.get('input[id=email]').should('be.visible').should('be.enabled').clear().type(this.organiser.email)
        cy.get('input[id=dayTimeTelephone]').should('be.visible').should('be.enabled').clear().type(this.organiser.dayTimeTelephone)
        cy.get('input[id=postcode]').should('be.visible').should('be.enabled').clear().type(this.organiser.postcode)        

        cy.get('input[id=datepicker-departure-text]').should('be.visible').should('be.enabled').clear().type(this.quote.departure)

        cy.get('#countrySearchInput').clear().type(this.quote.country_1)
        cy.get('#countrySearchInput').type('{downarrow}{enter}')
        cy.get('#multiple-destination > .question-container > :nth-child(3)').click()

        cy.get('input[id=datepicker-return-text]').should('be.visible').should('be.enabled').clear().type(this.quote.return)

        cy.get('#btnSubmit').click()
        cy.wait(2500)
    })

    it('Medical Declaration', function() {     
        cy.get('#traveler_title_0').should('be.visible').should('be.enabled').select(this.organiser.organiserTitle)
        cy.get('#traveler_first_name_0').should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        cy.get('#traveler_last_name_0').should('be.visible').should('be.enabled').clear().type(this.organiser.lastname) 
        
        cy.get('#checkbox-accept-label').click()
        cy.get(':nth-child(2) > label').click()

        cy.get(':nth-child(6) > .btn').click()
        cy.wait(2500)
        cy.get('#medical_dec_submit_btn').should('be.visible').should('be.enabled').click()
        cy.wait(2500)
    })

    it('Quote Results', function() {        
        cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN').should('be.visible').should('be.enabled').click()

        cy.get('#OEContinueBtn').should('be.visible').should('be.enabled').click()

        cy.get('#cancellationCoverChangeSubmit').should('be.visible').should('be.enabled').click()
        cy.wait(2500)

/*        cy.title().should('include', 'Avanti').then((val) => {
            if (val) {
                cy.get('#ANNUAL_MULTI_TRIP_DELUXE_BTN').should('be.visible').should('be.enabled').click()
              }
            else {
                cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN').should('be.visible').should('be.enabled').click()
            }
        }) */      
    })

     it('Confirmation', function () {        
        cy.get('#firstLineOfAddress').should('be.visible').should('be.enabled').clear().type(this.organiser.address_1)
        cy.get('#city').should('be.visible').should('be.enabled').clear().type(this.organiser.city)

        cy.get('#year').select(this.organiser.year)//.should('have.value', '1989')
        cy.get('#month').select(this.organiser.month)//.should('have.value', '4')
        cy.get('#day').select(this.organiser.day)//.should('have.value', '27')

        //cy.get('#creditCardType').select('1').should('have.value', '1')
        
        //cy.get('#promoCodeCollapseIcon').should('be.visible').click()
        //cy.get('#promoCode').should('be.visible').should('be.enabled').clear().type(this.vouchers.promocode)
        //cy.get('#applyPromoCode').should('be.visible').should('be.enabled').click()
        //cy.wait(2000)

        //cy.get('#user-accept').should('be.visible').click()   
        //cy.get('#user-declaration').should('be.visible').click()

        //cy.get('#makePayment').should('be.visible').should('be.enabled').click()
    })

})

describe('Voucher Code', function() {

    beforeEach(function() {
        cy.fixture('vouchers').then(function(vouchers) {
            this.vouchers = vouchers
        })
    })

    it('Apply Zero Voucher', function() {       
        cy.get('#voucherCodeCollapseIcon').should('be.visible').click()
        cy.get('#voucherCode').should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_zero)
        cy.get('#applyVoucherCode').should('be.visible').should('be.enabled').click()   
        //cy.wait(2000)     
    })

    it('Zero Voucher Error Message', function() {
        cy.get('#voucher-code').should('be.visible')
        cy.get('#voucher-code').should('be.visible')
    })

    it('Apply Expired Voucher', function() {       
        //cy.get('#voucherCodeCollapseIcon').should('be.visible').click()
        cy.get('#voucherCode').should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_expired)
        cy.get('#applyVoucherCode').should('be.visible').should('be.enabled').click()
        //cy.wait(2000) 
    })

    it('Expired Voucher Error Message', function() {
        cy.get('#voucher-code').should('be.visible') // todo add contains
    })

    it('Apply Invalid Voucher', function() {       
        //cy.get('#voucherCodeCollapseIcon').should('be.visible').click()
        cy.get('#voucherCode').should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_invalid)
        cy.get('#applyVoucherCode').should('be.visible').should('be.enabled').click()    
        //cy.wait(2000)    
    })

    it('Invalid Voucher Error Message', function() {
        cy.get('#voucher-code').should('be.visible')
    })

    it('Apply Valid Voucher', function() {
        //cy.get('#voucherCodeCollapseIcon').should('be.visible').click()
        cy.get('#voucherCode').should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher)
        cy.get('#applyVoucherCode').should('be.visible').should('be.enabled').click()
        //cy.wait(2000) 
    })

    it('Voucher Header', function() {
        cy.get('#voucher-header-box').should('be.visible')
    })
})