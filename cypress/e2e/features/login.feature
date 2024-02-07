Feature: Sauce Demo Login
  As a registered user of the Sauce Demo Application
  I want to log in into the official website
  To see all the products that I can buy 

  Scenario Outline: User can log in to Sauce Demo website
    Given I am on the Sauce Demo homepage
    When I log in with my "<user>" and "<password>"
    Then I should be able to see the "Swag Labs" page
      And I should be able to see the inventory of products to purchase

    Examples: 
      | user            |  password     |
      | standard_user   | secret_sauce  |