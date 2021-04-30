/// <reference types="cypress" />
var Chance = require('chance');
var chance = new Chance();

context('Basic Website Funcationality', () => {
  beforeEach(() => {
        cy.visit('/')
  })

  it('Search Field Tests', () => {
    cy.get('.filter-search-company')
      .type('Frontend').should('have.value', 'Frontend')

    cy.get('.jobTitleTester')
      .should('be.visible')

    cy.get('.filter-search-company')
      .clear()

    cy.get('.filter-search-company')
      .type('backend').should('have.value', 'backend')

    cy.get('.jobTitleTester')
      .should('be.visible')

    cy.get('.filter-search-company')
      .clear()

    cy.get('.filter-search-location')
      .type('Berlin', { delay: 100 })

    cy.get('#__next > div > main > div > label > div > div:nth-child(1) > label > div > div > span')
      .should('be.visible')
      .should('have.text','Berlin')

    cy.get('.filter-search-location')
      .clear()

    cy.get('.filter-search-full-time')
      .check()

    cy.get('#__next > div > main > div > label > div > div:nth-child(1) > label > div > div > h4:nth-child(1)')
      .should('be.visible')
      .should('contain.text','Full Time')

    cy.get('.filter-search-full-time')
    .click()
  })

  it('Clicking a Job Opens the Single Job view', () => {
    cy.get('.filter-search-company')
      .type('Frontend').should('have.value', 'Frontend')

    cy.get('#__next > div > main > div > label > div > div:nth-child(2) > label > div > div > h3')
      .click()
      .wait(2000)

    cy.get('.titleLocApplyBottom')
      .should('be.visible')

    cy.get('.btnapplynow')

    cy.contains('Apply Now')
      .should('be.visible')

    cy.get('.goBackTester')
      .click()

    cy.get('.filter-search-company')
      .type('Backend').should('have.value', 'Backend')

    cy.get('#__next > div > main > div > label > div > div:nth-child(2) > label > div > div > h3')
      .click()
      .wait(2000)

    cy.get('.titleLocApplyBottom')
      .should('be.visible')

    cy.get('.btnapplynow')

    cy.contains('Apply Now')
      .should('be.visible')

    cy.get('.goBackTester')
      .click()

    cy.get('.filter-search-company')
      .type('Eng').should('have.value', 'Eng')

    cy.get('#__next > div > main > div > label > div > div:nth-child(4) > label > div > div > h3')
      .click()
      .wait(2000)

    cy.get('.titleLocApplyBottom')
      .should('be.visible')

    cy.get('.btnapplynow')

    cy.contains('Apply Now')
      .should('be.visible')

    cy.get('.goBackTester')
      .click()

      cy.get('.filter-search-company')
      .type('soft').should('have.value', 'soft')

    cy.get('#__next > div > main > div > label > div > div:nth-child(6) > label > div > div > h3')
      .click()
      .wait(2000)

    cy.get('.titleLocApplyBottom')
      .should('be.visible')

    cy.get('.btnapplynow')

    cy.contains('Apply Now')
      .should('be.visible')

    cy.get('.goBackTester')
      .click()
    
  })

  it.only('Should Toggle Light and Dark Mode', () => {
    cy.wait(2000)

    cy.get('.toggleLightDarkTester')
      .should('be.visible')
      .click()

    //This is where i would add the testing for className and color changing

  })

})
