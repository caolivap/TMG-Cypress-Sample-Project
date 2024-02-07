import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/LoginPage";
import inventoryPage from "../../pages/InventoryPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('I am on the Sauce Demo homepage', () => {
    loginPage.goToLoginPage();
});

When('I log in with my {string} and {string}', (user, password) => {
    loginPage.loginForm.username().type(user);
    loginPage.loginForm.password().type(password);
    loginPage.loginForm.loginButton().click();

});
Then('I should be able to see the {string} page', (titlePage) => {
    inventoryPage.header.optionsMenu().should('be.visible');
    inventoryPage.header.pageTitle().should('be.visible').should('have.text', titlePage);
    inventoryPage.header.shoppingCart().should('be.visible');
    inventoryPage.header.sectionTitle().should('be.visible').should('have.text', 'Products');
    inventoryPage.header.filterOption().should('be.visible');
});

Then('I should be able to see the inventory of products to purchase', () => {
    inventoryPage.inventory.allProducts().should('have.length', 6);
});