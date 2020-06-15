/// <reference types="Cypress" />

import TravelDetails from './PageObjects/TravelDetails'
import VoucherEmail from './VoucherEmail'

//Cypress.config('baseUrl', 'https://qa09sts.intertrav.co.uk/travelinsurance/quote')

describe('Travel Insurance Web', function () {

    beforeEach(function () {
        cy.fixture('organiser').then(function (organiser) {
            this.organiser = organiser
        })

        cy.fixture('quote').then(function (quote) {
            this.quote = quote
        })
    })

    it('Get Quote', function () {
        cy.web('qa09', 'sts')
        cy.location('pathname').should('eq', '/travelinsurance/quote/policy-details')
    })

    it('Travel Details', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/policy-details')

        cy.get('#cover > .question-container > :nth-child(2) > label').click()
        cy.get('#going-cruise > div > div:nth-child(3) > label').click()

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
        cy.wait(4000)
    })

    it('Medical Declaration', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/personal-details')
     
        cy.get('#traveler_title_0').should('be.visible').should('be.enabled').select(this.organiser.organiserTitle)
        cy.get('#traveler_first_name_0').should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        cy.get('#traveler_last_name_0').should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)

        cy.get('#checkbox-accept-label').click()
        cy.get(':nth-child(2) > label').click()

        cy.get(':nth-child(6) > .btn').click()
        cy.get('#medical_dec_submit_btn').should('be.visible').should('be.enabled').click()
        cy.wait(4000)
    })

    it('Quote Results', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/results')

        cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN').should('be.visible').should('be.enabled').click()

        cy.get('#OEContinueBtn').should('be.visible').should('be.enabled').click()

        cy.get('#cancellationCoverChangeSubmit').should('be.visible').should('be.enabled').click()
        cy.wait(4000)
    })

    it('Confirmation', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/payment-details')

        cy.get('#firstLineOfAddress').should('be.visible').should('be.enabled').clear().type(this.organiser.address_1)
        cy.get('#city').should('be.visible').should('be.enabled').clear().type(this.organiser.city)

        cy.get('#year').select(this.organiser.year)
        cy.get('#month').select(this.organiser.month)
        cy.get('#day').select(this.organiser.day)

        cy.get('#creditCardType').select('1').should('have.value', '1')

        cy.get('#user-declaration').click('left')
        cy.get('#user-accept').click('left')

        cy.get('#makePayment').should('be.visible').should('be.enabled').click()
    })

    it('Payment Details', function () {
        cy.fixture('cards').then(function (cards) {
            this.cards = cards
        })

        cy.location('hostname').should('eq', 'barclaycardsmartpay')

        cy.get('iframe').click //#Your\ App\:\ \'crvcode\'

        cy.wait(4000)

        cy.get('#card\.cardNumber').clear().type(this.cards.card)
        cy.get('#card\.cardHolderName').clear().type(this.cards.name)
        cy.get('#card\.expiryMonth').select(this.cards.mm)
        cy.get('#card\.expiryYear').select(this.cards.yy)
        cy.get('#card\.cvcCode').type(this.cards.cvv)
        
        cy.get('input[type=submit]').click()
    })
})