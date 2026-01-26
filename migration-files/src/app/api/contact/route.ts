import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/graph-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, submittedAt } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const recipients = [process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@xevolve.io'];

    if (type === 'quick-inquiry') {
      // Handle quick inquiry from footer
      const emailSubject = 'Quick Inquiry from Website';
      const emailContent = `
        <h2>New Quick Inquiry</h2>
        <hr>
        
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> ${email}</p>
        
        <p><em>This person submitted a quick inquiry via the website footer. Please reach out to them to understand their needs.</em></p>
        
        <hr>
        <p><small>Submitted at: ${new Date(submittedAt).toLocaleString()}</small></p>
      `;

      // Send notification email
      await sendEmail({
        subject: emailSubject,
        toRecipients: recipients,
        content: emailContent,
        isHtml: true
      });

      // Send confirmation to user
      const confirmationSubject = 'We received your inquiry!';
      const confirmationContent = `
        <h2>Thank you for your inquiry!</h2>
        <p>Hello,</p>
        
        <p>We received your quick inquiry and appreciate your interest in our Azure cloud solutions and training services.</p>
        
        <h3>What happens next:</h3>
        <ul>
          <li><strong>Within 24 hours:</strong> Our team will reach out to you via email</li>
          <li><strong>Quick call:</strong> We'll schedule a brief conversation to understand your needs</li>
          <li><strong>Tailored solution:</strong> We'll provide recommendations that fit your requirements</li>
        </ul>
        
        <p>If you have any urgent questions in the meantime, please don't hesitate to contact us directly.</p>
        
        <p>Best regards,<br>
        The xEvolve Team<br>
        <a href="mailto:${recipients[0]}">${recipients[0]}</a></p>
      `;

      await sendEmail({
        subject: confirmationSubject,
        toRecipients: [email],
        content: confirmationContent,
        isHtml: true
      });

    } else if (type === 'consultation') {
      // Handle consultation request
      const { name, training, preferredDates, message } = body;

      if (!name) {
        return NextResponse.json(
          { error: 'Name is required for consultation requests' },
          { status: 400 }
        );
      }

      const emailSubject = `New Consultation Request from ${name}`;
      const emailContent = `
        <h2>New Consultation Request</h2>
        <hr>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <h3>Request Details</h3>
        <p><strong>Interested Training:</strong> ${training === 'none' || !training ? 'General consultation' : training}</p>
        <p><strong>Preferred Dates:</strong> ${
          Array.isArray(preferredDates) && preferredDates.length > 0 
            ? preferredDates.filter(date => date.trim()).join(', ') 
            : 'Not specified'
        }</p>
        
        ${message ? `
        <h3>Additional Information</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        <hr>
        <p><small>Submitted at: ${new Date(submittedAt).toLocaleString()}</small></p>
      `;

      // Send notification email
      await sendEmail({
        subject: emailSubject,
        toRecipients: recipients,
        content: emailContent,
        isHtml: true
      });

      // Send confirmation to user
      const confirmationSubject = 'Consultation Request Received';
      const confirmationContent = `
        <h2>Thank you for your consultation request!</h2>
        <p>Dear ${name},</p>
        
        <p>We have received your consultation request and appreciate your interest in our training services.</p>
        
        <h3>What happens next:</h3>
        <ul>
          <li><strong>Within 24 hours:</strong> Our team will review your request and contact you via email</li>
          <li><strong>During the call:</strong> We'll discuss your specific needs and objectives</li>
          <li><strong>Custom proposal:</strong> We'll provide a tailored training solution</li>
          <li><strong>Next steps:</strong> If everything looks good, we'll schedule your training</li>
        </ul>
        
        ${training ? `<p><strong>Training of Interest:</strong> ${training}</p>` : ''}
        ${preferredDates && Array.isArray(preferredDates) && preferredDates.filter(date => date.trim()).length > 0 
          ? `<p><strong>Your Preferred Dates:</strong> ${preferredDates.filter(date => date.trim()).join(', ')}</p>` 
          : ''
        }
        
        <p>If you have any urgent questions in the meantime, please don't hesitate to contact us directly.</p>
        
        <p>Best regards,<br>
        The xEvolve Training Team<br>
        <a href="mailto:${recipients[0]}">${recipients[0]}</a></p>
      `;

      await sendEmail({
        subject: confirmationSubject,
        toRecipients: [email],
        content: confirmationContent,
        isHtml: true
      });

    } else if (type === 'contact-form' || (!type && body.name && body.message)) {
      // Handle traditional contact form submissions (from contact page)
      const { name, subject, message } = body;

      if (!name || !message) {
        return NextResponse.json(
          { error: 'Name and message are required for contact form submissions' },
          { status: 400 }
        );
      }

      const emailSubject = `Contact Form: ${subject || 'General Inquiry'}`;
      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <hr>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        
        <h3>Message</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>Submitted at: ${new Date(submittedAt || new Date().toISOString()).toLocaleString()}</small></p>
      `;

      // Send notification email
      await sendEmail({
        subject: emailSubject,
        toRecipients: recipients,
        content: emailContent,
        isHtml: true
      });

      // Send confirmation to user
      const confirmationSubject = 'Message Received - xEvolve';
      const confirmationContent = `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        
        <p>We have received your message and appreciate you reaching out to us.</p>
        
        <p>Our team will review your inquiry and respond within 24 hours during business days.</p>
        
        <p>Best regards,<br>
        The xEvolve Team<br>
        <a href="mailto:${recipients[0]}">${recipients[0]}</a></p>
      `;

      await sendEmail({
        subject: confirmationSubject,
        toRecipients: [email],
        content: confirmationContent,
        isHtml: true
      });

    } else {
      return NextResponse.json(
        { error: 'Invalid contact type or missing required fields' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
