describe('Case Login', () => {
    before(() => {
        cy.bukaURL()
    })
    
    it('TC-1', () => {
        cy.login()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})