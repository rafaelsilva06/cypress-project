import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const abaVehicleData = require("../../support/pages/AbaVehicleData")
const abaInsurantData = require("../../support/pages/AbaInsurantData")
const abaProductData = require("../../support/pages/AbaProductData")
const abaPriceOption = require("../../support/pages/AbaPriceOption")
const abaSendQuote = require("../../support/pages/AbaSendQuote")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

//Scenario: Preencher Aba Vehicle Data
Given("que eu acesso o formulario", () =>{
    abaVehicleData.acessarForm();
});
Given("desejo preencher o formulario na Aba Vehicle Data", () =>{
    abaVehicleData.verificarAba();
});
When("informar os dados da Aba Vehicle Data", () => {
    abaVehicleData.preencherForm();
});
When("apertar o botao next para Aba Insurant Data", () =>{
    abaVehicleData.clickBotaoNext();
});
Then("devo ir para a proxima Aba Insurant Data", () =>{
    abaVehicleData.verificarProxAba();
});

//Scenario: Preencher Aba Insurant Data
Given("estou na Aba Insurant Data", () =>{
    abaInsurantData.verificarAba();
});
When("informar os dados da Aba Insurant Data", () =>{
    abaInsurantData.preencherForm();
});
When("apertar o botao next para Aba Product Data", () =>{
    abaInsurantData.clickBotaoNext();
});
Then("devo ir para a proxima Aba Product Data", () =>{
    abaInsurantData.verificarProxAba();
});

//Scenario: Preencher Aba Product Data
Given("estou na Aba Product Data", () =>{
    abaProductData.verificarAba();
});
When("informar os dados da Aba Product Data", () =>{
    abaProductData.preencherForm();
});
When("apertar o botao next para Aba Price Option", () =>{
    abaProductData.clickBotaoNext();
});
Then("devo ir para a proxima Aba Price Option", () =>{
    abaProductData.verificarProxAba();
});

//Scenario: Preencher Aba Price Option
Given("estou na Aba Price Option", () =>{
    abaPriceOption.verificarAba();
});
When("informar os dados da Aba Price Option", () =>{
    abaPriceOption.preencherForm();
});
When("apertar o botao next para Aba Send Quote", () =>{
    abaPriceOption.clickBotaoNext();
});
Then("devo ir para a proxima Aba Send Quote", () =>{
    abaPriceOption.verificarProxAba();
});

//Scenario: Preencher Aba Send Quote
Given("estou na Aba Send Quote", ()=>{
    abaSendQuote.verificarAba();
});
When("informar os dados da Aba Send Quote", () =>{
    abaSendQuote.preencherForm();
});
When("apertar o botao send para finalizar", () =>{
    abaSendQuote.clickBotaoSend();
});
Then("deve aparecer uma mensagem de sucesso", () =>{
    abaSendQuote.verificarMsgSuccess();
});
Then("devo clicar em OK", () =>{
    abaSendQuote.clickBotaoOk();
});