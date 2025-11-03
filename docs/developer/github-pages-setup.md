# GitHub Pages Setup

Documentation for deploying Yadakito Proto to GitHub Pages.

## Configuration Summary

### Changes Made

1. **Vite Configuration** (`vite.config.ts`):
   - Added `base: "/mantine-component-proto/"` to ensure assets load correctly on GitHub Pages

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Automatically builds and deploys to GitHub Pages on push to `main` branch
   - Can also be triggered manually via workflow dispatch
   - Uses official GitHub Actions for Pages deployment

3. **Updated .gitignore**:
   - Removed `.github` from gitignore to allow workflow files to be committed

## How to Enable GitHub Pages

To enable GitHub Pages for this repository, follow these steps:

### 1. Repository Settings

Go to your repository on GitHub: `https://github.com/AmirManshadi/mantine-component-proto`

### 2. Access Pages Settings

1. Click on **Settings** tab
2. In the left sidebar, click on **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"

### 3. Deploy

Once configured, pushing to the `main` branch will automatically:
- Install dependencies
- Build the Vite project
- Deploy to GitHub Pages

## Accessing Your Site

After successful deployment, your site will be available at:

```
https://amirmanshadi.github.io/mantine-component-proto/
```

## Manual Deployment

You can also trigger a manual deployment:

1. Go to the **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button

## Local Testing

To test the build locally with the GitHub Pages configuration:

```bash
npm install
npm run build
npm run preview
```

Note: The preview will serve the site with the base path configured for GitHub Pages.

## Troubleshooting

### Build Fails

Check the GitHub Actions logs:
1. Go to **Actions** tab
2. Click on the failed workflow
3. Check the logs for errors

Common issues:
- TypeScript compilation errors: Fix in `src/` and retry
- Dependencies not installed: Check `package.json` and `package-lock.json`

### Site Not Loading

1. Verify repository name matches base path in `vite.config.ts`
2. Check that workflow successfully completed
3. Wait a few minutes for GitHub Pages to update
4. Clear browser cache (Ctrl+Shift+Delete)

### Assets Not Loading

Ensure the base path is correct in `vite.config.ts`:
```typescript
base: "/mantine-component-proto/"
```

Should match:
- Repository name: `mantine-component-proto`
- Full URL: `https://amirmanshadi.github.io/mantine-component-proto/`

## Workflow Details

### Trigger Events

The deploy workflow runs automatically on:
- Push to `main` branch
- Manual trigger via GitHub Actions UI

### Steps

1. **Checkout code**
2. **Setup Node.js**
3. **Install dependencies**
4. **Run type check** (`tsc -b`)
5. **Run linting** (`npm run lint`)
6. **Build** (`npm run build`)
7. **Deploy to GitHub Pages**

### Environment

- Node.js version: Latest (specified in workflow)
- OS: Ubuntu latest
- Permissions: GITHUB_TOKEN with pages and id-token permissions

## Configuration Files

### Vite Configuration
**File**: `vite.config.ts`
```typescript
export default defineConfig({
  base: "/mantine-component-proto/",
  // ... other config
});
```

### GitHub Actions Workflow
**File**: `.github/workflows/deploy.yml`

Automatically created by GitHub when Pages deployment is configured.

## Deployment Checklist

Before pushing to main:
- ✅ All changes committed
- ✅ Tests pass locally
- ✅ Build succeeds (`npm run build`)
- ✅ Linting passes (`npm run lint`)
- ✅ TypeScript checks pass
- ✅ No console errors
- ✅ Features tested locally

## After Deployment

1. Visit the site URL
2. Test all pages and features
3. Check console for errors
4. Verify all links work
5. Check responsive design

## Custom Domain (Optional)

To use a custom domain:
1. Go to repository **Settings** > **Pages**
2. Under "Custom domain", enter your domain
3. Update DNS records as instructed
4. Verify domain ownership

## Next Steps

- Test the deployed site
- Monitor for issues
- Keep dependencies updated
- Document any issues found

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
