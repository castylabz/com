# 🚀 GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `3d-print-studio` or `castylabz-website`
3. Make it public (required for GitHub Pages)

### 2. Update Package.json

Edit the `homepage` field in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

**Example:**
```json
{
  "homepage": "https://johndoe.github.io/3d-print-studio"
}
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to GitHub

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Pages** section
4. Set **Source** to "Deploy from a branch"
5. Select **gh-pages** branch
6. Click **Save**

### 6. Wait for Deployment

GitHub Pages will take a few minutes to deploy your site. You'll see a green checkmark when it's ready.

## 🔧 Troubleshooting

### Common Issues

1. **404 Error**: Make sure you're using the correct repository name in the homepage URL
2. **Build Fails**: Check that all dependencies are installed with `npm install`
3. **Images Not Loading**: Ensure images are in the `public/images/` folder

### Manual Deployment

If `npm run deploy` fails:

```bash
# Build the app
npm run build

# Install gh-pages globally
npm install -g gh-pages

# Deploy manually
gh-pages -d build
```

## 📱 Testing Your Site

After deployment, test:
- [ ] Home page loads correctly
- [ ] Navigation works between pages
- [ ] Product images display properly
- [ ] WhatsApp links work
- [ ] Mobile responsiveness
- [ ] All links and buttons function

## 🔄 Updating Your Site

To update your deployed site:

1. Make your changes
2. Commit and push to GitHub
3. Run `npm run deploy` again
4. Wait for GitHub Pages to update

## 📞 Need Help?

- Check the [GitHub Pages documentation](https://pages.github.com/)
- Review the main [README.md](README.md) file
- Contact support through WhatsApp: +91 505 629 86

---

**Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`**
