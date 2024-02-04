/// <reference types = "cypress"/>

describe('session2', () => {
    // it('test1', function () {
    //     cy.visit("https://play2.automationcamp.ir/")
    //     cy.get('#fname').type("shabnam")
    // })
    it('contain', function () {
        cy.visit("https://play2.automationcamp.ir/")
        cy.contains('This is your form title:')
        cy.contains("label[for='moption']", " Option 2")
        cy.get("#owc").children("[value='option 2']").click()
        cy.contains("Singer").parent()
        cy.get("#owc").children("[value='option 2']").siblings().should('have.length', 3)

    })
    it('wikipedia', function () {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.get("#bodyContent").find("div#mw-content-text")
    })
    it('index', function () {
        cy.visit("https://play2.automationcamp.ir/")
        cy.get("td").eq('5')
        cy.get("td").first()
        cy.get("td").last()
        cy.get("td").filter("#td_id")
        cy.get("td").not("#td_id")
        cy.get("#fname").closest("div").should('have.class', 'main')
        cy.get("[value='td1_value']").next()
        cy.get("[value='td1_value']").nextAll()
        cy.get("[value='td1_value']").nextUntil("[value='td4_value']")
        cy.get("[value='td5_value']").prev()
        cy.get("[value='td5_value']").prevAll()
        cy.get("[value='td5_value']").prevUntil("[value='td1_value']")






    })
})