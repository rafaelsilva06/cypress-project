// ações de interação com a pagina AbaPriceOption

import DatePickerPage from "../../pageObjects/DatePickerPage";

const el = require('./elements').ELEMENTS;

class AbaPriceOption {

    verificarAba(){
        cy.get(el.step).should('have.id', 'selectpriceoption')
    }

    preencherForm(){

        var datePickerPage = new DatePickerPage();

        // Selecionando e validando checkbox
        cy.get(el.selectOption)
            .find('input#selectultimate')
            .check({ force: true }).should('be.checked')
    }

    clickBotaoNext(){
        // Clicando em next
        cy.get(el.buttonNext).click();
    }

    verificarProxAba(){
        // Validando se foi para o próximo formulário
        cy.get(el.step).should('have.id', 'sendquote')
    }

}

module.exports = new AbaPriceOption();