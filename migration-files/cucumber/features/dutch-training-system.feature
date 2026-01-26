@dutch @training @localization
Feature: Dutch Training System
  As a potential student interested in Azure training
  I want to access Dutch training content
  So that I can understand course details in my native language

  Background:
    Given the website is running and accessible
    And the training system is properly configured

  Scenario: Dutch training API returns Dutch courses
    When I make a request to "/api/training?lang=nl"
    Then I should receive 6 Dutch training courses
    And each course should have Dutch metadata
    And course descriptions should be in Dutch
    And prerequisites should be in Dutch

  Scenario: English training API returns English courses
    When I make a request to "/api/training"
    Then I should receive more than 20 English training courses
    And each course should have English metadata
    And course descriptions should be in English

  Scenario: Specific Dutch training course loads correctly
    Given Dutch training courses are available
    When I request a specific Dutch training course "azure-fundamentals"
    Then the course details should be in Dutch
    And the course duration should be shown as "dagen"
    And prerequisites should be listed in Dutch

  Scenario: Training content components are available
    Given the Dutch training content system is loaded
    When I check for Dutch training components
    Then I should find "AzureFundamentalsContent" component
    And I should find "Microsoft365FundamentalsContent" component
    And I should find "AzureAdministratorMasteryContent" component
    And I should find "PowerPlatformFundamentalsContent" component
    And I should find "AzureSecurityFundamentalsContent" component
    And I should find "TeamsAdvancedAdministrationContent" component

  Scenario: Training metadata contains Dutch keywords
    Given I have access to Dutch training courses
    When I examine the course metadata
    Then I should find Dutch keywords like "cursus", "training", "certificering"
    And course durations should use "dagen" format
    And difficulty levels should be in Dutch
