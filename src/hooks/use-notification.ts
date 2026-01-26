import React, { useState } from 'react';

export interface NotificationState {
  type: 'error' | 'success' | 'warning' | 'info';
  title: string;
  message: string;
  isVisible: boolean;
}

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    type: 'info',
    title: '',
    message: '',
    isVisible: false
  });

  const showNotification = (
    type: 'error' | 'success' | 'warning' | 'info',
    title: string,
    message: string
  ) => {
    setNotification({
      type,
      title,
      message,
      isVisible: true
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Helper functions for different notification types
  const showError = (title: string, message: string) => {
    showNotification('error', title, message);
  };

  const showSuccess = (title: string, message: string) => {
    showNotification('success', title, message);
  };

  const showWarning = (title: string, message: string) => {
    showNotification('warning', title, message);
  };

  const showInfo = (title: string, message: string) => {
    showNotification('info', title, message);
  };

  // Helper function to show API errors with better messages
  const showApiError = (error: unknown, language: 'en' | 'nl' = 'en') => {
    let title = language === 'nl' ? 'Fout' : 'Error';
    let message = language === 'nl' 
      ? 'Er is een onbekende fout opgetreden. Probeer het opnieuw.'
      : 'An unknown error occurred. Please try again.';

    if (error instanceof Error) {
      // Check for common Graph API errors
      if (error.message.includes('Authorization_RequestDenied')) {
        title = language === 'nl' ? 'Geen Toestemming' : 'Permission Denied';
        message = language === 'nl'
          ? 'Onvoldoende machtigingen om e-mail te verzenden. Neem contact op met de beheerder.'
          : 'Insufficient permissions to send email. Please contact the administrator.';
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        title = language === 'nl' ? 'Verbindingsprobleem' : 'Connection Error';
        message = language === 'nl'
          ? 'Controleer uw internetverbinding en probeer het opnieuw.'
          : 'Please check your internet connection and try again.';
      } else if (error.message.includes('timeout')) {
        title = language === 'nl' ? 'Time-out' : 'Timeout';
        message = language === 'nl'
          ? 'De aanvraag duurde te lang. Probeer het opnieuw.'
          : 'The request took too long. Please try again.';
      } else if (error.message.includes('Missing required fields')) {
        title = language === 'nl' ? 'Ontbrekende Velden' : 'Missing Fields';
        message = language === 'nl'
          ? 'Vul alle verplichte velden in.'
          : 'Please fill in all required fields.';
      } else if (error.message.includes('Invalid email')) {
        title = language === 'nl' ? 'Ongeldig E-mailadres' : 'Invalid Email';
        message = language === 'nl'
          ? 'Voer een geldig e-mailadres in.'
          : 'Please enter a valid email address.';
      } else {
        // Use the error message if it's user-friendly
        message = error.message.length < 100 ? error.message : message;
      }
    }

    showError(title, message);
  };

  return {
    notification,
    showNotification,
    hideNotification,
    showError,
    showSuccess,
    showWarning,
    showInfo,
    showApiError
  };
};
