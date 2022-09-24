/// <reference types="cypress" />

import DatePickerPage from "../../support/pageObjects/DatePickerPage";

describe('tricentis', () => {

    var datePickerPage = new DatePickerPage();

    beforeEach(() => {
        cy.visit('http://sampleapp.tricentis.com/101/app.php')
    })
    it('aba Enter Vehicle Data', () => {
        // Selecionando e validando dropdown
        cy.get('[id=make]').select('Audi')
        cy.get('[id=make]').should('have.value', 'Audi')
        // Selecionando e validando dropdown
        cy.get('[id=model]').select('Motorcycle')
        cy.get('[id=model]').should('have.value', 'Motorcycle')
        // Incluindo e validando um valor
        cy.get('[id=cylindercapacity]').type('1000')
        cy.get('[id=cylindercapacity]').should('have.value', '1000')
        // Incluindo e validando um valor
        cy.get('[id=engineperformance]').type('140')
        cy.get('[id=engineperformance]').should('have.value', '140')

        // Selecionando uma data
        datePickerPage.getDatePicker().click()
        datePickerPage.getCalendar().should('be.visible')
        cy.selectYear(2022)
        cy.selectMonth('January')
        cy.selectDay(24)

        // Selecionando e validando dropdown
        cy.get('[id=numberofseats]').select(2)
        cy.get('[id=numberofseats]').should('have.value', 2)
        // Selecionando e validando checkbox
        cy.get('p.group [id=righthanddriveyes]')
            .check('Yes', { force: true }).should('be.checked')
        // Selecionando e validando dropdown
        cy.get('[id=numberofseatsmotorcycle]').select(2)
        cy.get('[id=numberofseatsmotorcycle]').should('have.value', 2)
        // Selecionando e validando dropdown
        cy.get('[id=fuel]').select('Petrol')
        cy.get('[id=fuel]').should('have.value', 'Petrol')
        // Incluindo e validando um valor
        cy.get('[id=payload]').type('12')
        cy.get('[id=payload]').should('have.value', '12')
        // Incluindo e validando um valor
        cy.get('[id=totalweight]').type('190')
        cy.get('[id=totalweight]').should('have.value', '190')
        // Incluindo e validando um valor
        cy.get('[id=listprice]').type('60000')
        cy.get('[id=listprice]').should('have.value', '60000')
        // Incluindo e validando um valor
        cy.get('[id=licenseplatenumber]').type('TESTE123')
        cy.get('[id=licenseplatenumber]').should('have.value', 'TESTE123')
        // Incluindo e validando um valor
        cy.get('[id=annualmileage]').type('10000')
        cy.get('[id=annualmileage]').should('have.value', '10000')
        // Clicando em next
        cy.get('button#nextenterinsurantdata').click();
        // Validando se foi para o próximo formulário
        cy.get('li.idealsteps-step-active a').should('have.id', 'enterinsurantdata')

    });
});