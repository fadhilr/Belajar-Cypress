describe('Kumpulan test case', () => {

    it('TC-2', () => {
        cy.visit('https://demoqa.com/automation-practice-form ')
        cy.get('#firstName').type('Fadhil')
        cy.get('#lastName').type('Rizqullah')
        cy.get('#userEmail').type('fadilrizqullah97@gmail.com')
        cy.get('#gender-radio-1').check({force:true})
        cy.get('#userNumber').type('081233785197')
        cy.get('#hobbies-checkbox-1').check({force:true})
        cy.get('#currentAddress').type('Jl. H. Dahlan')
        cy.get('#submit').click()
    })
})