describe('Kumpulan test case', () => {

    it('TC-1', () => {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('opel')
        cy.get('[value = "Bike"]').check()
    })
})