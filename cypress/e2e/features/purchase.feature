Feature: Sauce Demo Purchases
  As a registered user of the Sauce Demo Application
  I want to look for and select products
  To purchase them 

  Scenario Outline: User can purchase products
    Given I am on the Sauce Demo homepage
    When I log in with my "<user>" and "<password>"
      And I add the products to the shopping cart
        |product                  |
        |Sauce Labs Fleece Jacket |
        |Sauce Labs Onesie        |
      And I go to the Shopping Cart
    Then I should be able to see shopping cart page
      And I should be able to see selected products on the shopping cart

    Examples: 
      | user            |  password     |
      | standard_user   | secret_sauce  |