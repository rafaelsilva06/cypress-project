/// <reference types="cypress" />

import DatePickerPage from "../../support/pageObjects/DatePickerPage";
import AbaVehicleData from "../../support/pages/AbaVehicleData";
import AbaInsurantData from "../../support/pages/AbaInsurantData";
import AbaProductData from "../../support/pages/AbaProductData";
import AbaPriceOption from "../../support/pages/AbaPriceOption";
import AbaSendQuote from "../../support/pages/AbaSendQuote";

describe('tricentis', () => {

    var datePickerPage = new DatePickerPage();

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('aba Enter Vehicle Data', () => {

        AbaVehicleData.acessarForm();
        AbaVehicleData.preencherForm();

    });

    it('aba Enter Insurant Data', () => {

        AbaInsurantData.preencherForm();

    });

    it('aba Enter Product Data', () => {

        AbaProductData.preencherForm();

    });

    it('aba Select Price Option', () => {

        AbaPriceOption.preencherForm();

    });

    it('aba Send Quote', () => {

        AbaSendQuote.preencherForm();

    });
});