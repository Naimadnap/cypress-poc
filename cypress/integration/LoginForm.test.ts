import TopBar from '../fragments/TopBar';
import LoginModal from '../modals/LoginModal';

describe('Login form tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('TC ID: 2.1 Correct login to the application', () => {
        TopBar.openLoginModal();
        LoginModal.logIn('user', 'password');
        TopBar.getLoggedUserInfo().should('have.text', 'Logged in as User Name');
    });

    it('TC ID: 2.2 Incorrect login to the application', () => {
        TopBar.openLoginModal();
        LoginModal.maybeLogin('user');
        LoginModal.getValidationMessage().should('have.text', 'Invalid login credentials.');
    });
});
