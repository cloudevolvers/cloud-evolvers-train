#!/bin/bash

# 🚀 Cloud Evolvers Deployment Utility Script
# This script provides utility functions for the deployment workflow

set -e  # Exit on any error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}ℹ️  INFO:${NC} $1"
}

log_success() {
    echo -e "${GREEN}✅ SUCCESS:${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠️  WARNING:${NC} $1"
}

log_error() {
    echo -e "${RED}❌ ERROR:${NC} $1"
}

# Function to check if PR exists for current branch
check_pr_exists() {
    local branch_name="$1"
    local repo_owner="$2"
    local repo_name="$3"
    local github_token="$4"
    
    log_info "Checking for open PR on branch: $branch_name"
    
    local pr_count=$(curl -s \
        -H "Authorization: Bearer $github_token" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/$repo_owner/$repo_name/pulls?state=open&head=$repo_owner:$branch_name" \
        | jq '. | length')
    
    if [[ "$pr_count" -gt 0 ]]; then
        log_warning "Found $pr_count open PR(s) for branch $branch_name"
        return 0  # PR exists
    else
        log_info "No open PRs found for branch $branch_name"
        return 1  # No PR exists
    fi
}

# Function to apply deployment delays for batching
apply_deployment_delay() {
    local deployment_type="$1"  # "cloud-evolvers" or "xevolve"
    
    case "$deployment_type" in
        "cloud-evolvers")
            local delay=30
            log_info "Applying Cloud Evolvers deployment delay: ${delay}s"
            ;;
        "xevolve")
            local delay=90
            log_info "Applying xEvolve deployment delay: ${delay}s"
            ;;
        *)
            local delay=60
            log_warning "Unknown deployment type, using default delay: ${delay}s"
            ;;
    esac
    
    echo "🕐 Waiting ${delay} seconds to stagger deployment..."
    sleep "$delay"
    log_success "Deployment batch window ready"
}

# Function to load environment variables from file
load_environment() {
    local env_file="$1"
    
    if [[ -f "$env_file" ]]; then
        log_info "Loading environment from: $env_file"
        
        # Source the environment file while handling Key Vault references
        while IFS= read -r line || [[ -n "$line" ]]; do
            # Skip comments and empty lines
            [[ "$line" =~ ^[[:space:]]*# ]] || [[ -z "$line" ]] && continue
            
            # Extract variable name and value
            if [[ "$line" =~ ^([^=]+)=(.*)$ ]]; then
                local var_name="${BASH_REMATCH[1]}"
                local var_value="${BASH_REMATCH[2]}"
                
                # Check if value is a Key Vault reference
                if [[ "$var_value" =~ @Microsoft\.KeyVault ]]; then
                    # Pass Key Vault references through - Azure Static Web Apps will resolve them
                    export "$var_name=$var_value"
                    log_info "Set Key Vault reference: $var_name -> ${var_value}"
                else
                    export "$var_name=$var_value"
                    log_info "Set environment variable: $var_name"
                fi
            fi
        done < "$env_file"
        
        log_success "Environment loaded successfully"
    else
        log_error "Environment file not found: $env_file"
        return 1
    fi
}

# Function to validate required environment variables
validate_environment() {
    local required_vars=(
        "NEXT_PUBLIC_CONTACT_EMAIL"
        "NOTIFICATION_EMAIL"
        "EMAIL_SENDER"
    )
    
    log_info "Validating required environment variables..."
    
    local missing_vars=()
    for var in "${required_vars[@]}"; do
        if [[ -z "${!var}" ]]; then
            missing_vars+=("$var")
        fi
    done
    
    if [[ ${#missing_vars[@]} -gt 0 ]]; then
        log_error "Missing required environment variables:"
        for var in "${missing_vars[@]}"; do
            echo "  - $var"
        done
        return 1
    fi
    
    log_success "All required environment variables are set"
    return 0
}

# Function to print deployment summary
print_deployment_summary() {
    local environment="$1"
    local branch_name="$2"
    local event_type="$3"
    local pr_number="$4"
    
    echo
    echo "===========================================" 
    log_success "Cloud Evolvers Deployment Summary"
    echo "==========================================="
    echo "🏷️  Environment: $environment"
    echo "🌿 Branch: $branch_name"
    echo "📋 Event: $event_type"
    
    if [[ -n "$pr_number" ]]; then
        echo "🔍 Preview Environment: PR-$pr_number"
    fi
    
    echo "📧 Contact API: Available at deployment URL"
    echo "==========================================="
    echo
}

# Main function to handle script arguments
main() {
    case "${1:-}" in
        "check-pr")
            check_pr_exists "$2" "$3" "$4" "$5"
            ;;
        "delay")
            apply_deployment_delay "$2"
            ;;
        "load-env")
            load_environment "$2"
            ;;
        "validate-env")
            validate_environment
            ;;
        "summary")
            print_deployment_summary "$2" "$3" "$4" "$5"
            ;;
        *)
            echo "Usage: $0 {check-pr|delay|load-env|validate-env|summary} [args...]"
            echo
            echo "Commands:"
            echo "  check-pr BRANCH OWNER REPO TOKEN  - Check if PR exists for branch"
            echo "  delay TYPE                        - Apply deployment delay (cloud-evolvers|xevolve)"
            echo "  load-env FILE                     - Load environment variables from file"
            echo "  validate-env                      - Validate required environment variables"
            echo "  summary ENV BRANCH EVENT [PR]     - Print deployment summary"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
