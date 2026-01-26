@dutch @blog @localization
Feature: Dutch Blog System
  As a user visiting the xEvolve website
  I want to access Dutch blog content automatically
  So that I can read articles in my preferred language

  Background:
    Given the website is running and accessible
    And the blog system is properly configured

  Scenario: Access Dutch blog via intelligent slug detection
    When I visit a blog with a Dutch-looking slug like "azure-bicep-avm-modules-wanneer-te-gebruiken-en-wanneer-te-vermijden"
    Then the blog should be automatically detected as Dutch content
    And I should see Dutch language content
    And the page should load without 404 errors

  Scenario: Access regular English blog
    When I visit a blog with an English slug like "azure-bicep-avm-modules-when-to-use-and-when-to-avoid"
    Then the blog should be detected as English content
    And I should see English language content
    And the page should load without 404 errors

  Scenario: Blog API supports language parameter
    When I make a request to "/api/blog?lang=nl"
    Then I should receive Dutch blog metadata
    And the response should contain Dutch blog entries
    And the response should be in valid JSON format

  Scenario: Blog listing shows appropriate content
    Given I am on the blog listing page
    When I switch the language to Dutch
    Then I should see Dutch blog titles and descriptions
    And Dutch blog slugs should be properly formatted

  Scenario: Individual Dutch blog post loads correctly
    Given there are Dutch blog posts available
    When I navigate to a specific Dutch blog post
    Then the blog content should be displayed in Dutch
    And the metadata should show Dutch language indicators
    And related blog suggestions should be in Dutch
