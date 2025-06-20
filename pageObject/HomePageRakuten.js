export class HomePageRakuten {

    // Test case 1. Registers as a new User

    validateLogo = 'img[alt="Rakuten Logo"]';
    joinFree = '.chakra-button.css-1t86jil';
    emailAddress = '#emailAddress';
    getPassword = '#password';
    checkCaptcha = '.recaptcha-checkbox-border';
    joinNow = '#email-auth-btn';
    seeRewards = 'css-28hq9c';
    
    /* openWeb() {
        return cy.visit('https://www.rakuten.com');
    } */

    verifyLogo() {
        return cy.get(this.validateLogo)
        .should('exist').and('be.visible');
    }

    clickJoinFree() {
        return cy.get(this.joinFree, { timeout: 1000 })
        .should('exist').and('be.visible')
        .click({multiple: true});
    }

    enterEmailAddress(emailAddress) {
        return cy.get(this.emailAddress, { timeout: 1000 })
        .should('exist').and('be.visible').type(emailAddress);
    }

    enterPassword(getPassword) {
        return cy.get(this.getPassword, { timeout: 1000 }).should('exist')
        .and('be.visible').type(getPassword);
    }

    checkTheCaptcha() {
        return cy.get(this.checkCaptcha, { timeout: 1000 }).should('exist')
        .and('be.visible').check({force: true});
    }
    
    clickJoinNow() {
        return cy.get(this.joinNow, { timeout: 1000 }).should('exist')
        .and('be.visible').click( {force: true} );
    }

    validateSeeRewards() {
        return cy.get(this.seeRewards).should('exist')
        .and('be.visible').and('have.text', 'You unlocked a boost!');
    }

    // Test case 2. Signs in as a registered user

    signIn = '#header_sign_in';
    email = '#emailAddress';
    password = '#password';
    reCaptcha = '.recaptcha-checkbox-border';
    submit = '#email-auth-btn';

    clickSignIn() {
        return cy.get(this.signIn, { timeout: 1000 }).should('exist')
        .and('be.visible').click({ force: true });
    }

    enterEmail(email) {
        return cy.get(this.email, { timeout: 1000 }).should('exist')
        .and('be.visible').type(email, { force: true });
    }

    enterThePassword(password) {
        return cy.get(this.password, { timeout: 1000 }).should('exist')
        .and('be.visible').type(password, { force: true });
    }

    doReCaptcha() {
        return cy.get(this.reCaptcha, { timeout: 1000 }).should('exist')
        .and('be.visible').check({ force: true });
    }

    clickSubmit() {
        return cy.get(this.submit, { timeout: 1000 }).should('exist')
        .and('be.visible').click({ force: true });
    }

    // Test case 2 & 3 - search bar, categories coupons and CB deals

    validateCategoriesPresence = '.css-cf3le8'; // index = 0
    searchBar = '#term';
    searchButton = '.chakra-button.css-1nbglha';
    navStores = '.chakra-link.css-1ei47pp'; // indexes 1–8
    navLink = '.chakra-button.css-79zxaj';
    validateCoupons = '.css-1f5exmu';
    cbDeals = '.css-1f5exmu'; //Get 50% off sitewide for Father's Day.

    seeCategories() {
        return cy.get(this.validateCategoriesPresence).eq(0)
            .should('exist').and('be.visible').click();
    }

    seeSearchBar(text) {
        return cy.get(this.searchBar)
            .should('exist').and('be.visible').type(text);
    }

    seeSearchButton() {
        return cy.get(this.searchButton)
            .should('exist').and('be.visible').click();
    }

    // ✅ Click nav store by index (1–8)
    clickNavStore(index) {
         cy.get(this.navStores)
            .eq(index).should('exist').and('be.visible').click();

    }

    clickNavLink() {
        return cy.get(this.navLink)
            .should('exist').and('be.visible').click();
    }

    // ✅ Click coupon by index
    seeCoupon(index) {
        return cy.get(this.validateCoupons)
            .eq(index).should('exist').and('be.visible').click({force: true});
    }

    // ✅ Click cashback deal by index
    seeCBDeal(index) {
        return cy.get(this.cbDeals)
            .eq(index).should('exist').and('be.visible').click({force: true});
    }
}

