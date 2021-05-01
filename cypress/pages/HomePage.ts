class HomePage {
    get hotSection() {
        return cy.get('#hot');
    }

    get listHotSocks() {
        return cy.get('.product');
    }

    openHottestSock() {
        this.hotSection.within(() => {
            return this.listHotSocks.first().click();
        });
    }
}

export default new HomePage();
