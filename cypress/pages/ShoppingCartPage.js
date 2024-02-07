class shoppingCart {

    header = {
        sectionTitle: () => cy.get('div.header_secondary_container span.title'),
    }

    productList = {
        allProductNames: () => cy.get('div.inventory_item_name'),
    }
    
} export default new shoppingCart();