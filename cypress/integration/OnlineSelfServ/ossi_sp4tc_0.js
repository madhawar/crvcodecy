import TravelDetails from '../PageObjects/TravelDetails'
import MedicalDeclaration from '../PageObjects/MedicalDeclaration'
import QuoteResults from '../PageObjects/QuoteResults'
import Confirmation from '../PageObjects/Confirmation'
import Payment from '../PageObjects/Payment'
import ThankYou from '../PageObjects/ThankYou'

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

describe('Online Self Serve Integration - Sprint 4 | Test Case 000: Save Quote', function () {

    it('Get Quote', function () {
        cy.web(this.meta.server, this.meta.domain)

        // cy.live_sts_web()
        // cy.live_avn_web()
    })

    it('Fill & submit Travel Details', function () {
        const td = new TravelDetails()

        function Name_Alpha_Numeric() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        const randomName = Name_Alpha_Numeric()

        td.policyST().click()
        td.cruiseNo().click()

        td.partyIndividual().click()
        td.traveller1Age().should('be.visible').should('be.enabled').clear().type(this.quote.traveller_1)

        td.orgTitle().select(this.organiser.organiserTitle).should('have.value', this.organiser.organiserTitle)
        td.orgFname().should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        td.orgLname().should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)
        td.orgEmail().should('be.visible').should('be.enabled').clear().type(this.organiser.selfserv_email)
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
        cy.wait(4000)
    })

    it('Fill & submit Medical Declaration', function () {
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

    it('Save Quote', function () {
        const qr = new QuoteResults()

        cy.contains(this.popups.Save_Quote_Label)
        qr.ossi_btn_save_quote().click()
    })

    it('Popup: Save Your Quote', function () {
        const qr = new QuoteResults()

        qr.ossi_btn_save_quote().click()
        qr.ossi_save_quote_password().clear().type(this.organiser.selfserv_password_invalid)
        qr.ossi_btn_save_quote_save().click()
        cy.contains(this.popups.Password_Invalid_Error)

        qr.ossi_save_quote_password().clear().type(this.organiser.selfserv_password)
        qr.ossi_btn_save_quote_save().click()
    })

    it('Popup: Thank You', function () {
        const qr = new QuoteResults()

        cy.contains(this.popups.Save_Quote_Save_Success)

        qr.ossi_btn_save_quote_return().click()
    })

 
    it('Click Change Details Button', function () {
        const qr = new QuoteResults()

        qr.btn_change_details().click()
    })

    it('User should be already logged in to Self Serv. Edit & submit Travel Details', function () {
        const td = new TravelDetails()

        cy.contains(this.popups.Logged_In_Self_Serv)

        td.orgEmail().should('be.visible').should('be.enabled').clear().type(this.organiser.self_serv_inactive)

        td.submitButton().should('be.visible').should('be.enabled').click()
        cy.wait(4000)
    })

    it('Popup: This email address is already registered > Continue Quote', function () {
        const td = new TravelDetails()

        td.ossi_popup_btn_continue().click()

        cy.wait(4000)
    })

    it('Edit & submit Medical Declaration', function () {
        const md = new MedicalDeclaration()

        md.medicalAccept().click()
        md.medicalAcceptConf().click()

        md.traveller1MedicalNo().click()
        md.submitMedical().should('be.visible').should('be.enabled').click()
        cy.wait(4000)
    })

    it('Save Quote', function () {
        const qr = new QuoteResults()

        cy.contains(this.popups.Save_Quote_Label)
        qr.ossi_btn_save_quote().click()
    })

    it('Popup: Save Your Quote', function () {
        const qr = new QuoteResults()

        cy.contains(this.popups.Save_Quote_Password_Condition_1)
        cy.contains(this.popups.Save_Quote_Password_Condition_2)
        cy.contains(this.popups.Save_Quote_Password_Condition_3)
    })

    it('Popup: Save Your Quote > Empty password validation', function () {
        const qr = new QuoteResults()

        qr.ossi_btn_save_quote_save().click()
        cy.contains(this.popups.Password_Validation)
    })

    it('Popup: Save Your Quote > Invalid password validation', function () {
        const qr = new QuoteResults()

        qr.ossi_save_quote_password().type('hmmhmmhariharihari@9A')
        qr.ossi_btn_save_quote_save().click()
        cy.contains(this.popups.Password_Invalid_Error)        
    })

})