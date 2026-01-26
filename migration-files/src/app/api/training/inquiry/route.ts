import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/graph-api';
import { getBrandConfig } from '@/lib/brand-config';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const {
      trainingTitle,
      trainingId,
      name,
      email,
      company,
      phone,
      participantCount,
      preferredFormat,
      message,
      submittedAt
    } = data;

    // Validate required fields
    if (!name || !email || !message || !trainingTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailSubject = `Training Inquiry: ${trainingTitle}`;
    
    const emailContent = `
      <h2>New Training Inquiry</h2>
      <p><strong>Training:</strong> ${trainingTitle}</p>
      <p><strong>Training ID:</strong> ${trainingId}</p>
      <hr>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      
      <h3>Training Details</h3>
      <p><strong>Expected Participants:</strong> ${participantCount}</p>
      <p><strong>Preferred Format:</strong> ${preferredFormat}</p>
      
      <h3>Message</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>Submitted at: ${new Date(submittedAt).toLocaleString()}</small></p>
    `;

    // Send email via Graph API
    const brandConfig = getBrandConfig();
    const recipients = [
      brandConfig.trainingEmail || process.env.TRAINING_INQUIRY_EMAIL || 'info@xevolve.io'
    ];

    await sendEmail({
      subject: emailSubject,
      toRecipients: recipients,
      content: emailContent,
      isHtml: true
    });

    // Send confirmation email to the user
    const confirmationSubject = `Training Inquiry Received: ${trainingTitle}`;
    const confirmationContent = `
      <h2>Thank you for your training inquiry!</h2>
      <p>Dear ${name},</p>
      
      <p>We have received your inquiry about our "${trainingTitle}" training program.</p>
      
      <h3>Your Inquiry Details:</h3>
      <ul>
        <li><strong>Training:</strong> ${trainingTitle}</li>
        <li><strong>Expected Participants:</strong> ${participantCount}</li>
        <li><strong>Preferred Format:</strong> ${preferredFormat}</li>
      </ul>
      
      <p>Our training team will review your requirements and get back to you within 24 hours with:</p>
      <ul>
        <li>Detailed training agenda and curriculum</li>
        <li>Available dates and scheduling options</li>
        <li>Pricing information</li>
        <li>Any customization options</li>
      </ul>
      
      <p>If you have any urgent questions, please don't hesitate to contact us.</p>
      
      <p>Best regards,<br>
      The xEvolve Training Team</p>
      
      <hr>
      <p><small>This is an automated confirmation. Please do not reply to this email.</small></p>
    `;

    await sendEmail({
      subject: confirmationSubject,
      toRecipients: [email],
      content: confirmationContent,
      isHtml: true
    });

    return NextResponse.json({
      success: true,
      message: 'Training inquiry submitted successfully'
    });

  } catch (error) {
    console.error('Error processing training inquiry:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit training inquiry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
