# Deployment Guide

## GitHub Setup

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `onyxspire` (or your preferred name)
3. Choose **Private** or **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/onyxspire.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository (select the `onyxspire` repo)
4. Vercel will auto-detect Next.js settings
5. **Important**: Add these Environment Variables in Vercel:
   - `ADMIN_PASSWORD_HASH` = `$2b$10$8OA6RoXPke4ZCQ3ZIt7bfePkTmEyf.m0LaAwntqk0TLcnRd9SRF6q`
   - `JWT_SECRET` = `OWlr7NbEXydsK21qbDv5AEhDWtawbEuDh1AdLSaBIP8=`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app` (or your custom domain)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Then add environment variables in the Vercel dashboard.

## Environment Variables

Make sure these are set in Vercel:
- `ADMIN_PASSWORD_HASH` - Hash for admin password "queenzee"
- `JWT_SECRET` - Secret key for JWT authentication
- `NEXT_PUBLIC_SITE_URL` - Your production URL

## Notes

- The `.env.local` file is gitignored and won't be pushed to GitHub
- Environment variables must be set in Vercel dashboard
- After deployment, your admin panel will be at: `https://your-domain.vercel.app/admin/login`
- Password: `queenzee`

