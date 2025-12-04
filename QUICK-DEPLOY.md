# 🚀 Quick Deployment Guide

## Push to GitHub

```bash
# 1. Create a new repository on GitHub at https://github.com/new

# 2. Add remote origin (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 3. Push to GitHub
git branch -M main
git push -u origin main
```

## Deploy to Netlify

### Option 1: Via GitHub (Easiest)
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your repository
5. Click "Deploy site"

### Option 2: Drag & Drop
1. Run: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page

## Your Site is Live! 🎉

You'll get a URL like: `https://random-name-123456.netlify.app`

## Customize
- Change site name in Netlify settings
- Add custom domain (optional)
- Auto-deploy on every push to GitHub

---

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)
