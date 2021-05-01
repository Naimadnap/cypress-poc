class ProductPage {
    get buttonAddToCart() {
        return cy.get('#buttonCart');
    }
    addToCart() {
        this.buttonAddToCart.click();
    }
}

export default new ProductPage();
