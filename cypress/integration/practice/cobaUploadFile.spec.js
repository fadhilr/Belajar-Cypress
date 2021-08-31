describe('Upload File', () => {

    it('Upload file', () => {
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')
        cy.get('#btn-login').click()
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('.d-flex > .btn').click()
        cy.get('input[type="file"]').attachFile('FC_Internazionale_Milano_2021.svg.png')
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})