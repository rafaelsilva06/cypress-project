// ações de interação com a pagina

import DatePickerPage from "../../pageObjects/DatePickerPage";

const el = require('./elements').ELEMENTS;

class AbaVehicleData {

    acessarForm(){
        cy.visit('http://sampleapp.tricentis.com/101/app.php')
    }

    preencherForm(){

        var datePickerPage = new DatePickerPage();

        // Selecionando e validando dropdown
        cy.get(el.make).select('Audi')
        cy.get(el.make).should('have.value', 'Audi')
        // Selecionando e validando dropdown
        cy.get(el.model).select('Motorcycle')
        cy.get(el.model).should('have.value', 'Motorcycle')
        // Incluindo e validando um valor
        cy.get(el.cylinder).type('1000')
        cy.get(el.cylinder).should('have.value', '1000')
        // Incluindo e validando um valor
        cy.get(el.engine).type('140')
        cy.get(el.engine).should('have.value', '140')

        // Selecionando uma data
        datePickerPage.getDatePickerVehicleData().click()
        datePickerPage.getCalendar().should('be.visible')
        cy.selectYear(2022)
        cy.selectMonth('January')
        cy.selectDay(24)

        // Selecionando e validando dropdown
        cy.get(el.seats1).select(2)
        cy.get(el.seats1).should('have.value', 2)

        // Selecionando e validando checkbox
        cy.get(el.rightHand)
            .check('Yes', { force: true }).should('be.checked')

        // Selecionando e validando dropdown
        cy.get(el.seats2).select(2)
        cy.get(el.seats2).should('have.value', 2)
        // Selecionando e validando dropdown
        cy.get(el.fuel).select('Petrol')
        cy.get(el.fuel).should('have.value', 'Petrol')
        // Incluindo e validando um valor
        cy.get(el.payload).type('12')
        cy.get(el.payload).should('have.value', '12')
        // Incluindo e validando um valor
        cy.get(el.totalWeight).type('190')
        cy.get(el.totalWeight).should('have.value', '190')
        // Incluindo e validando um valor
        cy.get(el.listPrice).type('60000')
        cy.get(el.listPrice).should('have.value', '60000')
        // Incluindo e validando um valor
        cy.get(el.licensePlateNumber).type('TESTE123')
        cy.get(el.licensePlateNumber).should('have.value', 'TESTE123')
        // Incluindo e validando um valor
        cy.get(el.annualMileage).type('10000')
        cy.get(el.annualMileage).should('have.value', '10000')
        // Clicando em next
        cy.get(el.buttonNext).click();
        // Validando se foi para o próximo formulário
        cy.get(el.step).should('have.id', 'enterinsurantdata')
    }

}

export default new AbaVehicleData();