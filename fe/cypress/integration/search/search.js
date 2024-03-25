import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GoogleMainPage from '../../pages/google/GoogleMainPage';

When(/^I click on search bar$/, () => {
    GoogleMainPage.clickOnSearchBar();
});

And(/^I type ([\w-]+) word and press enter$/, (automation) => {
    GoogleMainPage.typeInSearchBar(automation);
});

And(/^I see results$/, () => {
    GoogleMainPage.checkResults();
});

And(/^I click in wikipedia result$/, () => {
    GoogleMainPage.clickWikipediaResult();
});

And(/^I check ([\w-]+) as year of first automation successfully$/, (year) => {
    GoogleMainPage.checkWikipedia(year);
});
