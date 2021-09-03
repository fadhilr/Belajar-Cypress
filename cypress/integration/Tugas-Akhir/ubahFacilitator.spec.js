
describe('Tugas akhir', () => {

    it('Ubah facilitator', () => {
        cy.bukaURLAdminPKH()
        cy.loginAdminPKH()
        cy.get('#dataTable_filter > label > .form-control').type('fadil97').should('have.value','fadil97')
        cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(3)').should('have.text','fadil97@gmail.com')
        cy.get('.btn-group > .btn > .fas').first().click()
        cy.get('[href="facilitator/detail/206"]').click()
        cy.get('.btn-outline-primary').click()
        cy.get('#user_fullname').clear().type('Fadhil diubah').should('have.value','Fadhil diubah')
        cy.get('input[type="file"]').attachFile('FC_Internazionale_Milano_2021.svg.png')
        cy.get('#edit').click()
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})