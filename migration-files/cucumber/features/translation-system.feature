@localization @translation @ui
Feature: Translation and Localization System
  As a user visiting the xEvolve website
  I want seamless language switching capabilities
  So that I can access content in my preferred language

  Background:
    Given the website is running and accessible
    And the translation system is properly configured

  Scenario: Translation system initializes without hydration errors
    When I visit the homepage
    Then there should be no hydration mismatches
    And the page should load cleanly without flash of incorrect content
    And the language context should be properly initialized

  Scenario: Language switching works in real-time
    Given I am on any page with language switching capability
    When I change the language from English to Dutch
    Then the interface should immediately update to Dutch
    And navigation items should be translated
    And page content should be in Dutch
    And no page refresh should be required

  Scenario: Brand switching between xEvolve and Cloud Evolvers
    Given I am in development mode
    When I toggle the brand switcher
    Then the brand should change from xEvolve to Cloud Evolvers or vice versa
    And the header should reflect the new brand colors
    And the navigation should show appropriate menu items
    And the logo should update to match the brand

  Scenario: Dutch translations are complete
    Given I switch the language to Dutch
    When I navigate through different pages
    Then common UI elements should be translated
    And form labels should be in Dutch
    And button texts should be in Dutch
    And error messages should be in Dutch

  Scenario: Language persistence across pages
    Given I have selected Dutch as my language
    When I navigate to different pages on the site
    Then the Dutch language preference should persist
    And all pages should display in Dutch
    And the language selector should show Dutch as selected
