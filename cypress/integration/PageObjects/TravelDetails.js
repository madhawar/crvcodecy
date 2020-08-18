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

    fromEXP() {
        return cy.get('#expatFromLocation')
    }

    destination0() {
        return cy.get('#countrySearchInput')
    }

    searchCountry0() {
        return cy.get('*[id="countrySearchResult"]')
    }

    destination1() {
        return cy.get('#countrySearchInput1')
    }

    searchCountry1() {
        return cy.get('*[id="countrySearchResult1"]')
    }

    destination2() {
        return cy.get('#countrySearchInput2')
    }

    searchCountry2() {
        return cy.get('*[id="countrySearchResult2"]')
    }

    destination3() {
        return cy.get('#countrySearchInput3')
    }

    searchCountry3() {
        return cy.get('*[id="countrySearchResult3"]')
    }

    destination4() {
        return cy.get('#countrySearchInput4')
    }

    searchCountry4() {
        return cy.get('*[id="countrySearchResult4"]')
    }

    multipleYes() {
        return cy.get('#multiple-destination-yes-btn')
    }
    multipleNo() {
        return cy.get('#multiple-destination-no-btn')
    }

    addMultipleDestination() {
        return cy.get('#add-destination')
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