import LoginModal from '../modals/LoginModal';

class TopBar {
    get root() {
        return cy.get('#topbar');
    }

    get buttonLogin() {
        return cy.get('[data-target="#login-modal"]');
    }

    get loggedUserInfo() {
        return cy.get('#howdy');
    }

    openLoginModal() {
        this.root.within(() => {
            this.buttonLogin.click();
        });
    }

    getLoggedUserInfo() {
        //TODO: get to know why it doesn't work with within
        return this.loggedUserInfo;
    }
}
export default new TopBar();
