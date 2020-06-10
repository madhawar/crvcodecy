describe ('visit_url', function() {

    beforeEach(function() {
        Cypress.Cookies.preserveOnce('JSESSIONID')
        //Cypress.Cookies.debug(true)
    })


     it('travel_insurance_product-get_quote', function() {
        cy.visit('https://qa09sts.intertrav.co.uk/travelinsurance/quote/policy-details')
        const page_title = cy.url().should('include','502 Bad Gateway')
        if ('page_title' == true) {
            cy.visit('https://travelinsurance.staysure.co.uk/quote/policy-details  ')
          } else {
            cy.wait(1000)    
          }           
    })

    it('travel_details-single_trip_details_1', function() {
        cy.get('#cover > .question-container > :nth-child(2) > label').click()
        cy.get('#going-cruise > div > div:nth-child(3) > label').click()
        cy.get('#multiple-destination > .question-container > :nth-child(3)')
    })

    it('confirmation-org_details_1', function() {      
        cy.get('#cover-for > div > div:nth-child(2) > label').click()
        cy.get('input[id=traveler_age_1]').should('be.visible').should('be.enabled').type("31")

        cy.get('#organiserTitle').select('Mr')
        cy.get('input[id=firstname]').should('be.visible').should('be.enabled').type("Madhawa")
        cy.get('input[id=lastname]').should('be.visible').should('be.enabled').type("Ratnayake")
        cy.get('input[id=email]').should('be.visible').should('be.enabled').type("madhawa@intervest.lk")
        cy.get('input[id=dayTimeTelephone]').should('be.visible').should('be.enabled').type("0771257025")
        cy.get('input[id=postcode]').should('be.visible').should('be.enabled').type("NN47YB")        
    })

    it('travel_details-single_trip_details_2', function() {
        cy.get('input[id=datepicker-departure-text]').should('be.visible').should('be.enabled').type("14/06/2020")
              
    })

    it('travel_details-single_trip_details_3', function() {
        cy.get('#countrySearchInput').type("France")
        cy.get('#countrySearchInput').type('{downarrow}{enter}')
        cy.get('#multiple-destination > .question-container > :nth-child(3)')
        
    })

    it('travel_details-submit', function() {
        cy.get('input[id=datepicker-return-text]').should('be.visible').should('be.enabled').type("30/06/2020")  
        cy.get('input[id=btnSubmit]').click()
        cy.wait(2000)
    })    

    it('medical_declaration-travellers_details', function() {        
        cy.get('#traveler_title_0').should('be.visible').should('be.enabled').select("Mr")
        cy.get('#traveler_first_name_0').should('be.visible').should('be.enabled').type("Madhawa")
        cy.get('#traveler_last_name_0').should('be.visible').should('be.enabled').type("Ratnayake")        
    })

    it('medical_declaration-medical_declaration', function() {
        cy.get('#checkbox-accept-label').click()
        cy.get(':nth-child(2) > label').click()
    })

    it('medical_declaration-submit', function() {
        cy.get(':nth-child(6) > .btn').click()
    })

    it('medical_declaration-confirmation_popup', function() {
        //cy.wait(1000)
        cy.get('#medical_dec_submit_btn').should('be.visible').should('be.enabled').click()
        cy.wait(1000)
    })

    it('quote_results-package_amt_c', function() {
        cy.get('#ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN').should('be.visible').should('be.enabled').click()
    })

    it('quote_results-submit', function () {
        cy.get('#OEContinueBtn').should('be.visible').should('be.enabled').click()
    })

    it('quote_results-cancellation-popup', function () {
        cy.get('#cancellationCoverChangeSubmit').should('be.visible').should('be.enabled').click()
        cy.wait(1000)
    })

    it('confirmation-org_details_3', function () {        
        cy.get('#firstLineOfAddress').should('be.visible').should('be.enabled').type("345 Cave Stone Road")
        cy.get('#city').should('be.visible').should('be.enabled').type("Bedrock")
    })

    it('confirmation-org_details_2', function () {
        cy.get('#year').select('1989').should('have.value', '1989')
        cy.get('#month').select('4').should('have.value', '4')
        cy.get('#day').select('27').should('have.value', '27')
    })

    it('confirmation-payment_method', function () {
        cy.get('#creditCardType').select('1').should('have.value', '1')
    })

    it('confirmation-voucher_code', function () {
        cy.get('#voucherCode').should('be.visible').should('be.enabled').type("MADHA")
        cy.get('#applyVoucherCode').should('be.visible').should('be.enabled').click()
    })  

    //TODO
    /*it('confirmation-promo_code', function () {
        cy.get('.promo-link').should('be.visible').should('be.enabled').click()
    }) 

    it('confirmation_declarations', function () {     
        cy.get('#user-accept').should('be.visible').click()   
        cy.get('#user-declaration').should('be.visible').click()
        
    })


    it('confirmation_submit', function () {
        cy.get('#makePayment').should('be.visible').should('be.enabled').click()
    })*/

})

