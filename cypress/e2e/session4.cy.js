/// <reference types = "cypress"/>

describe('session3', function(){
    it('what is then', function (){
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").click()
        cy.wait(3000).then(function () {
            console.log("test is finished")
        })
    })
    it("assert text of field", function (){
        cy.visit("https://play2.automationcamp.ir/")
        cy.get("#fname").type("cypress").then( (el)=> {
            let input_value = el.val()
            expect(input_value).to.eq("cypress")

        })
    })
    it.only("api assertion", function (){
        fetch("https://api.spacexdata.com/v3/missions")
            .then( (resp) =>resp.json())
            .then((data) =>{
                console.log(data)
            })
    })

})