// Microsoft Graph API integration for training management
// This service handles calendar events, email notifications, and user data

interface TrainingBooking {
  trainingId: string;
  trainingTitle: string;
  participantName: string;
  participantEmail: string;
  date: Date;
  company?: string;
  position?: string;
  experience: string;
  notes?: string;
}

interface CalendarEvent {
  subject: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  location?: {
    displayName: string;
  };
  attendees: Array<{
    emailAddress: {
      address: string;
      name: string;
    };
    type: string;
  }>;
  body: {
    contentType: string;
    content: string;
  };
}

export class GraphTrainingService {
  private static instance: GraphTrainingService;
  private accessToken: string | null = null;

  private constructor() {}

  static getInstance(): GraphTrainingService {
    if (!GraphTrainingService.instance) {
      GraphTrainingService.instance = new GraphTrainingService();
    }
    return GraphTrainingService.instance;
  }

  // Initialize authentication with Microsoft Graph
  async initialize(clientId: string, tenantId: string): Promise<boolean> {
    try {
      // In a real implementation, this would use MSAL.js
      // For now, we'll simulate the authentication process
      console.log('Initializing Microsoft Graph connection...');
      
      // Simulate getting access token
      this.accessToken = 'simulated-access-token';
      
      return true;
    } catch (error) {
      console.error('Failed to initialize Graph API:', error);
      return false;
    }
  }

  // Create a calendar event for the training session
  async createTrainingEvent(booking: TrainingBooking): Promise<string> {
    if (!this.accessToken) {
      throw new Error('Graph API not initialized');
    }

    try {
      const startTime = new Date(booking.date);
      const endTime = new Date(booking.date);
      endTime.setHours(startTime.getHours() + 8); // 8-hour training day

      const event: CalendarEvent = {
        subject: `Training: ${booking.trainingTitle}`,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: 'Europe/Amsterdam'
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: 'Europe/Amsterdam'
        },
        location: {
          displayName: 'Cloud Evolvers Training Center, Amsterdam'
        },
        attendees: [
          {
            emailAddress: {
              address: booking.participantEmail,
              name: booking.participantName
            },
            type: 'required'
          }
        ],
        body: {
          contentType: 'HTML',
          content: `
            <h2>Training Details</h2>
            <p><strong>Training:</strong> ${booking.trainingTitle}</p>
            <p><strong>Participant:</strong> ${booking.participantName}</p>
            <p><strong>Company:</strong> ${booking.company || 'Not specified'}</p>
            <p><strong>Experience Level:</strong> ${booking.experience}</p>
            ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
            
            <h3>What to Bring</h3>
            <ul>
              <li>Laptop with internet connection</li>
              <li>Notepad and pen</li>
              <li>Valid ID for building access</li>
            </ul>
            
            <h3>Location</h3>
            <p>Cloud Evolvers Training Center<br/>
            Science Park 140<br/>
            1098 XG Amsterdam<br/>
            Netherlands</p>
            
            <p>Looking forward to seeing you at the training!</p>
          `
        }
      };

      // Simulate API call to create event
      console.log('Creating calendar event:', event);
      
      // In real implementation:
      // const response = await fetch('https://graph.microsoft.com/v1.0/me/calendar/events', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${this.accessToken}`,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(event)
      // });

      // Return simulated event ID
      return `event-${Date.now()}`;
    } catch (error) {
      console.error('Failed to create calendar event:', error);
      throw error;
    }
  }

  // Send confirmation email to participant
  async sendConfirmationEmail(booking: TrainingBooking, eventId: string): Promise<boolean> {
    if (!this.accessToken) {
      throw new Error('Graph API not initialized');
    }

    try {
      const emailContent = {
        message: {
          subject: `Confirmation: ${booking.trainingTitle} Training Registration`,
          body: {
            contentType: 'HTML',
            content: `
              <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%); color: white; padding: 2rem; text-align: center;">
                  <h1 style="margin: 0; font-size: 1.8rem;">Training Confirmation</h1>
                  <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">Your registration is confirmed!</p>
                </div>
                
                <div style="padding: 2rem; background: #f8f9fa;">
                  <h2 style="color: #0078d4; margin-bottom: 1rem;">Hello ${booking.participantName}!</h2>
                  
                  <p>Thank you for registering for our training session. Here are your training details:</p>
                  
                  <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #0078d4;">
                    <h3 style="margin-top: 0; color: #0078d4;">${booking.trainingTitle}</h3>
                    <p><strong>Date:</strong> ${booking.date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                    <p><strong>Time:</strong> 09:00 - 17:00 CET</p>
                    <p><strong>Location:</strong> Cloud Evolvers Training Center, Amsterdam</p>
                    <p><strong>Event ID:</strong> ${eventId}</p>
                  </div>
                  
                  <h3 style="color: #0078d4;">What's Next?</h3>
                  <ul style="color: #666;">
                    <li>A calendar invitation has been sent to your email</li>
                    <li>You'll receive joining instructions 24 hours before the training</li>
                    <li>Pre-course materials will be shared 1 week before</li>
                  </ul>
                  
                  <h3 style="color: #0078d4;">Need Help?</h3>
                  <p>If you have any questions, please contact us:</p>
                  <ul style="color: #666;">
                    <li>Email: training@cloudevolvers.com</li>
                    <li>Phone: +31 20 123 4567</li>
                  </ul>
                  
                  <div style="background: #e3f2fd; padding: 1rem; border-radius: 8px; margin-top: 2rem;">
                    <p style="margin: 0; color: #0277bd;">
                      <strong>Important:</strong> Please bring a laptop and valid ID for building access.
                    </p>
                  </div>
                </div>
                
                <div style="background: #0078d4; color: white; padding: 1rem; text-align: center;">
                  <p style="margin: 0; font-size: 0.9rem;">Cloud Evolvers Training | Amsterdam, Netherlands</p>
                </div>
              </div>
            `
          },
          toRecipients: [
            {
              emailAddress: {
                address: booking.participantEmail,
                name: booking.participantName
              }
            }
          ]
        },
        saveToSentItems: true
      };

      // Simulate API call to send email
      console.log('Sending confirmation email:', emailContent);
      
      // In real implementation:
      // const response = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${this.accessToken}`,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(emailContent)
      // });

      return true;
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      throw error;
    }
  }

  // Update training session capacity
  async updateSessionCapacity(sessionId: string, newCapacity: number): Promise<boolean> {
    try {
      // Simulate updating session capacity in backend
      console.log(`Updating session ${sessionId} capacity to ${newCapacity}`);
      
      // In real implementation, this would update the training session data
      return true;
    } catch (error) {
      console.error('Failed to update session capacity:', error);
      return false;
    }
  }

  // Get available training sessions from calendar
  async getAvailableTrainingSessions(trainingId: string): Promise<any[]> {
    if (!this.accessToken) {
      throw new Error('Graph API not initialized');
    }

    try {
      // Simulate fetching calendar events for training sessions
      console.log('Fetching available training sessions for:', trainingId);
      
      // In real implementation:
      // const response = await fetch(
      //   `https://graph.microsoft.com/v1.0/me/calendar/events?$filter=contains(subject,'${trainingId}')&$orderby=start/dateTime`,
      //   {
      //     headers: {
      //       'Authorization': `Bearer ${this.accessToken}`,
      //       'Content-Type': 'application/json'
      //     }
      //   }
      // );

      // Return simulated sessions for now
      return [];
    } catch (error) {
      console.error('Failed to fetch training sessions:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const graphTrainingService = GraphTrainingService.getInstance();
