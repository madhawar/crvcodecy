class Confirmation {

    cardType() {
        return cy.get('#creditCardType')
    }

    payByVoucher() {
        return cy.get('#voucherCodeCollapseIcon')
    }

    enterVoucher() {
        return cy.get('#voucherCode')
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

    purchasePolicy() {
        return cy.get('#makePayment')
    }

}

export default Confirmation