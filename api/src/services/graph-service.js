/**
 * 🚀 Optimized Microsoft Graph Service
 * 
 * Features:
 * - Uses cached tokens for better performance
 * - Centralized email sending logic
 * - Comprehensive error handling
 * - Request retry logic with exponential backoff
 */

const fetch = require('isomorphic-fetch');
const TokenService = require('./token-service');

class GraphService {
    constructor() {
        this.baseUrl = 'https://graph.microsoft.com/v1.0';
        this.senderEmail = process.env.EMAIL_SENDER || 'internalautomation@xevolve.io';
    }

    /**
     * Send email via Microsoft Graph API using cached token
     * @param {Object} emailData - Email configuration
     * @param {Object} context - Azure Functions context for logging
     * @returns {Promise<boolean>} Success status
     */
    async sendEmail(emailData, context) {
        try {
            // Get cached access token
            const accessToken = await TokenService.getGraphToken(context);
            
            const endpoint = `${this.baseUrl}/users/${this.senderEmail}/sendMail`;
            
            // Prepare email payload
            const emailPayload = {
                message: {
                    subject: emailData.subject,
                    body: {
                        contentType: 'HTML',
                        content: emailData.htmlContent
                    },
                    toRecipients: emailData.recipients.map(email => ({
                        emailAddress: { address: email }
                    })),
                    ...(emailData.replyTo && {
                        replyTo: [{
                            emailAddress: {
                                address: emailData.replyTo.email,
                                name: emailData.replyTo.name
                            }
                        }]
                    })
                },
                saveToSentItems: true
            };

            context?.log(`📧 Sending email to: ${emailData.recipients.join(', ')}`);
            context?.log(`📧 Subject: ${emailData.subject}`);

            // Send email with retry logic
            const response = await this.sendWithRetry(endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailPayload)
            }, context);

            if (!response.ok) {
                const errorText = await response.text();
                context?.log(`❌ Graph API error: HTTP ${response.status} - ${errorText}`);
                throw new Error(`Microsoft Graph API failed: ${response.status} ${response.statusText}`);
            }

            context?.log(`✅ Email sent successfully via Microsoft Graph`);
            return true;

        } catch (error) {
            context?.log(`❌ Failed to send email: ${error.message}`);
            throw error;
        }
    }

    /**
     * Send consultation request email
     * @param {Object} formData - Form submission data
     * @param {Object} context - Azure Functions context
     * @returns {Promise<boolean>} Success status
     */
    async sendConsultationEmail(formData, context) {
        // Format preferred dates for email
        let preferredDatesText = '';
        if (formData.preferredDates && formData.preferredDates.length > 0) {
            preferredDatesText = formData.preferredDates
                .map(dateStr => new Date(dateStr).toLocaleDateString(
                    formData.language === 'nl' ? 'nl-NL' : 'en-US',
                    {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                )).join('\n        ');
        }

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Cloud Evolvers - Training Consultation Request</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 28px;">🎓 Cloud Evolvers Training</h1>
                        <p style="margin: 10px 0 0 0; font-size: 16px;">New Consultation Request</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #667eea; margin-top: 0;">Training Consultation Details</h2>
                        
                        <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #667eea; margin-top: 0;">👤 Contact Information</h3>
                            <p><strong>Name:</strong> ${formData.name}</p>
                            <p><strong>Email:</strong> ${formData.email}</p>
                            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
                            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
                        </div>

                        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #667eea; margin-top: 0;">📚 Training Details</h3>
                            <p><strong>Requested Training:</strong> ${formData.training}</p>
                            ${formData.trainingLevel ? `<p><strong>Level:</strong> ${formData.trainingLevel}</p>` : ''}
                            ${formData.participants ? `<p><strong>Number of Participants:</strong> ${formData.participants}</p>` : ''}
                            ${formData.format ? `<p><strong>Preferred Format:</strong> ${formData.format}</p>` : ''}
                            ${preferredDatesText ? `
                                <p><strong>Preferred Dates:</strong></p>
                                <div style="margin-left: 20px; color: #555;">
                                    ${preferredDatesText.split('\n').map(date => `<p style="margin: 5px 0;">• ${date.trim()}</p>`).join('')}
                                </div>
                            ` : ''}
                        </div>

                        ${formData.message ? `
                            <div style="background: #fff8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #667eea; margin-top: 0;">💬 Additional Message</h3>
                                <p style="white-space: pre-wrap; color: #555;">${formData.message}</p>
                            </div>
                        ` : ''}

                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
                            <p style="color: #888; margin: 0;">This consultation request was submitted through cloudevolvers.com</p>
                            <p style="color: #888; margin: 5px 0 0 0; font-size: 12px;">Timestamp: ${new Date().toISOString()}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        return await this.sendEmail({
            subject: `🎓 Training Consultation Request - ${formData.training} (${formData.name})`,
            htmlContent,
            recipients: ['yair@cloudevolvers.com', 'training@cloudevolvers.com'],
            replyTo: {
                email: formData.email,
                name: formData.name
            }
        }, context);
    }

    /**
     * Send contact form email
     * @param {Object} formData - Form submission data  
     * @param {Object} context - Azure Functions context
     * @returns {Promise<boolean>} Success status
     */
    async sendContactEmail(formData, context) {
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #374151; margin-top: 0;">Message</h3>
                    <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                </div>
                
                <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                    <p style="margin: 0; color: #92400e;">
                        <strong>Action Required:</strong> Please respond to this contact inquiry promptly.
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px;">
                        This email was sent from the Cloud Evolvers contact form.<br>
                        <a href="https://cloudevolvers.com" style="color: #2563eb;">cloudevolvers.com</a>
                    </p>
                </div>
            </div>
        `;

        return await this.sendEmail({
            subject: `New Contact Form Submission from ${formData.name}`,
            htmlContent,
            recipients: ['yair@cloudevolvers.com', 'support@cloudevolvers.com'],
            replyTo: {
                email: formData.email,
                name: formData.name
            }
        }, context);
    }

    /**
     * HTTP request with retry logic
     * @param {string} url - Request URL
     * @param {Object} options - Fetch options
     * @param {Object} context - Azure Functions context
     * @param {number} maxRetries - Maximum retry attempts
     * @returns {Promise<Response>} Fetch response
     */
    async sendWithRetry(url, options, context, maxRetries = 3) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                context?.log(`📡 HTTP request attempt ${attempt}/${maxRetries}`);
                const response = await fetch(url, options);
                
                // Don't retry on 4xx errors (client errors)
                if (response.status >= 400 && response.status < 500) {
                    return response;
                }
                
                // Success or 5xx error (can retry)
                if (response.ok) {
                    return response;
                }
                
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                
            } catch (error) {
                lastError = error;
                context?.log(`⚠️ Request attempt ${attempt} failed: ${error.message}`);
                
                if (attempt < maxRetries) {
                    // Exponential backoff: 1s, 2s, 4s
                    const delay = Math.pow(2, attempt - 1) * 1000;
                    context?.log(`⏳ Retrying in ${delay}ms...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        throw lastError;
    }
}

// Export singleton instance
module.exports = new GraphService();
