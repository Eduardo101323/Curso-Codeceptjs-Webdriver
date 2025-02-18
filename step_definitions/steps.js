const { I } = inject();
// Add in your custom step files

Given('I am on the login screen', () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.amOnPage('/')
  I.click('.fa.fa-user')
  I.waitForElement('#user', 10)
});

When('I click on sign In', () => {
  // From "features\basic.feature" {"line":10,"column":5}
  I.click('#btnLogin')
});

When('I fill the email field with {string}', (email) => {
  // From "features\basic.feature" {"line":15,"column":5}
  I.fillField('#user', email)
});

When('I fill the password field with {string}', (password) => {
  // From "features\basic.feature" {"line":16,"column":5}
  I.fillField('#password', password)
});

Then('I see {string}', (message) => {
  // From "features\basic.feature" {"line":18,"column":5}
  I.see(message)
});
