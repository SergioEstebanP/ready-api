import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import GoogleMainPage from '../../pages/google/GoogleMainPage';

Given(/^I'm at Google$/, () => {
  GoogleMainPage.visit();
});

