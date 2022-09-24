/// <reference types="cypress" />

import DatePickerPage from "../../support/pageObjects/DatePickerPage";

describe('tricentis', () => {

    var datePickerPage = new DatePickerPage();

    beforeEach(() => {
        cy.visit('http://sampleapp.tricentis.com/101/app.php')
    })
    it('aba Enter Vehicle Data', () => {

    });
});