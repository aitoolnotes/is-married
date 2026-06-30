const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const fm = require('front-matter');

// Directories
const postsDir = path.join(__dirname, 'posts');
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');
const distPostsDir = path.join(distDir, 'posts');

// Ensure dist directories exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}
if (!fs.existsSync(distPostsDir)) {
    fs.mkdirSync(distPostsDir);
}

// Read templates
const indexTemplate = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf-8');
const postTemplate = fs.readFileSync(path.join(srcDir, 'post.html'), 'utf-8');

// Copy CSS
fs.copyFileSync(path.join(srcDir, 'style.css'), path.join(distDir, 'style.css'));

// Read all markdown files from posts directory
const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

let postsData = [];

files.forEach(file => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parse front matter and markdown
    const parsed = fm(fileContent);
    const htmlContent = marked.parse(parsed.body);
    
    const slug = file.replace('.md', '');
    const title = parsed.attributes.title || 'Untitled Post';
    
    // Handle date formatting
    let dateStr = 'No Date';
    if (parsed.attributes.date) {
         // If date is a Date object (parsed by js-yaml used in front-matter)
         if (parsed.attributes.date instanceof Date) {
             dateStr = parsed.attributes.date.toISOString().split('T')[0];
         } else {
             dateStr = parsed.attributes.date;
         }
    }

    // Generate individual post HTML
    let postHtml = postTemplate
        .replace(/{{TITLE}}/g, title)
        .replace(/{{DATE}}/g, dateStr)
        .replace(/{{CONTENT}}/g, htmlContent);

    const postOutputPath = path.join(distPostsDir, `${slug}.html`);
    fs.writeFileSync(postOutputPath, postHtml);

    // Store data for index page
    postsData.push({
        title,
        date: dateStr,
        slug
    });
});

// Sort posts by date descending
postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate post list for index.html
let postsListHtml = postsData.map(post => `
    <a href="posts/${post.slug}.html" class="post-card">
        <h2>${post.title}</h2>
        <p class="post-date">${post.date}</p>
    </a>
`).join('\n');

if (postsData.length === 0) {
    postsListHtml = '<p>No posts yet. Add some .md files to the posts/ folder!</p>';
}

// Generate index.html
const indexHtml = indexTemplate.replace('{{POSTS}}', postsListHtml);
fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

console.log(`Successfully built ${postsData.length} posts!`);
