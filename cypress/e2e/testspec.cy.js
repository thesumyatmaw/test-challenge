describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Kitchen Sink')
    cy.window().should('have.property', 'top')
    cy.get('li.dropdown a.dropdown-toggle').contains('Commands').click()
    cy.get('ul.dropdown-menu').then($el=> Cypress._.map($el, $option => $option.innerText),).then((list)=>{
      cy.log(list)
    }) 

   cy.get('ul.dropdown-menu').contains('Actions').click()


  })
})