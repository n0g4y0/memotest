/// <reference types="Cypress" />
const URL = '127.0.0.1:8080/pregunta-familiar.html';

describe('test de tarea 11', () => {

    before(() => {
        cy.visit(URL);

    });

    it('testea la funcionalidad de la tarea 6', () => {
        cy.get('#cantidad-integrantes').type('2');
        cy.get('#siguiente-paso').click();
        cy.get('.integrante input').eq(0).type('25')
        cy.get('.integrante input').eq(1).type('20')
        cy.get('#calcular').click();


        cy.get('#promedio-edad').should('have.text', '10.00');
        cy.get('#menor-edad').should('have.text', '20');
        cy.get('#mayor-edad').should('have.text', '25');

    })

})