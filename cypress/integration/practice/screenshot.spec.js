describe('Kumpulan test case', () => {

    it('TC-1', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').screenshot()
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})