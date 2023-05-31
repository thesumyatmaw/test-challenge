/// <reference types="cypress" />

describe ('Web table Specific test suite', ()=>{
    before(()=>{
        cy.visit('/')
    })
    it('First test',()=>{
        const expectedValues = [
            'Amit',
            'Mukesh',
            'Animesh',
            'Mukesh',
            'Amod',
            'Amit',
            ''
          ]
        
        cy.contains('table tbody tr th','Author')
        cy.get('table tbody td:nth-child(2)').then(($cells) =>{
            const authorNames = Cypress._.map($cells, 'innerText')
            authorNames.forEach(names =>{
                cy.log(names)
            })       
        })

        cy.get('table tbody td:nth-child(2)').then(($cells) => {
            const values = Cypress._.map($cells,'innerText')
            expect(values).to.deep.equal(expectedValues)
           // expect(values).to.include.text(expectedValues)
        } )

       


    })

})