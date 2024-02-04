/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath" />

describe("automation test store", function (){
    it("should be able to submit", function (){
        cy.visit("https://automationteststore.com/")
        //cy.get("a[href$='contact']").click()
        cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type("joe")
        cy.get('#ContactUsFrm_email').type("joe_blog123@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("do you provide application")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should("have.text", "Your enquiry has been successfully sent to the store owner!")

    })
})