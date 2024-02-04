/// <reference types = "cypress"/>

describe('session3', function(){
    it("checkbox, radio button. switch", function (){
      //  cy.visit("https://play1.automationcamp.ir/forms.html")
       // cy.get("#check_python").should("not.be.checked")
        //cy.get("#check_python").check()
        //cy.wait(500)
        //cy.get("#check_python").should("be.checked")
      //  cy.get("#check_python").uncheck().should("not.be.checked")
        cy.visit("https://material.angular.io/components/slide-toggle/examples")
        cy.get("#mat-radio-2-input").check({force: true}).should("be.checked")
        cy.get("button[role='switch']").check({force: true}).should("be.checked")
    })
    it("multiple checkbox", function (){
        cy.visit("https://play1.automationcamp.ir/forms.html")
        cy.wait(500)
        cy.get("input[type=checkbox]").check(['python', 'JAVASCRIPT'])
    })
    it("assert enable and disable",function (){
        cy.visit("https://material.angular.io/components/slide-toggle/examples")
        cy.get("#mat-mdc-slide-toggle-1-button").should('be.enabled')
        cy.get("#mat-mdc-checkbox-2-input").check({force:true})
        cy.get("#mat-mdc-slide-toggle-1-button").should('not.be.checked')

    })
    it("drop down", function (){
        cy.visit("https://material.angular.io/components/select/examples")
        cy.get("#mat-input-1").select("valid").should("have.value", "valid")
    })
    it.only("drop down chips", function (){
        cy.visit("https://material.angular.io/components/chips/examples")
        cy.get("#mat-mdc-chip-list-input-0").click()
        cy.get("#mat-option-3").click()
        cy.get("#mat-mdc-chip-25").within(function (){
            cy.contains("Orange")
        })
    })

})