import TravelDetails from './PageObjects/TravelDetails'
import MedicalDeclaration from './PageObjects/MedicalDeclaration'
import QuoteResults from './PageObjects/QuoteResults'
import Confirmation from './PageObjects/Confirmation'
import Payment from './PageObjects/Payment'

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
})

describe('Staysure Web', function () {    

    it('Get Quote', function () {
        cy.web('uat02', 'sts')
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

        td.destination0().clear().type(this.quote.country_1)
        td.destination0().type('{downarrow}{enter}')
        td.multipleNo().click()

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

    it('Quote Results', function () {
        cy.location('pathname').should('eq', '/travelinsurance/quote/results')

        const qr = new QuoteResults()

        qr.amtComprehensive().should('be.visible').should('be.enabled').click()

        qr.continueOE().should('be.visible').should('be.enabled').click()

        qr.cancellationCoverButton().should('be.visible').should('be.enabled').click()
        cy.wait(4000)
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

    /*
    it ('Purchase Policy', function() {
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
    */    

})

describe('Sprint 6 Voucher', function () {  

    const cf = new Confirmation()

    it('Apply Zero Voucher', function() {       
        cf.payByVoucher().should('be.visible').click()
        cf.enterVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_zero)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('Zero Voucher Error Message', function() {
        cy.contains('Voucher Code has been used and no further credit remaining')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('Apply Expired Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_expired)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('Expired Voucher Error Message', function() {
        cy.contains('Expired Voucher Code')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('Apply Invalid Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_invalid)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()      
    })

    it('Invalid Voucher Error Message', function() {
        cy.contains('Incorrect Voucher Code, please try again')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('Apply Voucher Less Than Policy Price', function() {
        //cf.payByVoucher().should('be.visible').click()
        cf.enterVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucherSmall)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('Voucher less than policy', function() {
        cy.contains('Your voucher has been added')

        cf.voucherHeader().should('not.be.visible')   
        cf.cardType().should('be.visible')    
        cf.purchasePolicy().should('be.visible').contains('Make Payment')
    })

    it('Close voucher box', function() {
        cf.closeVoucher().click()
        cf.closeVoucherConf().click()
        cy.wait(4000)
    })

    it('Apply Voucher More Than Policy Price', function() {
        cf.payByVoucher().should('be.visible').click()
        cf.enterVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucherLarge)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('Voucher more than policy', function() {
        cy.contains('Your voucher has been added')
        cy.contains('Remaining voucher credit')

        cf.voucherHeader().should('not.be.visible')
        cf.cardType().should('not.be.visible')
        cf.purchasePolicy().should('be.visible').contains('Create Policy')
    })

    it('Create Policy', function() {
        cf.purchasePolicy().should('be.visible').contains('Create Policy').click()
        cy.wait(4000)
        cy.location('pathname').should('eq', '/travelinsurance/quote/you-are-now-insured')
    })
})