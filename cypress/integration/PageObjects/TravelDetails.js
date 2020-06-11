/// <reference types="Cypress" />

class TravelDetails {
    
    visitSTS() {
        cy.visit('https://qa09sts.intertrav.co.uk/travelinsurance/quote/policy-details')
    }
        
    visitAVN() {
        cy.visit('https://qa09avn.intertrav.co.uk/travelinsurance/quote/policy-details') 
    }
        
    visitEXP() {
        cy.visit('https://qa09exp.intertrav.co.uk/travelinsurance/quote/policy-details')
    }

    policyST() {
        cy.get('#cover > .question-container > :nth-child(2) > label').click()
    }

    cruiseNo() {
        cy.get('#going-cruise > div > div:nth-child(3) > label').click()
    }

    multipleNo() {
        cy.get('#multiple-destination > .question-container > :nth-child(3)')
    }

    partyIndividual() {
        cy.get('#cover-for > div > div:nth-child(2) > label').click()
    }    

}

export default TravelDetails