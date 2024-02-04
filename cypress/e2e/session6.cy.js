/// <reference types = "cypress"/>

describe('session3', function(){
    it("alert 1", function (){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click()
        cy.on("window:alert", function (message){
            expect(message).eq("I am a JS Alert")
        })
    })
    it("alert: confirm",function (){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm", function (message){
            expect(message).eq("I am a JS Confirm")
        })
        cy.get("#result").should("have.text", "You clicked: Ok")

    })
    it("dialog",function (){
        cy.visit("https://material.angular.io/components/dialog/examples")
        cy.get('#mat-tab-link-3 > .mdc-tab__content').click()
        cy.get('[href="/components/card"] > .mdc-list-item__content').then(function (cdk){
            cy.get('#dialog-data > .docs-example-viewer-wrapper > .docs-example-viewer-body >' +
                '.ng-star-inserted > .mdc-button > .mdc-button__label').click()
            cy.wait(1000)
            let rect = cdk[0].getBoundingClientRect()
            cy.document().then(function (doc){
                doc.elementFromPoint(rect.x,rect.y).click()
            })
        })

    })
    it("snackbar", function (){
        cy.visit("https://material.angular.io/components/snack-bar/examples")
        cy.get('.mat-primary > .mdc-button__label').click()
        cy.get('#mat-input-1').clear().type(1)
         cy.get('snack-bar-component-example.ng-star-inserted >' +
            '.mdc-button > .mdc-button__label').click()
        cy.get(".cdk-overlay-container").within(function (){
            cy.contains(" Pizza party")
        })

    })
    it.only("tooltip message", function (){
        cy.visit("https://material.angular.io/components/tooltip/examples")
        cy.get('#mat-input-2').clear().type("automationcamp")
        cy.get('tooltip-message-example.ng-star-inserted > .mat-mdc-tooltip-trigger > .mdc-button__label').realHover()
        cy.get(".cdk-overlay-container").last().within(function (){
            cy.contains("automationcamp")
        })
    })

})