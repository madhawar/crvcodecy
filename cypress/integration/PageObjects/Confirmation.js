class Confirmation {

    addressLine1() {
        return cy.get('#firstLineOfAddress')
    }
    addressCity() {
        return cy.get('#city')
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

    userDeclaration() {
        return cy.get('#user-declaration')
    }
    userAccept() {
        return cy.get('#user-accept')
    }

    purchasePolicy() {
        return cy.get('#makePayment')
    }

}

export default Confirmation