/// <reference types="cypress" />
describe('Search box suit', ()=>{
    before(()=>{
        cy.visit('/')
    })

    
    it('Testing search box function', ()=>{
       // cy.intercept('GET', 'https://en.wikipedia.org/w/api.php*').as('createBoard')
        cy.intercept({
            method :'GET',
            url : 'https://en.wikipedia.org/w/api.php*'
        }).as('createBoard')

        
       
        // cy.get('[class="wikipedia-search-input"]').type('dd {enter}')
        //  cy.scrollTo('topLeft')
       
        // cy.request('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search=ddd&format=json&callback=%3F&callback=callback').should((response)=>{
        //     expect(response.status).to.eq(200);
        // })
       // cy.visit('/')
        cy.get('[class="wikipedia-search-input"]').type('dd {enter}')
         cy.scrollTo('topLeft')
        cy.wait('@createBoard').its('response.statusCode').should('eq',200)

    })
   

})