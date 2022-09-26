// ações de interação com a pagina AbaPriceOption

import DatePickerPage from "../../pageObjects/DatePickerPage";

const el = require('./elements').ELEMENTS;

class AbaPriceOption {

    acessarForm(){
        cy.visit('http://sampleapp.tricentis.com/101/app.php')
    }

    preencherForm(){

        var datePickerPage = new DatePickerPage();

        // Selecionando e validando checkbox
        cy.get(el.selectOption)
            .find('input#selectultimate')
            .check({ force: true }).should('be.checked')

        // Clicando em next
        cy.get(el.buttonNext).click();
        // Validando se foi para o próximo formulário
        cy.get(el.step).should('have.id', 'sendquote')

    }

}

export default new AbaPriceOption();