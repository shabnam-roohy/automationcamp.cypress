/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath" />

describe("iterate over element", function (){
   it("log information of all hair care products", function (){
       cy.visit("https://automationteststore.com/")
       cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
       cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        cy.log("index: " + index + " : " + $el.text())
       })
   })
    it.only("add specific product to basket", function (){
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").each(function ($el, index, $list) {
            if ($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
            }
        })
    })
})