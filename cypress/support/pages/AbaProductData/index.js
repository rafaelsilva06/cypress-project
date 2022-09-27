// ações de interação com a pagina AbaProdutData

import DatePickerPage from "../../pageObjects/DatePickerPage";

const el = require('./elements').ELEMENTS;

class AbaProdutData {

    verificarAba(){
        cy.get(el.step).should('have.id', 'enterproductdata')
    }

    preencherForm(){

        var datePickerPage = new DatePickerPage();


        // Selecionando uma data
        datePickerPage.getDatePickerProductData().click()
        datePickerPage.getCalendar().should('be.visible')
        cy.selectYear(2022)
        cy.selectMonth('November')
        cy.selectDay(24)

        // Selecionando e validando valor
        cy.get(el.insuranceSum).select('3000000')
        cy.get(el.insuranceSum).should('have.value', '3000000')

        // Selecionando e validando bonus
        cy.get(el.meritRating).select('Super Bonus')
        cy.get(el.meritRating).should('have.value', 'Super Bonus')

        // Selecionando e validando damage insurance
        cy.get(el.damageInsurance).select('Full Coverage')
        cy.get(el.damageInsurance).should('have.value', 'Full Coverage')

        //Selecionando e validando optional products
        cy.get(el.optionalProducts)
            .find('input#EuroProtection')
            .check('Yes', { force: true}).should('be.checked')
        cy.get(el.optionalProducts)
            .find('input#LegalDefenseInsurance')
            .check('Yes', { force: true}).should('be.checked')

        // Selecionando e validando damage insurance
        cy.get(el.courtesyCar).select('Yes')
        cy.get(el.courtesyCar).should('have.value', 'Yes')
    }

    clickBotaoNext(){
        // Clicando em next
        cy.get(el.buttonNext).click();
    }

    verificarProxAba(){
        // Validando se foi para o próximo formulário
        cy.get(el.step).should('have.id', 'selectpriceoption')
    }

}

module.exports = new AbaProdutData();