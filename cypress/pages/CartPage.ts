class CartPage {
    get buttonProceed() {
        return cy.get('#orderButton');
    }

    get validationMessage() {
        return cy.get('#user-message .alert');
    }
}
export default new CartPage();
