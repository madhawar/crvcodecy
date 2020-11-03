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

describe('Logged in users should not have Save Quote function', function () {    

    it('Get Quote', function () {
        cy.web(this.meta.server, this.meta.domain)

        // cy.live_sts_web()
        // cy.live_avn_web()
    })

    it('Login to Self Serv', function() {
        const td = new TravelDetails()

        td.ossi_email().type(this.organiser.selfserv_email_new)
        td.ossi_password().type(this.organiser.selfserv_password)
        td.ossi_btn_login().click()
        td.ossi_btn_login_success().click()
    })

    it('Verify whether user logged in successfully', function() {
        cy.contains(this.popups.Logged_In_Self_Serv)
    })

    it('Submit quote details without prepopulated details', function () {
        const td = new TravelDetails()

        td.policyST().click()
        td.cruiseNo().click()

        td.partyIndividual().click()
        td.traveller1Age().should('be.visible').should('be.enabled').clear().type(this.quote.traveller_1)

        // td.orgTitle().select(this.organiser.organiserTitle)
        // td.orgFname().should('be.visible').should('be.enabled').clear().type(this.organiser.firstname)
        // td.orgLname().should('be.visible').should('be.enabled').clear().type(this.organiser.lastname)
        // td.orgEmail().should('be.visible').should('be.enabled').clear().type(this.organiser.selfserv_email)
        // td.orgTel().should('be.visible').should('be.enabled').clear().type(this.organiser.dayTimeTelephone)
        // td.orgPostcode().should('be.visible').should('be.enabled').clear().type(this.organiser.postcode)

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

    it('Medical Declaration', function () {
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

    it('Save Quote function should not exist. Select Policy Type.', function () {
        const qr = new QuoteResults()

        cy.contains(this.popups.Save_Quote_Label).should('not.exist')

        // qr.ossi_popup_close().click()

        cy.get('.logo').then(elem => {
            let alt = elem.attr('alt');
    
            if (alt === "Staysure") {
                qr.stComprehensive().should('be.visible').should('be.enabled').click() 
            }
            else if (alt === "Avanti") {
                qr.stEssential().should('be.visible').should('be.enabled').click() 
            }
    
        })            
        cy.wait(4000)      
    })

    it('Submit Quote Results', function() {
        const qr = new QuoteResults()

        qr.continueOE().should('be.visible').should('be.enabled').click()
    })

    it('Submit confirmation without prepopulated details', function () {
        const cf = new Confirmation()

        // cf.addressLine1().should('be.visible').should('be.enabled').clear().type(this.organiser.address_1)
        // cf.addressCity().should('be.visible').should('be.enabled').clear().type(this.organiser.city)

        // cf.dobYYYY().select(this.organiser.year)
        // cf.dobMM().select(this.organiser.month)
        // cf.dobDD().select(this.organiser.day)

        cf.cardType().select('1').should('have.value', '1')

        cf.userDeclaration().click('left')
        cf.userAccept().click('left')        
    })

    it ('Purchase Policy', function() {
        const cf = new Confirmation()
        
        cf.purchasePolicy().should('be.visible').should('be.enabled').click()
    })

    it ('Reduirect Popup', function() {
        const cf = new Confirmation()       

        cy.contains(this.popups.Self_Serv_Redirect_Popup)
        cy.wait(4000)
    })

    it('Barclayscard Smartpay', function () {
        const pm = new Payment()

        cy.title().then((tit) => {
            //let host = loc.host;
    
            if (tit === "Complete your order - Barclaycard Checkout") {
                pm.cardNumberTuna().clear().type(this.meta.cc)
                pm.cardHolderNameTuna().clear().type(this.meta.name)
                pm.expiryMonthTuna().select(this.meta.mm)
                pm.expiryYearTuna().select(this.meta.yy)
                pm.cvcCodeTuna().clear().type(this.meta.cvv)
                
                pm.submitTuna().click()
            }
            else if (tit === "Step 1: Choose your Payment Method") {
                pm.cardNumber().clear().type(this.meta.cc)
                pm.cardHolderName().clear().type(this.meta.name)
                pm.expiryMonth().select(this.meta.mm)
                pm.expiryYear().select(this.meta.yyyy)
                pm.cvcCode().clear().type(this.meta.cvv)
                
                pm.submit().click()
            }
    
        }) 
    })

    it('Redirect to Self Serv', function() {
        cy.contains(this.popups.Self_Serv_My_Current)
        cy.contains(this.popups.Self_Serv_Greeting)
    })
  
})
