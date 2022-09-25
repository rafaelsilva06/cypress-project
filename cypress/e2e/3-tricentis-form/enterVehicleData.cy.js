/// <reference types="cypress" />

import DatePickerPage from "../../support/pageObjects/DatePickerPage";

describe('tricentis', () => {

    var datePickerPage = new DatePickerPage();

    it('aba Enter Vehicle Data', () => {
        cy.visit('http://sampleapp.tricentis.com/101/app.php')

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
        datePickerPage.getDatePickerVehicleData().click()
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

    it('aba Enter Insurant Data', () => {

        // Incluindo e validando nome e sobrenome
        cy.get('[id=firstname]').type('Rafael')
        cy.get('[id=firstname]').should('have.value', 'Rafael')
        cy.get('[id=lastname]').type('Silva')
        cy.get('[id=lastname]').should('have.value', 'Silva')

        // Incluindo data de aniversário
        cy.get('[id=birthdate]').type('11/24/1994')
        cy.get('[id=birthdate]').should('have.value', '11/24/1994')

        // Selecionando e validando checkbox
        cy.get('p.group [id=gendermale]')
            .check('Male', { force: true }).should('be.checked')

        // Incluindo e validando nome da rua
        cy.get('[id=streetaddress]').type('Rua Iririu')
        cy.get('[id=streetaddress]').should('have.value', 'Rua Iririu')

        // Selecionando e validando país
        cy.get('[id=country]').select('Brazil')
        cy.get('[id=country]').should('have.value', 'Brazil')

        // Incluindo e validando cep
        cy.get('[id=zipcode]').type('89222321')
        cy.get('[id=zipcode]').should('have.value', '89222321')

        // Incluindo e validando cidade
        cy.get('[id=city]').type('joinville')
        cy.get('[id=city]').should('have.value', 'joinville')

        // Selecionando e validando ocupação
        cy.get('[id=occupation]').select('Employee')
        cy.get('[id=occupation]').should('have.value', 'Employee')

        //Selecionando os hobbies e validando
        //cy.get('p.group [id=speeding]').click()
        //cy.get('p.group [id=other]').click()
        cy.get('p.group [name=Hobbies]')
            .check(['Speeding', 'Other'], { force: true}).should('be.checked')

        // Clicando em next
        cy.get('button#nextenterproductdata').click();
        // Validando se foi para o próximo formulário
        cy.get('li.idealsteps-step-active a').should('have.id', 'enterproductdata')

    });
});