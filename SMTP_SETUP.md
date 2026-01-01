# Email Setup for Application Form

To receive emails when someone submits the application form, you need to configure SMTP settings.

## Step 1: Create/Edit `.env.local`

Create or edit the `.env.local` file in the root directory of your project.

## Step 2: Add SMTP Configuration

Add the following variables to your `.env.local` file:

### Option A: Gmail (for testing/development)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
```

**Note**: You'll need to use an App Password, not your regular Gmail password:
1. Enable 2-Step Verification on your Google Account
2. Go to Google Account → Security → 2-Step Verification → App Passwords
3. Generate a new app password for "Mail"
4. Use that 16-character password (no spaces) as `SMTP_PASSWORD`

### Option B: SendGrid (recommended for production)

1. Sign up at https://sendgrid.com
2. Create an API key or use SMTP settings
3. Add to `.env.local`:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_FROM=your-email@onyxspire.com
```

### Option C: Other SMTP Providers

You can use any SMTP provider. Common ones:
- **Mailgun**: `smtp.mailgun.org` (port 587)
- **Postmark**: `smtp.postmarkapp.com` (port 587)
- **AWS SES**: Use your AWS SES SMTP credentials

Format:
```env
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASSWORD=your-password
SMTP_FROM=zee@onyxspire.com
```

## Step 3: Restart Dev Server

After adding the SMTP settings, restart your development server:

```bash
# Stop the server (Ctrl+C)
npm run dev
```

## Step 4: Test

Submit the application form and check if you receive an email at `zee@onyxspire.com`.

## Troubleshooting

- **Email not sending?** Check the terminal console for error messages
- **Authentication failed?** Double-check your credentials
- **Still not working?** The email will be logged to the console instead - check your terminal output

## Important Notes

- The `.env.local` file is gitignored (not committed to git)
- In production (Vercel), add these same environment variables in the Vercel dashboard
- Never commit SMTP passwords to git

