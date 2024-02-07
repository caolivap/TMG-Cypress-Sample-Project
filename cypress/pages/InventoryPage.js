class InventoryPage {

    header = {
        optionsMenu: () => cy.get('#react-burger-menu-btn'),
        pageTitle: () => cy.get('div.app_logo'),
        shoppingCart: () => cy.get('#shopping_cart_container a'),
        sectionTitle: () => cy.get('div.header_secondary_container span.title'),
        filterOption: () => cy.get('span.select_container'),
    }

    inventory = {
        allProducts: () => cy.get('div.inventory_item'),
        addToCartByName: (productName) => cy.get(`div.inventory_item_description:has(div.inventory_item_name:contains("${productName}")) button[class*="btn_small btn_inventory"]`),
    }

    addProductToCard(productName) {
        this.inventory.addToCartByName(productName).click();
    }

} export default new InventoryPage();