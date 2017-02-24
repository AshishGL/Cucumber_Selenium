@SendFriendRequest @regression
Feature: As a FB user I want to send friend requests

Scenario: Send Friend Requests
Given I Enter "Ashish" in search bar
When  I click on the first result found
And I click on Add Friend option
Then Add Friend request should be sent to "Ashish"