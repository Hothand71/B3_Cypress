///<reference types="cypress"/>

describe("DEmoBlaze Login Test",()=>{

    it("TC001 positive scenario",()=>{

        cy.visit('https://demoblaze.com/')
        cy.viewport(1920,1080)
        cy.get('#login2').click()
        cy.get('#loginusername').type('GeraltOfRivia').wait(500)
        cy.get('#loginpassword').click()
        cy.get('#loginpassword').type('Geralt1234.').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('be.visible')


    })




})