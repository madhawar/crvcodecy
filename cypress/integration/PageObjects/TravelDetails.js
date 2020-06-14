/// <reference types="Cypress" />

class TravelDetails {

    visit() {
        cy.visit('https://travelinsurance.staysure.co.uk/quote/policy-details')
    }
    
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
        return cy.get('#cover > .question-container > :nth-child(2) > label')
    }

    cruiseNo() {
        return cy.get('#going-cruise > div > div:nth-child(3) > label')
    }

    multipleNo() {
        return cy.get('#multiple-destination > .question-container > :nth-child(3)')
    }

    partyIndividual() {
        return cy.get('#cover-for > div > div:nth-child(2) > label')
    }    

}

export default TravelDetails