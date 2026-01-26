import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/graph-api';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the required fields
    if (!data.name || !data.email || !data.ideaTitle || !data.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const categoryMap: Record<string, string> = {
      'feature': 'New Feature Request',
      'improvement': 'Enhancement/Improvement',
      'service': 'New Service Suggestion',
      'integration': 'Integration Idea',
      'other': 'Other'
    };
    
    const category = categoryMap[data.category] || 'Uncategorized';
    
    const emailHtml = `
      <h2>New Idea Submission</h2>
      <p><strong>From:</strong> ${data.name} (${data.email})</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Idea Title:</strong> ${data.ideaTitle}</p>
      <h3>Description:</h3>
      <p>${data.description.replace(/\n/g, '<br>')}</p>
      ${data.impact ? `<h3>Potential Impact:</h3><p>${data.impact.replace(/\n/g, '<br>')}</p>` : ''}
    `;
    
    // Get notification recipient from env vars or use a default
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@xevolve.io';

    // Send email using Graph API
    await sendEmail({
      subject: `xEvolve Idea Submission: ${data.ideaTitle}`,
      toRecipients: [notificationEmail],
      content: emailHtml
    });
    
    // Send an acknowledgement email to the submitter
    await sendEmail({
      subject: 'Thank you for your idea submission',
      toRecipients: [data.email],
      content: `
        <h2>Thank you for your idea submission</h2>
        <p>Dear ${data.name},</p>
        <p>We've received your idea "${data.ideaTitle}" and our team will review it carefully.</p>
        <p>We appreciate your contribution to making xEvolve better!</p>
        <p>Best regards,<br>The xEvolve Team</p>
      `
    });
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Idea submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing idea submission:', error);
    return NextResponse.json(
      { error: 'Failed to process idea submission' },
      { status: 500 }
    );
  }
}
