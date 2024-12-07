class loginPage {
    email = "#email";
    password = "#pass";
    login_btn = "#send2";
    success_msg = 'span.logged-in';
    error_msg = '.message-error > div';
  
    //tambah function
    inputEmail(email) {
        cy.get(this.email).type(email);
    }

    inputPassword(pass) {
      cy.get(this.password).type(pass);
    }
}
  
module.exports = new loginPage();