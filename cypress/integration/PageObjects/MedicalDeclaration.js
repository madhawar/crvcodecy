class MedicalDeclaration {

    traveller1Title() {
        return cy.get('#traveler_title_0')
    }
    traveller1Name() {
        return cy.get('#traveler_first_name_0')
    }
    traveller1Surname() {
        return cy.get('#traveler_last_name_0')
    }

    medicalAccept() {
        return cy.get('#checkbox-accept-label')
    }
    medicalAcceptConf() {
        return cy.get('.question-container > :nth-child(2) > label')
    }

    traveller1MedicalNo() {
        return cy.get(':nth-child(6) > .btn')
    }

    submitMedical() {
        return cy.get('#medical_dec_submit_btn')
    }

    selfServEdit() {
        return cy.get('#my-basic-details-edit-medical-dec')
    }

    selfServTitle() {
        return cy.get('#my-title')
    }

    selfServFirstName() {
        return cy.get('#my-fname')
    }

    selfServLastName() {
        return cy.get('#my-lname')
    }

    selfServAddress1() {
        return cy.get('#my-address')
    }

    selfServAddress2() {
        return cy.get('#my-address2')
    }

    selfServDOB() {
        return cy.get('#my-dob')
    }

    selfServCity() {
        return cy.get('#my-town')
    }

    selfServCounty() {
        return cy.get('#my-county')
    }

    selfServPostcode() {
        return cy.get('#my-postcode')
    }

    selfServTelephone() {
        return cy.get('#my-telephone')
    }

    btnSelfServSave() {
        return cy.get('#confirm-details-btn')
    }

    btnSelfServExit() {
        return cy.get('#exit-without-save-btn')
    }

    btnSelfServSaveSuccess() {
        return cy.get('#auto-populated-details-updated-btn')
    }

    btnSelfServExitWithoutSave() {
        return cy.get('#exit-without-save-btn2')
    }

    btnSelfServExitWithSave() {
        return cy.get('#save-changes-btn')
    }
    

}

export default MedicalDeclaration