/// <reference types="Cypress" />

import TravelDetails from './PageObjects/TravelDetails'

describe('Travel Insurance Web', function() {

    it('Travel Details', function () {
        const td = new TravelDetails()
        td.visitSTS()
        cy.title().should('include', 'Staysure')
        td.cruiseNo()
        td.multipleNo()
    })
    
})