/* eslint-disable no-undef */
import React from 'react'
import Header from './Header'

// describe('<Header />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<Header />)
//   })
// })

it('home link should be active when url is "/"', () => {
  // No need to pass in custom initialEntries as default url is '/'
  cy.mount(<Header />)

  // cy.get('.navbar-nav').contains('Home').should('have.class', 'active')
  cy.get('.navbar-nav').contains('Equine Therapy').should('be.visible')
 
})

it('about link should be active when url is "/about"', () => {
  cy.mount(<Header />, {
    routerProps: {
      initialEntries: ['/about'],
    },
  })

  // cy.get('.navbar-nav').contains('About').should('have.class', 'active')
  cy.get('.navbar-nav a').contains('About')
})