describe ('visit_url', function() {
    it('visit_howserv_product', function() {
        cy.visit('https://qa09sts.intertrav.co.uk/travelinsurance/quote/policy-details')
        //cy.url().should('include','Travel Insurance Quote |Over 50s holiday insurance |Staysure')
    })

    it('trip parameters', function() {
        cy.get('#cover > div > div:nth-child(3) > label').click()
        cy.get('#going-cruise > div > div:nth-child(3) > label').click()
    })

    it('select country', function() {
        cy.get('#toLocationAnnual').select('EUROPE_LR')
    })

    it('dates', function() {
        cy.get('input[id=datepicker-departure-text]').should('be.visible').should('be.enabled').type("14/06/2020")
    })

    it('cover for', function() {
        cy.get('#cover-for > div > div:nth-child(2) > label').click()
        cy.get('input[id=traveler_age_1]').should('be.visible').should('be.enabled').type("31")

        cy.get('#organiserTitle').select('Mr')
        cy.get('input[id=firstname]').should('be.visible').should('be.enabled').type("Madhawa")
        cy.get('input[id=lastname]').should('be.visible').should('be.enabled').type("Ratnayake")
        cy.get('input[id=email]').should('be.visible').should('be.enabled').type("madhawa@intervest.lk")
        cy.get('input[id=dayTimeTelephone]').should('be.visible').should('be.enabled').type("0771257025")
        cy.get('input[id=postcode]').should('be.visible').should('be.enabled').type("NN47YB")
    })

    it('submit travller details', function() {
        cy.get('input[id=btnSubmit]').click()
    })

    it('fucking session', function() {
        cy.wait(2000)
        cy.get('.sessionBtn')
    })

  


})

