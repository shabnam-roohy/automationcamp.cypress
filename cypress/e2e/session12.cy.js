/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath" />

describe("Alias and invoke", function (){
    it("validate specific hatr care product", function (){
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("productThumnail")
        cy.get('@productThumnail').its("length").should('be.gt', 5)
        cy.get('@productThumnail').should('include', 'Seaweed Conditioner')

    })
    it("validate productThumnail",function (){
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as('productThumnail')
        cy.get('@productThumnail').should('have.length', 16)
        cy.get('@productThumnail').find(".productcart").invoke('attr', 'title').should('include', 'Add to Cart')

    })

    it.only("calculate total of normal and sale product",function (){
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as('productThumnail')
        cy.get('@productThumnail').find('.oneprice').each(function ($el, index, $list) {
        cy.log($el.text())
        })
    })
    it.only("calculate total of normal and sale product",function (){
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as('productThumnail')
        cy.get('@productThumnail').find('.oneprice').invoke('text').as('itemprice')
        cy.get('@itemprice').then($linktext => {
            var itemprice = $linktext.split('$')
            var i;


        })
    })
})