import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from "../../pages/InventoryPage";
import shoppingCartPage from "../../pages/ShoppingCartPage";
import { getTextsFromElements } from "../../utils/UIElements";


When('I add the products to the shopping cart', (dataTable) => {
    let productNames = [];
    dataTable.hashes().forEach(element => {
        inventoryPage.addProductToCard(element.product);
        productNames.push(element.product);
    });
    cy.wrap(productNames).as('productNames');
});

When('I go to the Shopping Cart', () => {
    inventoryPage.header.shoppingCart().click();
});

Then('I should be able to see shopping cart page', () => {
    shoppingCartPage.header.sectionTitle().should('be.visible').should('have.text', 'Your Cart');
});

Then('I should be able to see selected products on the shopping cart', () => {
    cy.get('@productNames').then(productNames => {
        shoppingCartPage.productList.allProductNames().should('be.visible').then(obtainedProducts => {
            expect(getTextsFromElements(obtainedProducts), `Comparing list: [${getTextsFromElements(obtainedProducts)}] with the list [${productNames}]`).have.ordered.members(productNames);
        })
    })
});
