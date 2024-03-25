const COOKIES = '#L2AGLb > .QS5gu';
const SEARCH_BAR = '#APjFqb';
const RESULTS = '#result-stats';
const WIKIPEDIA_LINK = ':nth-child(3) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb';
const CHECK_WIKIPEDIA = '#Industrial_Revolution_in_Western_Europe';


class GoogleMainPage {
    static visit() {
        cy.visit('/');
    }

    static clickOnSearchBar() {
        cy.get(COOKIES).click();
        cy.get(SEARCH_BAR).click();
    }

    static typeInSearchBar(word) {
        cy.get(SEARCH_BAR).type(word).type('{enter}');
    }

    static checkResults() {
        cy.get(RESULTS).should('exist');
    }

    static clickWikipediaResult() {
        cy.wait(300);
        cy.get(WIKIPEDIA_LINK).click();
    }

    static checkWikipedia(year) {
        cy.wait(300);
        cy.origin('https://en.wikipedia.org', { args: { year } }, ({ year }) => {
            cy.get('body').then(($body) => {
                const text = $body.text()
                const years = text.match(year)
                years.forEach((year, index) => {
                    cy.contains(year).screenshot(`year_${index}_${year}`.png)
                })
              })
        })


        
    }

}

export default GoogleMainPage;
