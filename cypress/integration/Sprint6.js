/// <reference types="Cypress" />

import TravelDetails from './PageObjects/TravelDetails'
import VoucherEmail from './VoucherEmail'

describe ('Travel Insurance Web', function() {

    before(function() {
        
    })

    beforeEach(function() {
        Cypress.Cookies.preserveOnce('JSESSIONID')
        //Cypress.Cookies.debug(true)
        //cy.get('#voucher-header-box').should('not.exist')
        cy.fixture('organiser').then(function(data) {
            this.data = data
        })
    })

    it('Get Quote', function () {
        /*
        CRV Sprint 6 Voucher Email Link
        const crv = new VoucherEmail()
        crv.visitSTS()
        cy.wait(2000)
        cy.get('#voucherApplyProceed').should('be.visible').should('be.enabled').click()
        */

       cy.web('qa09','sts')   
    })


    it('Travel Details', function() {
        cy.get('#cover > .question-container > :nth-child(2) > label').click()
        cy.get('#going-cruise > div > div:nth-child(3) > label').click()
        cy.get('#multiple-destination > .question-container > :nth-child(3)')

        cy.get('#cover-for > div > div:nth-child(2) > label').click()
        cy.get('input[id=traveler_age_1]').should('be.visible').should('be.enabled').type("31")

        cy.get('#organiserTitle').select(this.data.organiserTitle)
        cy.get('input[id=firstname]').should('be.visible').should('be.enabled').type(this.data.firstname)
        cy.get('input[id=lastname]').should('be.visible').should('be.enabled').type(this.data.lastname)
        cy.get('input[id=email]').should('be.visible').should('be.enabled').type(this.data.email)
        cy.get('input[id=dayTimeTelephone]').should('be.visible').should('be.enabled').type(this.data.dayTimeTelephone)
        cy.get('input[id=postcode]').should('be.visible').should('be.enabled').type(this.data.postcode)        

        cy.get('input[id=datepicker-departure-text]').should('be.visible').should('be.enabled').type("14/06/2020")

        cy.get('#countrySearchInput').type("France")
        cy.get('#countrySearchInput').type('{downarrow}{enter}')
        cy.get('#multiple-destination > .question-container > :nth-child(3)')

        cy.get('input[id=datepicker-return-text]').should('be.visible').should('be.enabled').type("30/06/2020")

        cy.get('#btnSubmit').click()
        cy.wait(2000)
    })

    it('Medical Declaration', function() {     
        cy.get('#traveler_title_0').should('be.visible').should('be.enabled').select(this.data.organiserTitle)
        cy.get('#traveler_first_name_0').should('be.visible').should('be.enabled').type(this.data.firstname)
        cy.get('#traveler_last_name_0').should('be.visible').should('be.enabled').type(this.data.lastname) 
        
        cy.get('#checkbox-accept-label').click()
        cy.get(':nth-child(2) > label').click()

        cy.get(':nth-child(6) > .btn').click()
        cy.wait(2000)
        cy.get('#medical_dec_submit_btn').should('be.visible').should('be.enabled').click()
        cy.wait(2000)
    })

    it('Quote Results', function() {        
        cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN').should('be.visible').should('be.enabled').click()

        cy.get('#OEContinueBtn').should('be.visible').should('be.enabled').click()

        cy.get('#cancellationCoverChangeSubmit').should('be.visible').should('be.enabled').click()
        cy.wait(2000)

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
        cy.get('#firstLineOfAddress').should('be.visible').should('be.enabled').type("345 Cave Stone Road")
        cy.get('#city').should('be.visible').should('be.enabled').type("Bedrock")

        cy.get('#year').select('1989').should('have.value', '1989')
        cy.get('#month').select('4').should('have.value', '4')
        cy.get('#day').select('27').should('have.value', '27')

        //cy.get('#creditCardType').select('1').should('have.value', '1')
        
        cy.get('#promoCodeCollapseIcon').should('be.visible').click()
        cy.get('#promoCode').should('be.visible').should('be.enabled').type("MADHAWA")
        cy.get('#applyPromoCode').should('be.visible').should('be.enabled').click()
        cy.wait(2000)

        //cy.get('#user-accept').should('be.visible').click()   
        //cy.get('#user-declaration').should('be.visible').click()

        //cy.get('#makePayment').should('be.visible').should('be.enabled').click()
    })

    it('Apply Voucher', function() {
        cy.get('#voucherCodeCollapseIcon').should('be.visible').click()
        cy.get('#voucherCode').should('be.visible').should('be.enabled').type("MADHA")
        cy.get('#applyVoucherCode').should('be.visible').should('be.enabled').click()
        //cy.wait(2000)
    })

    it('Voucher Header', function() {
        cy.get('#voucher-header-box').should('be.visible')
    })

})