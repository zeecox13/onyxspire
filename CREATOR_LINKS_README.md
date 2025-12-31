# Creator Links System

A Linktree-style feature for Onyxspire creators.

## Features

- **Dynamic Creator Pages**: Each creator gets a public page at `/{username}`
- **Admin Panel**: Manage creators at `/admin`
- **Luxury Design**: Matches Onyxspire brand aesthetic
- **SEO Optimized**: Full Open Graph and meta tags
- **Mobile First**: Fully responsive design

## Setup

### 1. Generate Admin Password Hash

Run the password hash generator:
```bash
node scripts/generate-password-hash.js
```

Enter your desired password when prompted. Copy the generated hash.

### 2. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_PASSWORD_HASH=<paste-the-hash-from-step-1>
JWT_SECRET=<generate-a-random-secret-string>
```

For `JWT_SECRET`, use a long random string (you can generate one online or use: `openssl rand -base64 32`)

## Usage

### Viewing Creator Pages

Visit: `http://localhost:3000/alexiabrea` (or your domain)

### Admin Panel

1. Navigate to `/admin` (you'll be redirected to login if not authenticated)
2. Enter your admin password
2. Click "New Creator" to add a creator
3. Fill in the form:
   - **Username**: URL slug (e.g., `alexiabrea`)
   - **Display Name**: Full name shown on page
   - **Bio**: Short description
   - **Profile Image URL**: Square profile photo
   - **Hero Image URL**: Optional background image
   - **Accent Color**: Hex color for buttons (e.g., `#C6A667`)
4. Add links:
   - Click "Add Link" after filling in label and URL
   - Set platform type (OnlyFans, Instagram, Twitter, TikTok, Website, Custom)
   - Mark as "Primary" for the main CTA button
   - Use up/down arrows to reorder
   - Toggle "Active" to show/hide without deleting
5. Click "Save Creator"

### Data Storage

Currently uses JSON file at `data/creators.json`. For production, consider:
- Database (PostgreSQL, MongoDB)
- CMS (Sanity, Contentful)
- Headless CMS API

### Environment Variables

Set `NEXT_PUBLIC_SITE_URL` in `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://onyxspire.com
```

If not set, defaults to `http://localhost:3000`

## Example Creator

The system comes pre-seeded with:
- **Username**: `alexiabrea`
- **Display Name**: Alexia Brea
- **Accent Color**: `#C6A667` (gold)

Visit `/alexiabrea` to see it in action!

