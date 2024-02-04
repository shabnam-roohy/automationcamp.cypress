/// <reference types = "cypress"/>

describe('session8', function(){
    before(function (){
        cy.log("run befor describe")
    })
    after(function (){
        cy.log("run after describe block")
    })
    beforeEach(function (){
        cy.log("test setup")
    })
    afterEach(function (){
        cy.log("test teardown")
    })
    it.only("test 1 inside describe block", function (){
        cy.log("test 1 inside describe block")
    })
    it("test 2 inside describe block", function (){
        cy.log("test 2 inside describe block")
    })
})
describe.skip('describe block 2', function(){
    before(function (){
        cy.log("run befor describe")
    })
    after(function (){
        cy.log("run after describe block")
    })
    beforeEach(function (){
        cy.log("test setup")
    })
    afterEach(function (){
        cy.log("test teardown")
    })
    it.only("test 1 inside describe block", function (){
        cy.log("test 1 inside describe block")
    })
    it("test 2 inside describe block", function (){
        cy.log("test 1 inside describe block")
    })
})