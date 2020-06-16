

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
    })

    it('Claims Question', function() {
        //cy.get('#claimsMadeMTA').click()
        
        cy.get('div', '#claimQuestionOnMTA').within(($form) => {
            cy.contains('Have there been any claims made, any claims pending or are there any intentions to claim on this policy?')
            cy.get('input').eq(2).click()
        })
    })

})