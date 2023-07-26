Feature: Login 
 As a user 
 I want to login website/app
 So I can Create Board and give feedback to it

Scenario: Login Successfully
  Given I am on Login Page
  When  I am on Login page I entered valid credentials
  Then  Click on Login Button 
  Then  I Logged in Successfully
  