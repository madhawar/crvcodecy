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
        return cy.get(':nth-child(2) > label')
    }

    traveller1MedicalNo() {
        return cy.get(':nth-child(6) > .btn')
    }

    submitMedical() {
        return cy.get('#medical_dec_submit_btn')
    }

}

export default MedicalDeclaration