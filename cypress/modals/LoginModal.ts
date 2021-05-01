import { StringNullableChain } from 'cypress/types/lodash';

class LoginModal {
    get root() {
        return cy.get('#login-modal');
    }

    get inputUsername() {
        return cy.get('#username-modal');
    }

    get inputPassword() {
        return cy.get('#password-modal');
    }

    get buttonLogin() {
        return cy.get('.btn-primary');
    }

    get validationMessage() {
        return cy.get('#login-message');
    }

    logIn(username: string, password: string) {
        this.root.within($root => {
            this.inputUsername.clear();
            this.inputUsername.type(username);
            this.inputPassword.clear();
            this.inputPassword.type(password);
            this.buttonLogin.click();
        });
    }

    maybeLogin(username: string | undefined, password: string | undefined) {
        this.root.within($root => {
            this.inputUsername.clear();
            username ? this.inputUsername.type(username) : undefined;
            this.inputPassword.clear();
            password ? this.inputPassword.type(password) : undefined;
            this.buttonLogin.click();
        });
    }

    getValidationMessage() {
        return this.validationMessage;
    }
}

export default new LoginModal();
