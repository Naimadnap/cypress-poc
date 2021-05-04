import TopBar from '../fragments/TopBar';
import NavBar from '../fragments/NavBar';
import LoginModal from '../modals/LoginModal';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import { reporters } from 'mocha';

describe('Checkout', () => {
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: '/login',
            auth: {
                user: 'user1',
                password: 'password',
            },
        });
        cy.request('/cart').then(response => {
            for (const item of JSON.parse(response.body)) {
                console.log(item);
                if (item !== undefined) {
                    cy.request('DELETE', `/cart/${item.itemId}`);
                }
            }
        });
        cy.visit('/');
    });
    it('Add hot this week socks from homepage', () => {
        HomePage.openHottestSock();
        ProductPage.addToCart();
        NavBar.cartButton.click();
        CartPage.buttonProceed.click();
        CartPage.validationMessage.should(
            'have.text',
            '× Error placing order. Payment declined: amount exceeds 100.00',
        );
    });
    it('Add Colourful socks to cart', () => {
        cy.visit('/detail.html?id=3395a43e-2d88-40de-b95f-e00e1502085b');
        ProductPage.addToCart();
        NavBar.cartButton.click();
        CartPage.buttonProceed.click();
        cy.url().should('have.text', 'customer-orders');
    });
});
