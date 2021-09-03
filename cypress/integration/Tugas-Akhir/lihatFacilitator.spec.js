describe('Tugas akhir', () => {

    it('Lihat facilitator', () => {
        cy.bukaURLAdminPKH()
        cy.loginAdminPKH()
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#accordionSidebar > :nth-child(1) > .nav-link').click()
        cy.get('#dataTable_filter > label > .form-control').type('fadil97').should('have.value','fadil97')
        cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(3)').should('have.text','fadil97@gmail.com')
        cy.get('.btn-group > .btn > .fas').first().click()
        cy.get('[href="facilitator/detail/206"]').click()
        cy.get('#user_fullname').should('have.text','Fadhil diubah')
    })

    
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})