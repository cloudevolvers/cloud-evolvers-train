@api @localization @dutch
Feature: API Language Support
  As a developer integrating with the xEvolve API
  I want language-specific API endpoints
  So that I can provide localized content to users

  Background:
    Given the website API is running and accessible
    And all API endpoints are properly configured

  Scenario: Training API supports language parameter
    When I make a GET request to "/api/training?lang=nl"
    Then the response should be successful (200 OK)
    And the response should contain Dutch training data
    And the content-type should be "application/json"
    
  Scenario: Training API defaults to English without language parameter
    When I make a GET request to "/api/training"
    Then the response should be successful (200 OK)
    And the response should contain English training data
    And the content-type should be "application/json"

  Scenario: Blog API supports language parameter
    When I make a GET request to "/api/blog?lang=nl"
    Then the response should be successful (200 OK)
    And the response should contain Dutch blog metadata
    And the content-type should be "application/json"

  Scenario: Invalid language parameter handling
    When I make a GET request to "/api/training?lang=invalid"
    Then the response should fallback to English content
    And the response should still be successful (200 OK)

  Scenario: Cloud Evolvers settings API
    When I make a GET request to "/api/cloudevolvers/settings"
    Then the response should be successful (200 OK)
    And the response should contain Cloud Evolvers configuration
    And the brand configuration should be properly formatted

  Scenario: API response times are acceptable
    When I make multiple requests to language-specific endpoints
    Then each request should complete within 2 seconds
    And the response should be properly formatted
    And there should be no timeout errors
