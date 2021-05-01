import TopBar from '../fragments/TopBar';
import NavBar from '../fragments/NavBar';
import LoginModal from '../modals/LoginModal';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

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
});
