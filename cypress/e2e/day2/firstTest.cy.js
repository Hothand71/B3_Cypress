///<reference types="cypress"/>

describe("First Test Suite",()=>{


it("Test Case 1",()=>{
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').should('be.visible').type('cypress{enter}')
        cy.get('[href="https://www.cypress.io/"] > .TbwUpd > :nth-child(2) > .VuuXrf').should('have.text','cypress.io')
    })
        //go to wikipedia
        //type to cypress in searchbox 
        //assert cypress searched


})
describe("Second Test suite",()=>{

        
    it("Wiki Test Casa 1",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.title().should('eq','Wikipedia')
        cy.get('#searchInput').type('cypress{enter}')
        cy.get('[class="mw-search-results-info"]').contains('Cypress')
        cy.url().should('include','/wiki/Cypress')
      


    })


})