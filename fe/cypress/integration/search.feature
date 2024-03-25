Feature: A user search automation in google

  @run
  Scenario: A user searchs for automation word Successfully
    Given I'm at Google
    When I click on search bar
    And I type automation word and press enter
    And I see results
    And I click in wikipedia result
    And I check 1624 as year of first automation successfully
    
    
