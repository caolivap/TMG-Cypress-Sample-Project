class LoginPage {

    loginForm = {
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
    }

    goToLoginPage() {
        cy.visit('/');
    }

} export default new LoginPage();