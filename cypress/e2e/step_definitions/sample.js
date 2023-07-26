import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on Login Page', () => {
  cy.visit("www.google.com")
  cy.wait(2000)

});

When('I am on Login page I entered valid credentials', ()=>{
   cy.get('[placeholder="Email"]').click().type('test@gmail.com') 
   cy.get('[placeholder="Password"]').click().type('test1234')
})

Then('Click on Login Button', ()=>{

    cy.get('.login-signup-button').click()
})



Then('I Logged in Successfully',()=>{

    cy.url().should('include' , '/app')
})