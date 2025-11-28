# Deployment Guide

This guide explains how to deploy VibeCode School to GitHub Pages.

## Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push to main branch:**
   - The workflow will automatically trigger on push to `main`
   - You can also manually trigger it from the Actions tab

3. **Access your site:**
   - Your site will be available at: `https://rayraycodes.github.io/vibecodingschool/`
   - It may take a few minutes for the first deployment

## Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - You can use GitHub Pages, Netlify, Vercel, or any static hosting service
   - Upload the contents of the `dist` directory

## Configuration

The `vite.config.ts` file includes a `base` path configuration for GitHub Pages:
```typescript
base: '/vibecodingschool/',
```

If you're deploying to a custom domain or different path, update this value accordingly.

## Troubleshooting

### 404 Errors
- Make sure the `base` path in `vite.config.ts` matches your repository name
- Clear your browser cache
- Check that all routes are working correctly

### Build Failures
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Assets Not Loading
- Verify the `base` path is correct
- Check that assets are being copied to the `dist` folder
- Ensure relative paths are used (not absolute)

## Custom Domain

To use a custom domain:

1. Update `vite.config.ts` to set `base: '/'`
2. Add a `CNAME` file in the `public` folder with your domain
3. Configure DNS settings as per GitHub Pages documentation

