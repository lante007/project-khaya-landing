# Deployment Guide - Project Khaya Landing Page

This guide covers multiple deployment options for the Project Khaya landing page.

## 📋 Pre-Deployment Checklist

- [x] Responsive design verified (mobile, tablet, desktop)
- [x] Cross-browser compatibility tested (Chrome, Firefox, Safari, Edge)
- [x] Images optimized for web
- [x] SEO meta tags configured
- [x] Performance optimized
- [x] Accessibility standards met

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers the best performance with automatic deployments from GitHub.

**Steps:**

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
cd project-khaya-landing
vercel
```

3. **Follow the prompts**:
   - Link to your GitHub account
   - Select the project
   - Configure build settings (auto-detected)
   - Deploy!

4. **Custom Domain** (optional):
```bash
vercel domains add projectkhaya.co.za
```

**Build Configuration:**
- Framework Preset: Vite
- Build Command: `pnpm build`
- Output Directory: `dist`
- Install Command: `pnpm install`

---

### Option 2: Netlify

Netlify provides easy drag-and-drop deployment with continuous deployment from GitHub.

**Method A: GitHub Integration**

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `lante007/project-khaya-landing`
4. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
5. Click "Deploy site"

**Method B: Manual Deploy**

1. Build the project locally:
```bash
pnpm build
```

2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain: `projectkhaya.co.za`
- Follow DNS configuration instructions

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. **Install gh-pages**:
```bash
pnpm add -D gh-pages
```

2. **Update package.json**:
```json
{
  "scripts": {
    "predeploy": "pnpm build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://lante007.github.io/project-khaya-landing"
}
```

3. **Deploy**:
```bash
pnpm deploy
```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

**Note:** GitHub Pages is best for demos. For production, use Vercel or Netlify.

---

### Option 4: Manus Platform

Deploy directly from the Manus Management UI.

**Steps:**

1. Open the Manus Management UI
2. Click the **Publish** button in the header (top-right)
3. Your site will be deployed to: `https://[your-prefix].manus.space`
4. Configure custom domain in Settings → Domains

**Advantages:**
- One-click deployment
- Built-in analytics
- Easy rollback to previous checkpoints
- Integrated database and auth (if needed)

---

## 🌐 Custom Domain Configuration

### For projectkhaya.co.za

**DNS Records (Add these at your domain registrar):**

For **Vercel**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For **Netlify**:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

For **Manus**:
```
Type: CNAME
Name: @
Value: [provided by Manus]

Type: CNAME
Name: www
Value: [provided by Manus]
```

**SSL Certificate:** All platforms provide free automatic SSL certificates.

---

## 🔧 Environment Variables

If you add backend features later, configure these environment variables in your deployment platform:

```env
VITE_APP_TITLE=Project Khaya
VITE_APP_LOGO=/logo.png
# Add API keys, database URLs, etc. as needed
```

**Vercel:** Project Settings → Environment Variables
**Netlify:** Site settings → Environment variables
**Manus:** Management UI → Settings → Secrets

---

## 📊 Performance Optimization

The landing page is already optimized, but here are additional tips:

1. **Image Optimization**:
   - All images are already compressed
   - Consider using WebP format for even smaller sizes
   - Use CDN for image delivery (Cloudinary, Imgix)

2. **Caching**:
   - Vercel and Netlify handle this automatically
   - For custom servers, configure cache headers

3. **Analytics**:
   - Manus: Built-in analytics in Dashboard
   - Others: Add Google Analytics or Plausible

---

## 🧪 Testing After Deployment

1. **Responsive Design**:
   - Test on real devices (phone, tablet, desktop)
   - Use browser dev tools responsive mode
   - Check Chrome, Firefox, Safari, Edge

2. **Performance**:
   - Run Lighthouse audit (Chrome DevTools)
   - Target: 90+ score on all metrics
   - Check [PageSpeed Insights](https://pagespeed.web.dev/)

3. **Functionality**:
   - Click all CTAs (buttons should work or show toast)
   - Test navigation and scrolling
   - Verify images load correctly

4. **SEO**:
   - Check meta tags with [Meta Tags](https://metatags.io/)
   - Verify Open Graph preview
   - Test with [Google Rich Results](https://search.google.com/test/rich-results)

---

## 🔄 Continuous Deployment

**Automatic deployments on every push:**

1. **Vercel/Netlify**: Already configured via GitHub integration
2. **Manus**: Use `webdev_save_checkpoint` and click Publish

**Workflow:**
```
Local changes → Commit → Push to GitHub → Auto-deploy
```

---

## 🆘 Troubleshooting

### Build Fails

**Issue:** `pnpm install` fails
**Solution:** 
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Issue:** Build command not found
**Solution:** Ensure build command is `pnpm build` not `npm run build`

### Images Not Loading

**Issue:** Images return 404
**Solution:** 
- Check images are in `client/public/` directory
- Verify paths start with `/` (e.g., `/logo.png`)
- Clear browser cache

### Styling Issues

**Issue:** Styles not applied
**Solution:**
- Ensure Tailwind CSS is properly configured
- Check `index.css` is imported in `main.tsx`
- Rebuild: `pnpm build`

---

## 📞 Support

For deployment issues:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **Manus**: [help.manus.im](https://help.manus.im)

---

**Ready to deploy?** Choose your platform and follow the steps above. Vercel is recommended for the best performance and developer experience.
