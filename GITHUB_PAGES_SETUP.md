# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions and Vite.

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

1. Go to your repository on GitHub: `https://github.com/AmirManshadi/mantine-component-proto`

2. Click on **Settings** tab

3. In the left sidebar, click on **Pages**

4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"

5. Once configured, push to the `main` branch and the workflow will automatically:
   - Install dependencies
   - Build the Vite project
   - Deploy to GitHub Pages

## Accessing Your Site

After successful deployment, your site will be available at:
`https://amirmanshadi.github.io/mantine-component-proto/`

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
