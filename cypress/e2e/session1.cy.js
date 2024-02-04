/// <reference types = "cypress"/>

 describe('suite 1', () => {
  it('google search', function (){
     cy.visit("https://www.google.com/")
     cy.get("textarea[name=q]").type("cypress{enter}")
  })
   it('cypress website', function (){
     cy.visit("https://cypress.io")
   })
 })

