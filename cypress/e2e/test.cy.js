/// <reference types="cypress" />
describe ('test suite', ()=>{
    before(()=>{
        cy.visit('https://eviltester.github.io/synchole/collapseable.html')
    })
    it('first test case', ()=>{
        cy.get('#aboutlink').contains('About The SyncHole').click()
       
        cy.get('h1').should('include.text','About The Sync Hole')
        cy.get('header p a').eq(4).contains('Shortlived Events').click()

        cy.get('[id="progressrendering"] #status').contains('Running')

        cy.get('#progressrendering p').then(progressbar =>{
                expect(progressbar[1]).to.contain.text('Task 1')
                expect(progressbar[2]).to.contain.text('Task 2')
                expect(progressbar[3]).to.contain.text('Task 3')

        })
        cy.wait(8000)
        if(cy.get('#progressbar2').invoke('attr','value').should('eq', '100')){
            cy.get('[id="progressrendering"] #status').contains('Stopped')
        }
        
       
    })


})