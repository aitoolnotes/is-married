# Adding Posts - Complete Guide

## 🎯 Overview

Your blog updates automatically when you edit `posts.json`. This is the **only file** you need to change to add new posts.

## 📝 Method 1: GitHub Web Interface (Easiest - No Tech Skills Needed)

Perfect if you don't want to use command line!

### Step 1: Go to Your Repository

1. Visit `https://github.com/YOUR-USERNAME/is-married`
2. You should see your files listed

### Step 2: Open posts.json

1. Click on `posts.json` file
2. Click the ✏️ **Edit** button (pencil icon)

### Step 3: Add Your Post

You'll see the current posts. **Add your new post at the TOP of the `posts` array**.

Here's the complete format:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Your New Post Title Here",
      "excerpt": "A brief summary that appears in the list",
      "content": "The full content of your post with all details and story",
      "author": "Your Name or Team",
      "date": "2024-06-30",
      "category": "Breaking News",
      "image": "https://example.com/image.jpg"
    },
    // ... rest of posts ...
  ]
}
```

### Step 4: Commit Your Changes

1. Scroll down to "Commit changes"
2. Add a message like: `"Add post: Celebrity X Gets Married"`
3. Click **Commit changes**

✅ **Done!** Your site updates within 30 seconds!

---

## 📋 Field-by-Field Guide

### `id` (Required)
- Unique number for each post
- Start from 1 and increment
- Example: `"id": 7`
- Used to link to specific posts

### `title` (Required)
- Main headline of your post
- Keep **under 80 characters** for SEO
- Should be compelling and clear
- Examples:
  - ✅ "Bollywood Star Gets Married in Secret Ceremony"
  - ❌ "Celebrity News Update" (too vague)

### `excerpt` (Recommended)
- Brief summary (1-2 sentences)
- Appears in post cards and search results
- 150 characters or less
- Example: "After 3 years of dating, Actor X said 'I do' in a surprise Mumbai wedding."

### `content` (Required)
- Full post content
- Can be as long as you want
- Write naturally
- Can include details like:
  - Where they got married
  - Who attended
  - What the bride wore
  - Celebrity reactions
  - Timeline of their relationship

### `author` (Optional)
- Your name or pen name
- If not included, defaults to "Admin"
- Example: `"author": "Celebrity News Team"`

### `date` (Required)
- Publication date
- **MUST be in this format**: `YYYY-MM-DD`
- Examples:
  - ✅ `"2024-06-30"`
  - ❌ `"June 30, 2024"` (wrong format!)
  - ❌ `"30-06-2024"` (wrong format!)
- Newest posts should be at the top

### `category` (Optional)
- Topic category
- Suggested categories:
  - "Breaking News" (latest updates)
  - "Trending" (popular stories)
  - "Interviews" (celebrity interviews)
  - "Celebrity" (general news)
  - "Rumors" (unconfirmed news)
  - "Wedding" (wedding-specific)
  - "Engagement" (engagement announcements)

### `image` (Optional)
- Featured image URL
- Should be an HTTPS URL (not HTTP)
- Recommended size: 800x400 pixels
- If not provided, shows a placeholder
- Free image sources:
  - Unsplash.com (wedding/couple photos)
  - Pixabay.com (free stock images)
  - Pexels.com (free celebrity-style images)

---

## 💡 Example: Complete Post

Here's a realistic example you can copy and modify:

```json
{
  "id": 1,
  "title": "Bollywood's Golden Couple Gets Married in Dream Destination Wedding",
  "excerpt": "Actor X and Producer Y tied the knot in a stunning 3-day celebration in Jaipur with 500+ guests",
  "content": "In what can only be described as the wedding of the year, Actor X and Producer Y got married in a grand celebration in Jaipur's iconic Palace. The couple, who met on the sets of a film 5 years ago, exchanged vows in front of Bollywood elite and close family members. The bride wore a stunning red lehenga by designer ABC, while the groom looked dapper in a cream sherwani. The wedding festivities included a grand sangeet ceremony with performances by renowned artists, a lavish mehendi with Bollywood celebrities, and an unforgettable reception. The couple will honeymoon in Europe before returning to Mumbai. Congratulations to the happy couple!",
  "author": "Entertainment Correspondent",
  "date": "2024-07-01",
  "category": "Breaking News",
  "image": "https://images.unsplash.com/photo-1519227432042-ba2b408bc558?w=800&h=400&fit=crop"
}
```

---

## 🖼️ Finding Images

### Where to Get Free Images:

1. **Unsplash** (unsplash.com)
   - Search: "wedding couple" or "bride groom"
   - Right-click image → Copy image link
   - Format: `https://images.unsplash.com/photo-...`

2. **Pixabay** (pixabay.com)
   - Search for wedding/celebrity style images
   - Click download and copy link

3. **Pexels** (pexels.com)
   - Similar to Unsplash
   - No credit required

4. **Placeholder Images**:
   - Temp image: `https://via.placeholder.com/800x400?text=Celebrity+Marriage`
   - Perfect for testing!

### Image URL Format:
```
✅ Correct: https://images.unsplash.com/photo-123456?w=800
❌ Wrong: http://example.com/image.jpg (not HTTPS)
❌ Wrong: /images/photo.jpg (relative path)
```

---

## 🔧 Common Scenarios

### Scenario 1: Breaking News (Happened Today)

```json
{
  "id": 1,
  "title": "Celebrity Announces Surprise Marriage on Social Media",
  "excerpt": "Breaking: Actor reveals they got married yesterday in a surprise announcement",
  "content": "In a shocking social media post, Celebrity X announced they got married yesterday in an intimate ceremony...",
  "author": "Breaking News Team",
  "date": "2024-07-01",
  "category": "Breaking News",
  "image": "https://images.unsplash.com/photo-1519227432042-ba2b408bc558?w=800&h=400&fit=crop"
}
```

### Scenario 2: Rumor/Speculation

```json
{
  "id": 2,
  "title": "Celebrity A and Celebrity B's Marriage Rumors Heat Up",
  "excerpt": "Fans speculate about possible engagement after couple spotted together",
  "content": "Social media users are buzzing after Celebrity A and B were spotted together at a private event...",
  "author": "Celebrity Watch",
  "date": "2024-06-30",
  "category": "Rumors",
  "image": "https://via.placeholder.com/800x400?text=Celebrity+Rumors"
}
```

### Scenario 3: Interview or Feature

```json
{
  "id": 3,
  "title": "Newlywed Celebrity Shares Marriage Story in Exclusive Interview",
  "excerpt": "Celebrity opens up about their proposal, wedding planning, and life after marriage",
  "content": "In an exclusive interview with us, Celebrity H shared intimate details about their journey...",
  "author": "Magazine Editor",
  "date": "2024-06-29",
  "category": "Interviews",
  "image": "https://images.unsplash.com/photo-1516881591844-ab94dbc2c576?w=800&h=400&fit=crop"
}
```

---

## ✅ Checklist Before Posting

Before you save your post, verify:

- [ ] `id` is unique and incremented
- [ ] `title` is clear and under 80 characters
- [ ] `date` is in YYYY-MM-DD format
- [ ] All required fields are filled (id, title, content, date)
- [ ] JSON syntax is correct (valid JSON)
- [ ] Image URL starts with https://
- [ ] No typos in field names

### Check JSON Validity

Unsure if your JSON is valid? Use this tool:
- **JSONLint**: jsonlint.com - paste your JSON and it will show errors

---

## 🚀 Publishing Steps (Quick Reference)

1. Go to GitHub.com → your repo → posts.json
2. Click ✏️ to edit
3. Add new post to TOP of array
4. Scroll down → Commit changes
5. Wait 30 seconds
6. Refresh your site → See new post!

---

## 📊 Managing Multiple Posts

### Organize by Date

Always put newest posts at the TOP of the array:

```json
{
  "posts": [
    { "id": 5, "date": "2024-07-03", ... },  // Newest
    { "id": 4, "date": "2024-07-02", ... },
    { "id": 3, "date": "2024-07-01", ... },
    { "id": 2, "date": "2024-06-30", ... },
    { "id": 1, "date": "2024-06-29", ... }   // Oldest
  ]
}
```

### Change ID Numbers

If you rearrange posts, you DON'T need to change IDs. The site sorts by date automatically. Just keep IDs unique.

---

## 🎨 Writing Tips

### Compelling Titles

✅ **Good**:
- "Celebrity A and Celebrity B Get Married in Bali Wedding"
- "Breaking: Hollywood Power Couple Announces Surprise Marriage"
- "Royal Celebrity Gets Married in Intimate Ceremony"

❌ **Bad**:
- "News Update"
- "Celebrity Marriage"
- "Breaking"

### Engaging Content

✅ Include:
- When and where they got married
- Who attended
- Fashion details (what bride/groom wore)
- Personal details about the couple
- Fan reactions
- Timeline of their relationship

❌ Avoid:
- Making up false information
- Spreading unverified rumors as fact
- Copying entire articles (use your own words)
- Offensive comments

---

## 🔄 Updating Existing Posts

If you need to edit a post:

1. Find the post in posts.json
2. Click ✏️ to edit
3. Modify the fields
4. Commit changes
5. Site updates automatically

---

## 🗑️ Removing Old Posts

To delete a post, just remove its entire object:

```json
{
  "posts": [
    { "id": 1, ... },  // Keep this
    // { "id": 2, ... },  ← Delete by removing this line
    { "id": 3, ... }   // Keep this
  ]
}
```

---

## 📱 Formatting Content

Your `content` field is plain text, but here are tips:

### For Line Breaks
Use natural paragraph breaks in your content.

### For Emphasis
- Use **asterisks for emphasis** in your text
- You can use emojis: 💍 👰 🤵 ✨

### Example Formatted Content
```
"content": "In a magical moment, Celebrity X proposed with a stunning diamond ring 💍. The proposal happened at sunset on a private beach in Maldives. Celebrity Y said YES! ✨ The couple celebrated with close family members. They plan to get married next year. More details coming soon!"
```

---

## 🆘 Troubleshooting

### "JSON Syntax Error"
- Check for missing commas after each field
- Check for matching quotes and braces
- Use jsonlint.com to validate

### "My post isn't showing"
- Check ID is unique
- Check date format (YYYY-MM-DD)
- Refresh browser (Ctrl+F5)
- Wait 1 minute for deployment

### "Image not showing"
- Use full HTTPS URL
- Check URL works in browser
- Use placeholder if unsure

---

**Happy posting! You're doing great! 🎉**

For more help, check README.md or QUICKSTART.md
