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

describe('Intertrav HUB', function() {

    it('Login', function() {
        cy.staysure('stay','january*27','uat02')
    })

    it('Click New MO Quote', function() {
        cy.get('.staysureHubMenu > .sidebar-submenu > :nth-child(2) > a').click()
    })

    it('Organiser Details', function() {        
        cy.get('iframe').iframe(() => {
            cy.get('#title').select(this.organiser.organiserTitle)
            cy.get('#organiserDTOFirstName').type(this.organiser.firstname)
            cy.get('#organiserDTOlastName').type(this.organiser.lastname)
            cy.get('#dateOfBirth').type('27/05/1989')
            cy.contains('Your date of birth?').click()
            cy.get('#postCode').type(this.organiser.postcode)
            cy.get('#firstLineOfAddress').type(this.organiser.address_1)
            cy.get('#city').type(this.organiser.city)
            cy.get('#dayTimeTelephone').type(this.organiser.dayTimeTelephone)
            cy.get('#email').type(this.organiser.email)
            cy.get('#tick_to_confirm_organiser_details').click()
            cy.get('#tick_to_confirm_marketing_preferences').click()

            cy.get('#organiserDetailsSubmitBtn').click()
          })

          cy.wait(4000)
    })

    it('Eligibility', function() {
        cy.get('iframe').iframe(() => {
            cy.get('#fromLocationSection > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)')
            .should('be.visible')
            .click()
            cy.get('#customerEligibleQuestionSection > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').click()
            cy.get('#terminalPrognosisNotInclude').click()
            cy.get('#answeredTerminalPrognosisQuestionsForCreateFlowModalSubmitBtn').click()
            cy.get('#tick_to_confirm_eligibility_details').click()
            cy.get('#residentEligibleClientConform > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)').click()

            cy.get('#residentEligibleClientConform > div > div.mgn-both-20 > button').click()
          })

        cy.wait(4000)
    })

    it('Trip Details', function() {
        cy.get('iframe').iframe(() => {
            cy.get('#moTravelDetailForm > fieldset > div:nth-child(3) > div > div > div > div > div.display-flex > div:nth-child(1) > label').click()
            cy.get('#moTravelDetailForm > fieldset > div:nth-child(5) > div > div:nth-child(1) > div > div > div > div:nth-child(2) > label').click()
            cy.get('#moTravelDetailForm > fieldset > div:nth-child(5) > div > div:nth-child(2) > div > div > div > div:nth-child(2) > label').click()
            cy.get('#moTravelDetailForm > fieldset > div:nth-child(5) > div > div:nth-child(3) > div > div > div > div:nth-child(2) > label').click()
            cy.get('#jumpToCountryInput').type('France')
            cy.get('#countrySearchResult').click()
            cy.get('#moTravelDetailForm > fieldset > div:nth-child(11) > div > div > div > div > div > div:nth-child(2) > label').click()

            //cy.get('#datepicker-departure').click()
            cy.get('div.content-answer:nth-child(13) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > img:nth-child(2)').click()
            cy.get('.ui-datepicker-next').click()
            cy.get('.ui-datepicker-calendar > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(7)').click()
            
            //cy.get('#datepicker-return').type('15/07/2020')
            cy.get('#duration').select('20')
            cy.get('#cancellationCoverRequested').type('0')
            cy.get('div.content-answer:nth-child(17) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)').click()
            cy.get('#tick_to_confirm_trip_details').click()

            cy.get('#tripDetailSubmitBtn').click()
          })

        cy.wait(4000)
    })

    it('Travellers Details', function() {
        cy.get('iframe').iframe(() => {
            cy.get('#partyTypeDetailsSection > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)').click()
            cy.get('#amendmentsWithTravellersOptions > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)').click()
            cy.get('#baggageCoverRequested').type('0')
            cy.get('#gadget_cover_answer_div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1)').click()
            cy.get('#tick_to_confirm_traveller_details').click()

            cy.get('#travellerUpdateBtn').click()
        })

        cy.wait(4000)
    })

    it('Medical', function() {
        cy.get('iframe').iframe(() => {
            cy.get('div.mgn-bot-12:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > label:nth-child(1)').click()
            cy.get('#medicalDetailsNextBtn').click()
        })

        cy.wait(4000)
    })

    it('Price Presentation', function() {
        cy.get('iframe').iframe(() => {
            cy.get('#postageType_single_trip').select('1')
            cy.get('#ppContinueBtn').click()
        })

        cy.wait(4000)       
    })

    it('Payment', function() {
        cy.get('iframe').iframe(() => {
           cy.get('#creditCardType').select('1') 
           cy.get('#purchasePolicyButton').click()

           
        })
        cy.get('#confirmPaymentBtn').click()
        cy.wait(4000)       
    })

})