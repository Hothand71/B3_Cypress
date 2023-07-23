///<reference types="cypress"/>

describe('Web Elements',()=>{
    it('Web Element Test',()=>{
        //tag name
        cy.get('input')

        //by ID
        cy.get('#yourPassword')

        //by class name
        cy.get('.form-label')
        cy.get('.form-check-input')

        //by attribute name
        cy.get('[type]]')

        //by attribute name and value
        cy.get('[type="submit"]')

        //by class value
        cy.get('[class="btn btn-primary w-100"]')

        //by tag name and attribute with value
        cy.get('button[type="submit"]')

        //by two different attributes or more
        cy.get('[type="submit"][class="btn btn-primary w-100"]')

        cy.contains('blue').click()


    })


})