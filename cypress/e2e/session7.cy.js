/// <reference types = "cypress"/>

describe('session7', function(){
    it("multiple element", function (){
        cy.visit("https://www.wikipedia.org/")
        cy.get("a[id*='js-link-box']").should("have.length", 10)
        cy.get("a[id*='js-link-box']").should("contain.text", 'فارسی')
        cy.get("a[id*='js-link-box']").eq(0).click()


    })
    it("using each()", function (){
        cy.visit("https://www.wikipedia.org/")
        cy.get("a[id*='js-link-box']>strong").each(function ($el,index,$list){
           // cy.log($el.text())
          //  if(index === 6){
           //     $el.trigger('click')
           // }
            if($el.text().includes('Fran')){
                $el.click()
            }

        })
    })
    it("working with webtable", function (){
    cy.visit("https://play2.automationcamp.ir/index.html")
        cy.scrollTo('bottom')
        cy.get("tr").then(function ($list){
        cy.log($list.length)
            cy.get('table th').eq(1).should('have.text', "Lastname")
            cy.get("tbody>tr").eq(2).within(function (){
                cy.get('td:first-child').should('have.text', 'Pheobe')
            })
        })
    })
    it.only("using wrap", function (){
        cy.visit("https://play2.automationcamp.ir/index.html")
        cy.scrollTo('bottom')
        cy.get("tr").each(function ($row, index, $list){
            if(index > 0){
                cy.wrap($row).within(function (){
                    cy.get("td").each(function ($cellData, cellIndex, $cellList){
                        cy.log($cellData.text())
                    })
                })
            }

        })
    })
})