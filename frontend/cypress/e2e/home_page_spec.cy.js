
describe('The Equine Therapy Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') 
    cy.get('[href="/about"]').click().url().should('include', '/about')
    cy.get('[href="/providers"]').click().url().should('include', '/providers')
    cy.get('[href="/contact"]').click().url().should('include', '/contact')
    cy.get('[href="/resources"]').click().url().should('include', '/resources')
    cy.get('.navbar-brand > h2').click().url().should('include', '/')
    // cy.contains('type').click()
  })
})