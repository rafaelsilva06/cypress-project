class datePickerPage{

    getDatePicker(){
        return cy.get('button#opendateofmanufacturecalender')
    }

    getCalendar(){
        return cy.get('div#ui-datepicker-div')
    }

    getNavigatePrev(){
        return cy.get('a.ui-datepicker-prev')
    }

    getNavigateNext(){
        return cy.get('a.ui-datepicker-next')
    }

    getMonthName(){
        return cy.get('div.ui-datepicker-title span:nth-child(1)')
    }

    getYearName(){
        return cy.get('div.ui-datepicker-title span:nth-child(2)')
    }

    getCalendarDays(){
        return cy.get('table.ui-datepicker-calendar a.ui-state-default')
    }
}

export default datePickerPage