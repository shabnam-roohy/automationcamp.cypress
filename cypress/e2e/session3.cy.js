/// <reference types = "cypress"/>

describe('session3', function(){
    it('1- keyword action > type', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type(" آموزش")
    });

    it('2- keyword action > type and enter', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type("{enter} آموزش")
    });

    it('3- keyword action > using sequences', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type("cypress").type("{backspace}").type("{home}").type("{del}")
    });

    it('3- keyword action > combination', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type("cypress")
            .realPress(['Control', 'A'])
            .realPress(['Control', 'x'])
            .realPress(['Control', 'v'])


    });
    it('3- keyword action > delete', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type("cypress").clear()
        cy.get("textarea[name=q]").type("cypress")
        cy.get("textarea[name=q]").type("{selectall}{del}")
        cy.get("textarea[name=q]").type("cypress")
        cy.get("textarea[name=q]").type("cypress").type("{selectall}{backspace}")




    });

    it('3- keyword action > delay option', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type("cypress", {delay:100})
        cy.get("textarea[name=q]").clear()
        cy.get("textarea[name=q]").type("cypress", {delay:0})

    });
    it('3- keyword action > delay option', function (){
        cy.visit("https://www.google.com/")
        cy.get("textarea[name=q]").type("cypress".repeat(6))

    });
})

describe('session3 >mouse action', function (){
    it('click, DB click, R click', function (){
        cy.visit("https://play2.automationcamp.ir/")
        cy.get("input#male").click()
        cy.get("input#male").should('be.checked')
        //Double click
        cy.contains("Double-click me").dblclick()
        cy.contains("This is your sample Double Click")
        //Right click
        cy.get("body").rightclick("top")
        cy.get('[href="contact.html"]').click({ctrlKey: true})
    });
    it('click and hold', function (){
        cy.visit("https://demos.telerik.com/kendo-ui/circular-gauge/index")
        cy.get("#onetrust-accept-btn-handler").click()
        cy.get("[role=button][title=Increase]").trigger("mousedown", {which:1})
        cy.get("[role=button][title=Increase]").realMouseDown()
            .wait(1000)
            .trigger("mouseup",{force: true})
            cy.get("[role=slider]").invoke("attr",'aria-valuenow')
                .should('not.equal', 55)
    })
    it("drag and drop", function (){
        cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
        cy.get("#draggable")
            .trigger("mousedown", {which: 1})
        cy.get("#droppable")
            .trigger("mousemove")
            .trigger("mouseup", {force:true})
    })
    it("scroll by coordination", function (){
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo(0, 1300)
    })
    it.only("scroll into view", function (){
        cy.visit("https://www.imdb.com/chart/top/")
        cy.get(":nth-child(150)").scrollIntoView()
    })


})