class Confirmation {

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

}

export default Confirmation