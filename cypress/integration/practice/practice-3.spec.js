describe('Kumpulan test case', () => {

    it('TC-1', () => {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Fadhil R').should('have.value', 'Fadhil R')
        cy.get('#et_pb_contact_email_0').type('fadilrizqullah@gmail.com').should('have.value', 'fadilrizqullah@gmail.com')
        
    })
    it('TC-2', () => {
        cy.get('.et_pb_contact_submit').click()
        
        
    })
    it('TC-3', () => {
        cy.get('[value="male"]').click().should('be.checked')
        
    })
    it('TC-4', () => {
        cy.get('[value="Bike"]').click().should('be.checked')
        cy.get('[value="Car"]').click().should('be.checked')
        
    })
    it('TC-5', () => {
        cy.get('select').select('Audi')
        cy.get('select').contains('Audi')
    })
    it('TC-6', () => {
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').contains('Button success')
        
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})