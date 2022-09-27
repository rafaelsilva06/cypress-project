// ações de interação com a AbaInsurantData

import DatePickerPage from "../../pageObjects/DatePickerPage";

const el = require('./elements').ELEMENTS;

class AbaInsurantData {

    verificarAba(){
        cy.get(el.step).should('have.id', 'enterinsurantdata')
    }

    preencherForm(){

        var datePickerPage = new DatePickerPage();

        // Incluindo e validando nome e sobrenome
        cy.get(el.firstName).type('Rafael')
        cy.get(el.firstName).should('have.value', 'Rafael')
        cy.get(el.lastName).type('Silva')
        cy.get(el.lastName).should('have.value', 'Silva')

        // Incluindo data de aniversário
        cy.get(el.dateBirth).type('11/24/1994')
        cy.get(el.dateBirth).should('have.value', '11/24/1994')

        // Selecionando e validando checkbox
        cy.get(el.gender)
            .check('Male', { force: true }).should('be.checked')

        // Incluindo e validando nome da rua
        cy.get(el.streetAdress).type('Rua Iririu')
        cy.get(el.streetAdress).should('have.value', 'Rua Iririu')

        // Selecionando e validando país
        cy.get(el.country).select('Brazil')
        cy.get(el.country).should('have.value', 'Brazil')

        // Incluindo e validando cep
        cy.get(el.zipCode).type('89222321')
        cy.get(el.zipCode).should('have.value', '89222321')

        // Incluindo e validando cidade
        cy.get(el.city).type('joinville')
        cy.get(el.city).should('have.value', 'joinville')

        // Selecionando e validando ocupação
        cy.get(el.occupation).select('Employee')
        cy.get(el.occupation).should('have.value', 'Employee')

        //Selecionando os hobbies e validando
        cy.get(el.hobbies)
            .check(['Speeding', 'Other'], { force: true}).should('be.checked')

    }

    clickBotaoNext(){
        // Clicando em next
        cy.get(el.buttonNext).click();
    }

    verificarProxAba(){
        // Validando se foi para o próximo formulário
        cy.get(el.step).should('have.id', 'enterproductdata')
    }

}

module.exports = new AbaInsurantData();