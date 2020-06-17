

describe('Intertrav HUB Login', function() {

    it('Login', function() {
        cy.staysure('stay','january*27','uat02')
    })

    it('HUB Search', function() {
        cy.get('#sale').click()
        cy.get('#firstName').clear().type('Kapila')
        cy.get('#mainSearchBtn').click()
        cy.get('#viewPolicyBtn').click()
        cy.get('#amendPolicybtn > div').click()
        cy.get('#amendPolicy').click()

        cy.wait(4000)
    })

    it('Claims Question', function() {
        cy.get('iframe').iframe(() => {
            cy.get('#claimsMadeMTA').click()
            cy.get('#claimQuestMTAContinueBtn').click()
        })
        cy.wait(4000)
    })

    it('Organiser Details', function() {        
        cy.get('iframe').iframe(() => {
            cy.get('#amendmentsWithTravellers').click()
        })
    })

    

})