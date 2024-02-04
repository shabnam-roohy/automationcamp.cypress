/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath" />

describe("click on first item bu using chain of commands", function (){
    it("click on first item bu using item text", function (){
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click()
    })
    it("click on first item bu using item index", function (){
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
    it.only("validate properties of contact us page", function (){
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        //user cypress command and chaining

        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should("contain", "First name")

        //jquery approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then($text =>{
            const firstnametext = $text.find('#field_11').text()
            expect(firstnametext).to.contains('First name')

            //embedded command (closure)
            cy.get('#field_11').then(fntext =>{
                cy.log(fntext.text())
                cy.log(fntext)
            })
        })



    })
})