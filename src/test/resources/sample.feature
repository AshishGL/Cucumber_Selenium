@SmokeTest @regression
Feature: As a user I want to login in Facebook


Scenario: FB Login
Given I open chrome browser 
When I navigate to facebook
And enter username, password and hit Enter
Then User should be on FB homepage
