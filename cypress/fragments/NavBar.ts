class NavBar {
    get cartButton() {
        return cy.get('#navbar .btn');
    }
}
export default new NavBar();
