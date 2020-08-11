import TravelDetails from './PageObjects/TravelDetails'
import MedicalDeclaration from './PageObjects/MedicalDeclaration'
import QuoteResults from './PageObjects/QuoteResults'
import Confirmation from './PageObjects/Confirmation'
import Payment from './PageObjects/Payment'

//Cypress.config('baseUrl', 'https://qa09avn.intertrav.co.uk/travelinsurance/quote')

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

describe('Avanti Web', function () {    

    it('Get Quote', function () {
        cy.web('qa09', 'avn')
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
        td.searchCountry0().contains(this.quote.country_1).click();
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

        qr.amtDeluxe().should('be.visible').should('be.enabled').click()

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

describe('Sprint 6 Voucher 1', function () {  

    const cf = new Confirmation()
    
    it('VB1 Apply Zero Voucher', function() {       
        cf.payByVoucher().should('be.visible').click()
        cf.enterFirstVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_zero)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('VB1 Zero Voucher Error Message', function() {
        cy.contains('Zero Remaining Amount Voucher')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('VB1 Apply Expired Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterFirstVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_expired)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('VB1 Expired Voucher Error Message', function() {
        cy.contains('Expired Voucher')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('VB1 Apply Invalid Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterFirstVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_invalid)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()      
    })

    it('VB1 Invalid Voucher Error Message', function() {
        cy.contains('Invalid Voucher')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('VB1 Apply Voucher 1', function() {
        //cf.payByVoucher().should('be.visible').click()
        cf.enterFirstVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucherSmallAVN)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('VB1 Voucher Successfully Added', function() {
        cy.contains('Your voucher has been added')
        cf.voucherHeader().should('not.be.visible')        
    })

})

describe('Sprint 6 Voucher 2', function () {  

    const cf = new Confirmation()
    
    it('VB2 Apply Zero Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterSecondVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_zero)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('VB2 Zero Voucher Error Message', function() {
        cy.contains('Zero Remaining Amount Voucher')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('VB2 Apply Expired Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterSecondVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_expired)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('VB2 Expired Voucher Error Message', function() {
        cy.contains('Expired Voucher')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('VB2 Apply Invalid Voucher', function() {       
        //cf.payByVoucher().should('be.visible').click()
        cf.enterSecondVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucher_invalid)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()      
    })

    it('VB2 Invalid Voucher Error Message', function() {
        cy.contains('Invalid Voucher')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('VB2 Apply Voucher 2', function() {
        //cf.payByVoucher().should('be.visible').click()
        cf.enterSecondVoucher().should('be.visible').should('be.enabled').clear().type(this.vouchers.voucherLargeAVN)
        cf.applyVoucher().should('be.visible').should('be.enabled').click()
    })

    it('Both vouchers have been added label', function() {
        cy.contains('Both vouchers have been added')
        cf.voucherHeader().should('not.be.visible')        
    })

    it('Both Vouchers On Display', function() {
        cy.contains(this.vouchers.voucherSmallAVN + ' & ' + this.vouchers.voucherLargeAVN)
        cf.voucherHeader().should('not.be.visible')        
    })


    /*it('Create Policy', function() {
        cf.purchasePolicy().should('be.visible').contains('Create Policy').click()
        cy.wait(4000)
        cy.location('pathname').should('eq', '/travelinsurance/quote/you-are-now-insured')
    })*/

})