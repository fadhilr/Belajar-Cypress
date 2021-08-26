describe('Case Login', () => {
    before(() => {
        cy.bukaURL()
    })

    it('TC-1', () => {
        cy.login()
        cy.wait(2000)
        cy.get(':nth-child(1) > .card > .card-block > .card-title').click({force:true})
        for (let index = 0; index < 2; index++) {
            cy.get('.col-sm-12 > .btn').click()
        }
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

})