describe('Case Login', () => {
    before(() => {
        cy.bukaURL()
    })
    
    it('TC-1', () => {
        cy.login()
        cy.get('#nameofuser').should('have.text', 'Welcome dojo-Fadhil2')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})