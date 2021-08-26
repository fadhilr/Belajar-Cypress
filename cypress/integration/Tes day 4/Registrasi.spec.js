describe('Case Registrasi', () => {
    before(() => {
        cy.bukaURL()
    })

    it('TC-1', () => {
        cy.get('#signin2').click()
        cy.wait(2000)
        cy.get('#sign-username').type('dojo-Fadhil')
        cy.get('#sign-password').type('1234')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

})