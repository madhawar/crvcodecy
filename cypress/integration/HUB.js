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
          })

        cy.wait(4000)
    })

    

})