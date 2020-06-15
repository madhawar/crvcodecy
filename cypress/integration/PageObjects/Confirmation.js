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

    purchasePolicy() {
        return cy.get('#makePayment')
    }

    createPolicy() {

    }

}

export default Confirmation