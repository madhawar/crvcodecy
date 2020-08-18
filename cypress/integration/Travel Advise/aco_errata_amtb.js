import TravelDetails from '../PageObjects/TravelDetails'
import MedicalDeclaration from '../PageObjects/MedicalDeclaration'
import QuoteResults from '../PageObjects/QuoteResults'
import Confirmation from '../PageObjects/Confirmation'
import Payment from '../PageObjects/Payment'

//Cypress.config('baseUrl', 'https://qa09sts.intertrav.co.uk/travelinsurance/quote')

beforeEach(function () {
    cy.fixture('organiser').then(function (organiser) {
        this.organiser = organiser
    })
    cy.fixture('quote').then(function (quote) {
        this.quote = quote
    })
    cy.fixture('vouchers').then(function (vouchers) {
        this.vouchers = vouchers
    })
    cy.fixture('popups').then(function (popups) {
        this.popups = popups
    })
})

describe('Staysure Web', function () {    

    it('Get Quote', function () {
        cy.web('uat05', 'sts')
        cy.location('pathname').should('eq', '/travelinsurance/quote/policy-details')
    })

    it('Travel Details', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/policy-details')

        const td = new TravelDetails()

        td.policyST().click()
        td.cruiseNo().click()

        td.partyIndividual().click()
        td.traveller1Age().should('be.visible').should('be.enabled').clear().type(this.quote.traveller_1)

        td.orgTitle().select(this.organiser.organiserTitle)
        td.orgFname().should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        td.orgLname().should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)
        td.orgEmail().should('be.visible').should('be.enabled').clear().type(this.organiser.email)
        td.orgTel().should('be.visible').should('be.enabled').clear().type(this.organiser.dayTimeTelephone)
        td.orgPostcode().should('be.visible').should('be.enabled').clear().type(this.organiser.postcode)

        td.departDate().should('be.visible').should('be.enabled').clear().type(this.quote.departure)

        td.destination0().clear().type(this.quote.tda_country_1)
        td.searchCountry0().contains(this.quote.tda_country_1).click()

        td.multipleYes().click()

        cy.get('#add-destination').click()
        td.destination1().clear().type(this.quote.tda_country_2)
        td.searchCountry1().contains(this.quote.tda_country_2).click()

        cy.get('#add-destination').click()
        td.destination2().clear().type(this.quote.tda_country_3)
        td.searchCountry2().contains(this.quote.tda_country_3).click()

        cy.get('#add-destination').click()
        td.destination3().clear().type(this.quote.tda_country_4)
        td.searchCountry3().contains(this.quote.tda_country_4).click()

        td.returnDate().should('be.visible').should('be.enabled').clear().type(this.quote.return)

        td.submitButton().should('be.visible').should('be.enabled').click()        
        cy.wait(4000)
    })

    it('Medical Declaration', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/personal-details')

        const md = new MedicalDeclaration()
   
        md.traveller1Title().should('be.visible').should('be.enabled').select(this.organiser.organiserTitle)
        md.traveller1Name().should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        md.traveller1Surname().should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)

        md.medicalAccept().click()
        md.medicalAcceptConf().click()

        md.traveller1MedicalNo().click()
        md.submitMedical().should('be.visible').should('be.enabled').click()
        cy.wait(4000)
    })

    it('AMT Basic', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/results')

        const qr = new QuoteResults()

        qr.amtBasic().should('be.visible').should('be.enabled').click()         
    })

    it('Travel Advisory Extension Visibility', function() {
        cy.contains(this.popups.Travel_Advice_Extension_Label)
    })

    it('Travel Advisory Extension More Information Popup Open', function() {
        const qr = new QuoteResults()
        qr.travelAdviseExtensionPopupOpenBasic().click()       
    })

    it('Travel Advisory Extension More Information Popup Content', function() {
        cy.contains(this.popups.Travel_Advice_Extension)
    })

    it('Travel Advisory Extension More Information Popup Exit', function() {
        const qr = new QuoteResults()
        qr.travelAdviseExtensionPopupClose().click()          
    })    

    it('Select Travel Advisory Extension', function() {
        const qr = new QuoteResults()
        cy.contains(this.popups.Travel_Advice_Extension_Label)
        qr.travelAdviseExtension().should('be.visible').click()
    })

    it('Submit Quote Results', function() {
        const qr = new QuoteResults()

        qr.continueOE().should('be.visible').should('be.enabled').click()
        qr.cancellationCoverButton().should('be.visible').should('be.enabled').click()
    })

    it('Confirmation', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/payment-details')

        const cf = new Confirmation()

        cf.addressLine1().should('be.visible').should('be.enabled').clear().type(this.organiser.address_1)
        cf.addressCity().should('be.visible').should('be.enabled').clear().type(this.organiser.city)

        cf.dobYYYY().select(this.organiser.year)
        cf.dobMM().select(this.organiser.month)
        cf.dobDD().select(this.organiser.day)

        cf.cardType().select('1').should('have.value', '1')

        cf.userDeclaration().click('left')
        cf.userAccept().click('left')        
    })

    it ('Purchase Policy', function() {
        const cf = new Confirmation()
        
        cf.purchasePolicy().should('be.visible').should('be.enabled').click()
        cy.wait(4000)
    })

    it('Barclayscard Smartpay', function () {
        const pm = new Payment()

        pm.cardNumber().clear().type('4111111111111111')
        pm.cardHolderName().clear().type('KAPILA UNDUKAPUCHCHA')
        pm.expiryMonth().select('10')
        pm.expiryYear().select('2020')
        pm.cvcCode().clear().type('737')
        
        pm.submit().click()
    })

    it('Thank you page', function() {
        cy.location('pathname').should('eq', '/travelinsurance/quote/you-are-now-insured')
    })
  
})
