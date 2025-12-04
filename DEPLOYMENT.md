# 🚀 Deployment Guide - Fake Store Application

This guide will help you deploy your Fake Store application to GitHub and Netlify.

---

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ Git installed on your computer
- ✅ A GitHub account ([Sign up here](https://github.com/join))
- ✅ A Netlify account ([Sign up here](https://app.netlify.com/signup))

---

## 🎯 Step 1: Push to GitHub

### 1.1 Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `fake-store-app` (or your preferred name)
   - **Description**: "React shopping cart app using Fake Store API"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### 1.2 Push Your Code to GitHub

After creating the repository, run these commands in your project directory:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if not already)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/fake-store-app.git
git branch -M main
git push -u origin main
```

You may be prompted to enter your GitHub credentials.

### 1.3 Verify Your Code on GitHub

1. Go to your GitHub repository URL
2. You should see all your project files
3. Verify that `netlify.toml` is present in the root directory

---

## 🌐 Step 2: Deploy to Netlify

### Method A: Deploy via GitHub (Recommended)

#### 2.1 Connect GitHub to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Log in or sign up
3. Click **"Add new site"** button
4. Select **"Import an existing project"**

#### 2.2 Choose Your Repository

1. Click **"Deploy with GitHub"**
2. Authorize Netlify to access your GitHub account (if first time)
3. Search for your repository name (e.g., `fake-store-app`)
4. Click on your repository

#### 2.3 Configure Build Settings

Netlify will automatically detect your settings from `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

If these are not auto-filled, enter them manually.

#### 2.4 Deploy Your Site

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Your site will be assigned a random URL like: `https://random-name-123456.netlify.app`

#### 2.5 Test Your Deployed Site

1. Click on the deployed URL
2. Test all features:
   - ✅ Products loading from API
   - ✅ Category filtering
   - ✅ Product sorting
   - ✅ Add to cart
   - ✅ Cart modal
   - ✅ Remove from cart

---

### Method B: Deploy via Netlify CLI

#### 2.1 Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### 2.2 Login to Netlify

```bash
netlify login
```

This will open your browser to authorize the CLI.

#### 2.3 Build Your Project

```bash
npm run build
```

#### 2.4 Deploy to Netlify

For a **draft deploy** (test deploy):
```bash
netlify deploy
```

When prompted:
- Select **"Create & configure a new site"**
- Choose your team
- Enter site name (or press Enter for random name)
- Enter publish directory: **`dist`**

For **production deploy**:
```bash
netlify deploy --prod
```

---

### Method C: Drag & Drop Deploy

#### 2.1 Build Your Project

```bash
npm run build
```

This creates a `dist` folder with your production files.

#### 2.2 Deploy via Netlify Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your **`dist`** folder onto the page
3. Your site will be deployed instantly!

**Note:** This method creates a temporary deploy. For permanent hosting, use Method A or B.

---

## 🎨 Step 3: Customize Your Deployment

### 3.1 Change Site Name

1. Go to **Site settings**
2. Click **"Change site name"**
3. Enter your preferred name (e.g., `my-fake-store`)
4. Your new URL: `https://my-fake-store.netlify.app`

### 3.2 Add Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 24 hours)

### 3.3 Enable HTTPS

Netlify automatically provides free HTTPS for all sites. No action needed!

---

## 🔄 Step 4: Continuous Deployment

Once connected to GitHub, Netlify automatically deploys when you push changes:

```bash
# Make changes to your code
# Then commit and push:

git add .
git commit -m "Update: description of changes"
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Run the build
3. Deploy the new version
4. Your site updates in minutes!

---

## 📊 Monitoring Your Site

### Build Logs
- Go to **Deploys** tab
- Click on any deploy to see build logs
- Useful for debugging deployment issues

### Analytics
- Netlify provides basic analytics
- Go to **Analytics** tab to see visitor stats

---

## 🐛 Troubleshooting

### Build Failed?

**Check build logs:**
1. Go to Netlify dashboard
2. Click on the failed deploy
3. View the error message

**Common issues:**
- Missing dependencies: Run `npm install` locally
- Build errors: Test `npm run build` locally first
- Node version mismatch: Specified in `netlify.toml`

### Site Not Loading?

1. Check if build succeeded
2. Verify `dist` folder is being published
3. Check browser console for errors
4. Ensure API is accessible (Fake Store API status)

### 404 Errors on Refresh?

This is fixed by the redirect rule in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

If still having issues, verify `netlify.toml` is in your repository.

---

## 📝 Deployment Checklist

Before deploying, verify:

- [ ] Code is committed to Git
- [ ] `netlify.toml` is present
- [ ] `.gitignore` excludes `node_modules` and `dist`
- [ ] Build works locally: `npm run build`
- [ ] GitHub repository is created
- [ ] Code is pushed to GitHub
- [ ] Netlify site is created
- [ ] Build settings are correct
- [ ] Site deploys successfully
- [ ] All features work on live site

---

## 🎉 Success!

Congratulations! Your Fake Store application is now live on the internet!

**Share your site:**
- Copy your Netlify URL
- Share on social media
- Add to your portfolio

**Next steps:**
- Add custom domain
- Monitor analytics
- Gather user feedback
- Add new features

---

## 🆘 Need Help?

- **Netlify Docs**: https://docs.netlify.com/
- **Netlify Community**: https://answers.netlify.com/
- **GitHub Issues**: Create an issue in your repository
- **Vite Docs**: https://vitejs.dev/

---

**Happy Deploying! 🚀**
