Feature: Business rules
  I as a user
  I want to login to the application
  to do orders

  Scenario: login with success
    Given I am on the login screen
    When I fill the email field with "eduardolopes@gmail.com"
    And I fill the password field with "12345678"
    And I click on sign In
    Then I see "Login realizado"

Scenario: login without email
    Given I am on the login screen
    When I fill the email field with "testeer"
    And I fill the password field with "234512345"
    And I click on sign In
    Then I see "E-mail inválido."
