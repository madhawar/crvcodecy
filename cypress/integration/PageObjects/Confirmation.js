class Confirmation {

    mandatoryFieldsPopupClose() {
        return cy.get('.close > .btn')
    }

    addressLine1() {
        return cy.get('#firstLineOfAddress')
    }
    addressCity() {
        return cy.get('#city')
    }

    emailAddress() {
        return cy.get('#emailAddress')
    }

    dobYYYY() {
        return cy.get('#year')
    }
    dobMM() {
        return cy.get('#month')
    }
    dobDD() {
        return cy.get('#day')
    }

    documentDelivery() {
        return cy.get('#postalCopyRequest')
    }

    cardType() {
        return cy.get('#creditCardType')
    }

    payByVoucher() {
        return cy.get('#voucherCodeCollapseIcon')
    }

    enterFirstVoucher() {
        return cy.get('#voucherCode1')
    }

    enterSecondVoucher() {
        return cy.get('#voucherCode2')
    }

    applyVoucher() {
        return cy.get('#applyVoucherCode')
    }

    voucherHeader() {
        return cy.get('#voucher-header-box')
    }

    closeVoucher() {
        return cy.get('.close-vc > .fa')
    }

    closeVoucherConf() {
        return cy.get('#voucherRemoveProceed')
    }

    closeVoucherConfCancel() {
        return cy.get('#voucherCodeCollapseIcon')
    }

    userDeclaration() {
        return cy.get('#user-declaration')
    }
    userAccept() {
        return cy.get('#user-accept')
    }

    purchasePolicy() {
        return cy.get('#makePayment')
    }
    
    passportEXP() {
        return cy.get('#passPort')
    }

    selfServ_Reg_Email() {
        return cy.get('#selfServeRequestedEmail')
    }

    selfServ_Reg_Password() {
        return cy.get('#my-account-creation-password')
    }

}

export default Confirmation