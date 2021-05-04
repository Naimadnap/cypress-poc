import NavBar from '../fragments/NavBar';
import TopBar from '../fragments/TopBar';

class ProductPage {
    get buttonAddToCart() {
        return cy.get('#buttonCart');
    }
    addToCart() {
        this.buttonAddToCart.click();
    }
}

export default new ProductPage();
