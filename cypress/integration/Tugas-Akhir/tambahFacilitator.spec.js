describe('Tugas akhir', () => {

    it('Tambah facilitator', () => {
        cy.bukaURLAdminPKH()
        cy.loginAdminPKH()
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('.d-flex > .btn').click()
        cy.get('input[type="file"]').attachFile('FC_Internazionale_Milano_2021.svg.png')
        cy.get('#user_fullname').type('Fadhil').should('have.value','Fadhil')
        cy.get('#user_email').type('fadil97@gmail.com').should('have.value','fadil97@gmail.com')
        cy.get('#user_is_active').select('Aktif').should('have.value','1')
        cy.get('#user_password').type('Fadhil').should('have.value','Fadhil')
        cy.get('#user_province_id').select('MALUKU').should('have.value','81')
        cy.get('#user_city_id').select('KOTA TUAL').should('have.value','8172')
        cy.get('#user_subdistrict_id').select('Kur Selatan').should('have.value','817205')
        cy.get('#user_address').type('Alamat tes fadhil').should('have.value','Alamat tes fadhil')
        cy.get('.custom-control').click()
        cy.get('#add').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})