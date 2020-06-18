class TravelDetails {

    policyST() {
        return cy.get('#cover > .question-container > :nth-child(2) > label')
    }
    policyAMT() {

    }

    cruiseYes() {

    }
    cruiseNo() {
        return cy.get('#going-cruise > div > div:nth-child(3) > label')
    }

    fromUK() {
        
    }
    fromIsle() {

    }
    fromGu() {

    }
    fromJe() {

    }

    destination0() {
        return cy.get('#countrySearchInput')
    }

    searchCountry0() {
        return cy.get('*[id="countrySearchResult"]')
    }

    multipleYes() {

    }
    multipleNo() {
        return cy.get('#multiple-destination > .question-container > :nth-child(3)')
    }

    departDate() {
        return cy.get('input[id=datepicker-departure-text]')
    }
    returnDate() {
        return cy.get('input[id=datepicker-return-text]')
    }

    partyIndividual() {
        return cy.get('#cover-for > div > div:nth-child(2) > label')
    } 
    partyCouple() {

    }
    partyFamily() {

    }
    partySPF() {

    }
    partyOther() {

    }

    traveller1Age() {
        return cy.get('input[id=traveler_age_1]')
    }

    submitButton() {
        return cy.get('#btnSubmit')
    }

    orgTitle() {
        return cy.get('#organiserTitle')
    }
    orgFname() {
        return cy.get('input[id=firstname]')
    }
    orgLname() {
        return cy.get('input[id=lastname]')
    }
    orgEmail() {
        return cy.get('input[id=email]')
    }
    orgTel() {
        return cy.get('input[id=dayTimeTelephone]')
    }
    orgPostcode() {
        return cy.get('input[id=postcode]')

    }
        
}

export default TravelDetails