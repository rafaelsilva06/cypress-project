// ações de interação com a pagina AbaSendQuote

import DatePickerPage from "../../pageObjects/DatePickerPage";

const el = require('./elements').ELEMENTS;

class AbaSendQuote {

    acessarForm(){
        cy.visit('http://sampleapp.tricentis.com/101/app.php')
    }

    preencherForm(){

        var datePickerPage = new DatePickerPage();

        // Incluindo e validando um valor
        cy.get(el.email).type('rafael@mail.com')
        cy.get(el.email).should('have.value', 'rafael@mail.com')

        // Incluindo e validando um valor
        cy.get(el.phone).type('4799999999')
        cy.get(el.phone).should('have.value', '4799999999')

        // Incluindo e validando um valor
        cy.get(el.username).type('rafaelsilva')
        cy.get(el.username).should('have.value', 'rafaelsilva')

        // Incluindo e validando um valor
        cy.get(el.password).type('Password@123')
        cy.get(el.password).should('have.value', 'Password@123')

        // Incluindo e validando um valor
        cy.get(el.confirmPassword).type('Password@123')
        cy.get(el.confirmPassword).should('have.value', 'Password@123')

        // Incluindo e validando um valor
        cy.get(el.comments).type('Sem comentários')
        cy.get(el.comments).should('have.value', 'Sem comentários')

        // Clicando em send
        cy.get(el.buttonSend).click();
        // Validando se apareceu a mensagem de sucesso
        cy.get(el.msgSuccess, { timeout: 10000})
            .should('be.visible')

        // Clicando em ok
        cy.get(el.buttonConfirm).click();

    }

}

export default new AbaSendQuote();