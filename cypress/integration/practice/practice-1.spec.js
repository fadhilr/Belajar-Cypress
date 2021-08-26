describe('Kumpulan test case', () => {

    it('TC-1', () => {
        // cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        // cy.get('select').select('opel')
        // cy.get('[value = "Bike"]').check()
    })
    it('TC-2', () => {
        cy.login()
        cy.get('.bl-text-field__input').type('Fadhil').should('have.value', 'Fadhil')
        cy.go('back')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})