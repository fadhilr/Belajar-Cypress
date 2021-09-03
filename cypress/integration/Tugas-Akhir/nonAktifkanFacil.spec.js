describe('Tugas akhir', () => {

    it('Non aktifkan facilitator', () => {
        cy.bukaURLAdminPKH()
        cy.loginAdminPKH()
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#accordionSidebar > :nth-child(1) > .nav-link').click()
        cy.get('#dataTable_filter > label > .form-control').type('fadil97').should('have.value','fadil97')
        cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(3)').should('have.text','fadil97@gmail.com')
        cy.get('.btn-group > .btn > .fas').first().click()
        cy.get('[onclick="update_status(206, 1);"]').click()
        cy.get('#modal-body').should('have.text','Perubahan fasilitator berhasil diproses')
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

    
})