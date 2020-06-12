/// <reference types="Cypress" />

import TravelDetails from './PageObjects/TravelDetails'
import VoucherEmail from './VoucherEmail'

describe('Travel Insurance Web', function () {

    beforeEach(function () {
        Cypress.Cookies.preserveOnce('JSESSIONID')

        cy.fixture('organiser').then(function (organiser) {
            this.organiser = organiser
        })

        cy.fixture('quote').then(function (quote) {
            this.quote = quote
        })
    })

    it('Get Quote', function () {
        https: //' + server + domain + '.intertrav.co.uk/travelinsurance/quote/policy-details
            cy.web('qa09', 'avn')
    })

    it('Travel Details', function () {
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

    it('Medical Declaration', function () {
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

    it('Quote Results', function () {
        cy.get('#ANNUAL_MULTI_TRIP_DELUXE_BTN').should('be.visible').should('be.enabled').click()

        cy.get('#OEContinueBtn').should('be.visible').should('be.enabled').click()

        cy.get('#cancellationCoverChangeSubmit').should('be.visible').should('be.enabled').click()
        cy.wait(2500)
    })

    it('Confirmation', function () {
        cy.get('#firstLineOfAddress').should('be.visible').should('be.enabled').clear().type(this.organiser.address_1)
        cy.get('#city').should('be.visible').should('be.enabled').clear().type(this.organiser.city)

        cy.get('#year').select(this.organiser.year)
        cy.get('#month').select(this.organiser.month)
        cy.get('#day').select(this.organiser.day)

        cy.get('#creditCardType').select('1').should('have.value', '1')

        cy.get('#promoCodeCollapseIcon').should('be.visible').click()
        cy.get('#promoCode').should('be.visible').should('be.enabled').clear().type(this.quote.promocode)
        cy.get('#applyPromoCode').should('be.visible').should('be.enabled').click()
        cy.wait(2000)
    })

    it('Payment Details', function () {
        cy.get('#user-declaration').click('left')
        cy.get('#user-accept').click('left')

        cy.get('#makePayment').should('be.visible').should('be.enabled').click()
    })

    after(function () {
        cy.fixture('organiser').then(function (organiser) {
            this.organiser = organiser
        })

        cy.get('#card\.cardNumber').clear().type(this.organiser.CARD)
        cy.get('#card\.cardHolderName').clear().type(this.organiser.NAME)
        cy.get('#card\.expiryMonth').select(this.organiser.MM)
        cy.get('#card\.expiryYear').select(this.organiser.YY)
        cy.get('#card\.cvcCode').type(this.organiser.CVV)

        cy.get('input[type=submit]').click()
    })


})