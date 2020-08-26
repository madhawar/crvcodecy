import TravelDetails from '../PageObjects/TravelDetails'
import MedicalDeclaration from '../PageObjects/MedicalDeclaration'
import QuoteResults from '../PageObjects/QuoteResults'
import Confirmation from '../PageObjects/Confirmation'
import Payment from '../PageObjects/Payment'

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
    cy.fixture('meta').then(function (meta) {
        this.meta = meta
    })
})

describe('IPPRO-375 Add mandatory to email field on QJ in travel details tab', function () {    

    it('Get Quote', function () {
        cy.web(this.meta.server, this.meta.domain)
    })

    it('Travel Details', function () {
        const td = new TravelDetails()

        td.policyST().click()
        td.cruiseNo().click()

        td.partyIndividual().click()
        td.traveller1Age().should('be.visible').should('be.enabled').clear().type(this.quote.traveller_1)

        td.orgTitle().select(this.organiser.organiserTitle)
        td.orgFname().should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        td.orgLname().should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)
        // td.orgEmail().should('be.visible').should('be.enabled').clear().type(this.meta.selfserv_email)
        td.orgTel().should('be.visible').should('be.enabled').clear().type(this.organiser.dayTimeTelephone)
        td.orgPostcode().should('be.visible').should('be.enabled').clear().type(this.organiser.postcode)

        td.departDate().should('be.visible').should('be.enabled').clear().type(this.quote.departure)

        td.destination0().clear().type(this.quote.country_1)
        td.searchCountry0().contains(this.quote.country_1).click()

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
        // cy.wait(4000)
    })

    it('Email validation message', function() {
        cy.contains('Please enter email address')
    })

})
