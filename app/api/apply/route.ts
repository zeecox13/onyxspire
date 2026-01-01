import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration - using environment variables
const createTransporter = () => {
  // For production, use SMTP settings from environment variables
  // For development, you can use a service like Gmail, SendGrid, or Mailgun
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
  return transporter
}

// Format conversation for email
const formatConversation = (messages: any[], formData: any) => {
  let conversationText = '=== APPLICATION CONVERSATION ===\n\n'
  
  messages.forEach((message, index) => {
    const sender = message.sender === 'onyx' ? 'BotZee (Onyxspire)' : 'Applicant'
    const timestamp = new Date(message.timestamp).toLocaleString()
    conversationText += `[${timestamp}] ${sender}:\n${message.text}\n\n`
  })
  
  conversationText += '\n=== APPLICATION DATA ===\n\n'
  
  // Map field names to readable labels
  const fieldLabels: Record<string, string> = {
    legal_name: 'Legal Name',
    creator_name: 'Creator/Stage Name',
    pronouns: 'Pronouns',
    platform_links: 'Monetized Platforms',
    monthly_income: 'Monthly Income Range',
    main_goals: 'Main Goals',
    content_niche: 'Content Niche & Brand Vibe',
    time_commitment: 'Time Commitment & Work Style',
    instagram_followers: 'Instagram Followers',
    instagram_link: 'Instagram Link',
    tiktok_followers: 'TikTok Followers',
    tiktok_link: 'TikTok Link',
    posting_frequency: 'Posting Frequency',
    email: 'Email',
    birthday: 'Birthday',
    phone: 'Phone Number',
    location: 'Location',
    referral_source: 'How They Heard About Us',
    additional_info: 'Additional Information'
  }
  
  Object.entries(formData).forEach(([key, value]) => {
    const label = fieldLabels[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    if (value) {
      conversationText += `${label}: ${value}\n`
    }
  })
  
  return conversationText
}

export async function POST(request: NextRequest) {
  try {
    const { formData, conversation } = await request.json()

    if (!formData) {
      return NextResponse.json(
        { error: 'Form data is required' },
        { status: 400 }
      )
    }

    // Basic validation - check required fields
    const requiredFields = [
      'legal_name',
      'creator_name',
      'pronouns',
      'platform_links',
      'monthly_income',
      'main_goals',
      'content_niche',
      'time_commitment',
      'posting_frequency',
      'email',
      'birthday'
    ]

    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Format the conversation
    const conversationText = formatConversation(conversation || [], formData)

    // Send email if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        const transporter = createTransporter()
        
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: 'zee@onyxspire.com',
          subject: `New Application from ${formData.creator_name || formData.legal_name || 'Applicant'}`,
          text: conversationText,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
              <h2 style="color: #FF1493; border-bottom: 2px solid #FF1493; padding-bottom: 10px;">
                New Application Submission
              </h2>
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Conversation</h3>
                <div style="white-space: pre-wrap; font-family: monospace; background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #FF1493;">
${conversationText.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          `
        })
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Don't fail the request if email fails, just log it
        // In production, you might want to queue this or use a service like SendGrid
      }
    } else {
      // If SMTP not configured, just log (for development)
      console.log('=== APPLICATION SUBMISSION ===')
      console.log(conversationText)
      console.log('\n=== EMAIL NOT SENT - SMTP NOT CONFIGURED ===')
      console.log('To enable email, set SMTP_USER, SMTP_PASSWORD, and other SMTP settings in .env.local')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}
