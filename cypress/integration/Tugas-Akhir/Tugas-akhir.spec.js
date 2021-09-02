describe('Tugas akhir', () => {

    it('Tambah facilitator', () => {
        // cy.visit('')
        // cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        // cy.get('#input-password').type('admin').should('have.value','admin')
        // cy.get('#btn-login').click()
        // cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        // cy.get('.d-flex > .btn').click()
        // cy.get('input[type="file"]').attachFile('FC_Internazionale_Milano_2021.svg.png')
        // cy.get('#user_fullname').type('Fadhil').should('have.value','Fadhil')
        // cy.get('#user_email').type('fadil97@gmail.com').should('have.value','fadil97@gmail.com')
        // cy.get('#user_is_active').select('Aktif').should('have.value','1')
        // cy.get('#user_password').type('Fadhil').should('have.value','Fadhil')
        // cy.get('#user_province_id').select('MALUKU').should('have.value','81')
        // cy.get('#user_city_id').select('KOTA TUAL').should('have.value','8172')
        // cy.get('#user_subdistrict_id').select('Kur Selatan').should('have.value','817205')
        // cy.get('#user_address').type('Alamat tes fadhil').should('have.value','Alamat tes fadhil')
        // cy.get('.custom-control').click()
        // cy.get('#add').click()
        // cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })

    it('Lihat facilitator', () => {
        cy.visit('')
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.get('#btn-login').click()
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#accordionSidebar > :nth-child(1) > .nav-link').click()
        cy.get('#dataTable_filter > label > .form-control').type('fadil97').should('have.value','fadil97')
        cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(3)').should('have.text','fadil97@gmail.com')
        cy.get('.btn-group > .btn > .fas').first().click()
        cy.get('[href="facilitator/detail/206"]').click()
        cy.get('#user_fullname').should('have.text','Fadhil')
    })

    it('Ubah facilitator', () => {
        // cy.get('.btn-outline-primary').click()
        // cy.get('#user_fullname').type('Fadhil diubah').should('have.value','Fadhil diubah')
        // cy.get('input[type="file"]').attachFile('FC_Internazionale_Milano_2021.svg.png')
        // cy.get('#edit').click()
        cy.get('.text-primary > .fas').click()
        cy.get('#dataTable_filter > label > .form-control').type('fadil97').should('have.value','fadil97')
        cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(3)').should('have.text','fadil97@gmail.com')
        cy.get('.btn-group > .btn > .fas').first().click()
        cy.get('[href="facilitator/detail/206"]').click()
        cy.get('#user_fullname').should('have.text','Fadhil')
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})