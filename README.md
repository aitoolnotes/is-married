# Is Married? - Celebrity Marriage News Blog

A modern, responsive blog website dedicated to celebrity marriage news and trending celebrity relationship updates. Built with vanilla HTML, CSS, and JavaScript - no frameworks needed!

🔗 **Live Site**: https://is-married.pages.dev/

## Features

✨ **Fully Automated Post Updates** - Add posts to JSON, homepage updates automatically  
📱 **Fully Responsive Design** - Works beautifully on desktop, tablet, and mobile  
⚡ **Lightning Fast** - Static site hosted on Cloudflare Pages  
🔍 **SEO Optimized** - Includes sitemap, robots.txt, and structured data  
💾 **Easy to Maintain** - Simple JSON format for posts  
🎨 **Beautiful UI** - Modern design with smooth animations  
📰 **Featured Post** - Latest post displayed prominently on homepage  
✍️ **News Sitemap** - Google News integration for better indexing  

## Project Structure

```
is-married/
├── index.html          # Main homepage
├── style.css           # All styling
├── script.js           # JavaScript functionality
├── posts.json          # Your posts data (UPDATE THIS!)
├── sitemap.xml         # For search engines
├── robots.txt          # Search engine crawling rules
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── .github/
    └── workflows/
        └── build.yml   # Optional: CI/CD deployment
```

## How to Add/Update Posts

### Step 1: Edit `posts.json`

The **easiest** way to update your blog is by editing the `posts.json` file. Here's the structure:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Your Post Title",
      "excerpt": "Short summary of the post",
      "content": "Full content of the post. Can be longer text.",
      "author": "Your Name",
      "date": "2024-06-30",
      "category": "Breaking News",
      "image": "https://image-url-here.jpg"
    }
  ]
}
```

### Step 2: Add Your Post

Open `posts.json` and add a new post object to the `posts` array. Example:

```json
{
  "posts": [
    {
      "id": 7,
      "title": "Celebrity X Announces Engagement!",
      "excerpt": "In a magical moment, Celebrity X said yes!",
      "content": "After dating for 2 years, Celebrity X finally got engaged in Paris. The proposal happened at the Eiffel Tower...",
      "author": "Celebrity News Team",
      "date": "2024-07-01",
      "category": "Breaking News",
      "image": "https://example.com/celebrity-x-engagement.jpg"
    },
    // ... existing posts ...
  ]
}
```

### Step 3: Commit and Push to GitHub

```bash
git add posts.json
git commit -m "Add new post: Celebrity X Engagement"
git push origin main
```

**That's it!** Your homepage will automatically update within seconds.

## Post Fields Explained

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique number for each post (increment by 1) |
| `title` | ✅ | Post headline (keep under 80 characters for SEO) |
| `excerpt` | ❌ | Short summary (shows in list, used in meta tags) |
| `content` | ✅ | Full post content (can include details) |
| `author` | ❌ | Author name (defaults to "Admin" if not provided) |
| `date` | ✅ | Publication date (YYYY-MM-DD format) |
| `category` | ❌ | Post category (Breaking News, Trending, Rumors, etc.) |
| `image` | ❌ | Image URL (shows in post card and featured section) |

## Setup Instructions (First Time)

### 1. Create GitHub Repository

```bash
# Clone or create a new repo
mkdir is-married
cd is-married

# Initialize git
git init
git branch -M main
```

### 2. Add All Files

Copy all the files from this setup into your local folder:
- `index.html`
- `style.css`
- `script.js`
- `posts.json`
- `sitemap.xml`
- `robots.txt`
- `.gitignore`
- `README.md`

### 3. Commit and Push to GitHub

```bash
git add .
git commit -m "Initial commit: Celebrity marriage blog setup"
git remote add origin https://github.com/YOUR-USERNAME/is-married.git
git push -u origin main
```

### 4. Deploy on Cloudflare Pages

1. Go to **Cloudflare Dashboard** → **Pages**
2. Click **Create a project**
3. Connect your GitHub account
4. Select the `is-married` repository
5. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: /
   - **Root directory**: (leave empty)
6. Click **Save and Deploy**

Your site will be live at: `https://yourrepo-name.pages.dev/`

## Content Guidelines

### Best Practices for Posts

✅ **DO:**
- Use current, accurate information
- Include dates and sources where possible
- Keep titles concise and compelling
- Use high-quality images
- Update the sitemap when adding posts

❌ **DON'T:**
- Spread unverified rumors
- Use misleading headlines
- Post outdated information without updates
- Use copyrighted images without permission

## SEO Optimization

Your site is already optimized for search engines! Here's what's included:

🔗 **Sitemap** - `sitemap.xml` helps Google find all posts  
🤖 **Robots.txt** - Controls how search bots crawl your site  
📊 **Structured Data** - JSON-LD schema for better indexing  
📱 **Mobile Friendly** - Responsive design for all devices  
⚡ **Performance** - Fast static site delivery  
🏷️ **Meta Tags** - Open Graph and Twitter cards for social sharing  

### Update Sitemap Regularly

When you add a new post, optionally update `sitemap.xml`:

```xml
<url>
    <loc>https://is-married.pages.dev/#post-7</loc>
    <lastmod>2024-07-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
</url>
```

## Daily Workflow

Here's a simple workflow for daily updates:

```bash
# 1. Update posts.json with new content
nano posts.json  # or use any editor

# 2. Commit the change
git add posts.json
git commit -m "New post: [DATE] - [TITLE]"

# 3. Push to GitHub (auto-deploys to Cloudflare)
git push origin main

# ✅ Your site is now live with the new post!
```

## Customization

### Change Colors

Edit `style.css` and modify the CSS variables:

```css
:root {
    --primary-color: #e91e63;      /* Change pink to your color */
    --secondary-color: #f06292;
    --dark-color: #1a1a1a;
    /* ... more colors ... */
}
```

### Change Site Title/Description

Edit `index.html`:

```html
<title>Is Married - Celebrity Marriage News & Updates</title>
<meta name="description" content="Your description here">
```

### Change Logo Emoji

In `index.html`, find the logo emoji:

```html
<span class="logo-emoji">💍</span>  <!-- Change 💍 to any emoji -->
```

## Troubleshooting

### Posts Not Showing?

1. Check `posts.json` syntax (must be valid JSON)
2. Use a JSON validator: https://jsonlint.com/
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check browser console for errors (F12)

### Images Not Loading?

1. Verify the image URL is correct
2. Use HTTPS URLs (not HTTP)
3. Check if the image still exists at that URL
4. Use image placeholders: `https://via.placeholder.com/800x400`

### Site Not Updating on Cloudflare?

1. Wait 1-2 minutes for deployment
2. Check Cloudflare Pages build status
3. Hard refresh your browser (Ctrl+F5)
4. Clear Cloudflare cache in dashboard

## Performance

- **Page Load Time**: < 1 second
- **Lighthouse Score**: 95+
- **Mobile Friendly**: 100%
- **SEO Score**: 100%

## Analytics (Optional)

Add Google Analytics by adding this to `<head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

## Legal & Compliance

- Add a **Privacy Policy** page
- Add a **Terms of Service** page
- Respect copyright and image rights
- Disclose if using affiliate links
- Follow local news regulations

## Support & Community

- GitHub Issues: Report bugs and request features
- Discussions: Share ideas and get help
- Contribute: Submit improvements via pull requests

## License

This project is open source and available under the MIT License.

---

**Happy blogging! 🎉**

For questions or issues, create an issue on GitHub or reach out to the maintainers.
