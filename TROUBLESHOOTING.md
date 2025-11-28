# Troubleshooting GitHub Pages Deployment

## Site Not Loading After Successful Deployment

If your deployment workflow runs successfully but the site isn't loading, check these:

### 1. Verify GitHub Pages Settings

- Go to **Settings → Pages** in your repository
- Ensure **Source** is set to **"Deploy from a branch"**
- Branch should be **`gh-pages`** and folder **`/ (root)`**
- If it says "GitHub Actions", change it to "Deploy from a branch"

### 2. Check the Base Path

The repository name is `vibecodingschool`, so the URL should be:
- ✅ Correct: `https://rayraycodes.github.io/vibecodingschool/`
- ❌ Wrong: `https://rayraycodes.github.io/`

The `vite.config.ts` has `base: '/vibecodingschool/'` which is correct.

### 3. Verify Deployment Branch

1. Go to your repository on GitHub
2. Check if the `gh-pages` branch exists
3. Verify it contains the `index.html` and `assets/` folder
4. Check the branch directly: `https://github.com/rayraycodes/vibecodingschool/tree/gh-pages`

### 4. Check Workflow Logs

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Check if all steps completed successfully
4. Look for any warnings or errors

### 5. Common Issues

**Issue: 404 Error**
- Make sure you're accessing: `https://rayraycodes.github.io/vibecodingschool/` (with trailing slash)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Try incognito/private mode

**Issue: Blank Page**
- Open browser developer tools (F12)
- Check Console for errors
- Check Network tab to see if assets are loading
- Verify assets have correct paths (should start with `/vibecodingschool/`)

**Issue: Assets Not Loading**
- Check if asset paths in the built HTML start with `/vibecodingschool/`
- Verify `vite.config.ts` has `base: '/vibecodingschool/'`
- Rebuild and redeploy

### 6. Manual Verification

1. Check the built files locally:
   ```bash
   npm run build
   cat dist/index.html
   ```
   - Look for asset paths - they should start with `/vibecodingschool/`

2. Test locally with the base path:
   ```bash
   npm run preview
   ```
   - Then visit: `http://localhost:4173/vibecodingschool/`

### 7. Force Re-deployment

If nothing works, try:
1. Delete the `gh-pages` branch
2. Re-run the workflow manually (Actions → Deploy workflow → Run workflow)
3. Wait a few minutes for GitHub Pages to update

### 8. Check Repository Name

If your repository is named differently, update `vite.config.ts`:
```typescript
base: '/your-repo-name/',
```

Then rebuild and redeploy.

