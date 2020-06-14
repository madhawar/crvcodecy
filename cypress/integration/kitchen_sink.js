/// <reference types="Cypress" />

import TravelDetails from './PageObjects/TravelDetails'

describe('Travel Insurance Web', function () {
    it('Get Quote', function () {
        const td = new TravelDetails()
        td.visit()
    })     

    it('Add Details', function () {
        const td = new TravelDetails()
        td.policyST().click()
        td.cruiseNo().click()
        td.cruiseNo().click()
    })     
})

Cypress.config('baseUrl', '	http://dummy.restapiexample.com/api/v1')

describe('API Testing', function () {
    it('GET - read', function () {
        cy.request('GET', '/employee/1').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.not.to.be.null
        })
    })

    it('POST - create', function () {
        const item = {
            "name": "Kapila Undukapuchcha",
            "salary": "20000",
            "age": "23"
        }
        cy.request('POST', '/create', item).its('body').its('data').should('include', {
            age: '23'
        })
    })

    it('PUT - update', function () {
        const item = {
            "name": "Moda Manitha",
            "salary": "0",
            "age": "23"
        }
        cy.request('PUT', '/update/2', item).its('body').its('data').should('include', {
            employee_salary: '0'
        })
    })
})