import TravelDetails from './PageObjects/TravelDetails'
import QuoteResults from './PageObjects/QuoteResults'
import Confirmation from './PageObjects/Confirmation'

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

        const qr = new QuoteResults()

        qr.amtC().should('be.visible').should('be.enabled').click()

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
    })

    /*it('Payment Details', function () {
        cy.fixture('cards').then(function (cards) {
            this.cards = cards
        })

        cy.get('#makePayment').should('be.visible').should('be.enabled').click()

        cy.location('hostname').should('eq', 'barclaycardsmartpay')

        cy.get('iframe').click //#Your\ App\:\ \'crvcode\'

        cy.wait(4000)

        cy.get('#card\.cardNumber').clear().type(this.cards.card)
        cy.get('#card\.cardHolderName').clear().type(this.cards.name)
        cy.get('#card\.expiryMonth').select(this.cards.mm)
        cy.get('#card\.expiryYear').select(this.cards.yy)
        cy.get('#card\.cvcCode').type(this.cards.cvv)
        
        cy.get('input[type=submit]').click()
    })*/    

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