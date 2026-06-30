// Post Manager - Handles dynamic loading and displaying of posts
class PostManager {
    constructor() {
        this.posts = [];
        this.init();
    }

    async init() {
        await this.loadPosts();
        this.displayPosts();
        this.setupEventListeners();
    }

    async loadPosts() {
        try {
            const response = await fetch('posts.json');
            if (!response.ok) {
                throw new Error('Failed to load posts');
            }
            const data = await response.json();
            // Sort posts by date (newest first)
            this.posts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } catch (error) {
            console.error('Error loading posts:', error);
            this.posts = [];
        }
    }

    displayPosts() {
        const container = document.getElementById('postsContainer');
        const featuredPost = document.getElementById('featuredPost');

        // Clear loading skeletons
        container.innerHTML = '';
        featuredPost.innerHTML = '';

        if (this.posts.length === 0) {
            container.innerHTML = '<p class="no-posts">No posts available yet. Check back soon!</p>';
            return;
        }

        // Display featured post (first/latest one)
        const featured = this.posts[0];
        featuredPost.innerHTML = this.createFeaturedPostHTML(featured);

        // Display remaining posts
        const otherPosts = this.posts.slice(1);
        if (otherPosts.length > 0) {
            container.innerHTML = otherPosts.map(post => this.createPostCardHTML(post)).join('');
        } else {
            container.innerHTML = '<p class="no-posts">More posts coming soon!</p>';
        }

        // Update last updated timestamp
        this.updateLastModified();
    }

    createFeaturedPostHTML(post) {
        const date = this.formatDate(post.date);
        const imageUrl = post.image || 'https://via.placeholder.com/800x400?text=Celebrity+Marriage';
        
        return `
            <div class="featured-image-wrapper">
                <img src="${this.escapeHtml(imageUrl)}" alt="${this.escapeHtml(post.title)}" loading="lazy">
            </div>
            <div class="featured-content">
                <span class="featured-badge">🔥 Featured</span>
                <h2>${this.escapeHtml(post.title)}</h2>
                <p>${this.escapeHtml(post.excerpt || post.content.substring(0, 150) + '...')}</p>
                <div class="featured-meta">
                    <span>📅 ${date}</span>
                    <span>✍️ ${this.escapeHtml(post.author || 'Admin')}</span>
                </div>
                <a href="#post-${post.id}" class="read-more-btn">Read Full Story →</a>
            </div>
        `;
    }

    createPostCardHTML(post) {
        const date = this.formatDate(post.date);
        const imageUrl = post.image || 'https://via.placeholder.com/400x200?text=Celebrity';
        const category = post.category || 'Celebrity';
        
        return `
            <article class="post-card" id="post-${post.id}">
                <div class="post-image">
                    <img src="${this.escapeHtml(imageUrl)}" alt="${this.escapeHtml(post.title)}" loading="lazy">
                </div>
                <div class="post-content">
                    <div class="post-date">${date}</div>
                    <h3>${this.escapeHtml(post.title)}</h3>
                    <p>${this.escapeHtml(post.excerpt || post.content.substring(0, 120) + '...')}</p>
                    <div class="post-footer">
                        <span class="post-category">${this.escapeHtml(category)}</span>
                        <a href="#post-${post.id}" class="post-link">Read More →</a>
                    </div>
                </div>
            </article>
        `;
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    updateLastModified() {
        if (this.posts.length > 0) {
            const lastUpdate = new Date(this.posts[0].date);
            document.lastModified = lastUpdate.toISOString();
        }
    }

    setupEventListeners() {
        // Newsletter form
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        }

        // Auto-refresh posts every 5 minutes
        setInterval(() => this.loadPosts().then(() => this.displayPosts()), 5 * 60 * 1000);
    }

    handleNewsletterSubmit(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (!email) return;

        // Show success message
        const form = e.target;
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = '✓ Subscribed!';
        button.style.background = '#4caf50';
        
        // In a real application, you would send this to a backend
        console.log('Newsletter subscription:', email);

        // Reset after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            form.reset();
        }, 3000);
    }
}

// SEO and Analytics
class SEOOptimizer {
    static init() {
        this.updateMetaTags();
        this.logPageView();
    }

    static updateMetaTags() {
        // Update og:url with current location
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', window.location.href);
        }

        // Add structured data for SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "NewsMediaSite",
            "name": "Is Married?",
            "url": "https://is-married.pages.dev/",
            "logo": "https://is-married.pages.dev/logo.png",
            "description": "Your Daily Source for Trending Celebrity Marriage News",
            "sameAs": [
                "https://twitter.com/ismarried",
                "https://instagram.com/ismarried",
                "https://facebook.com/ismarried"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }

    static logPageView() {
        // You can add analytics code here (Google Analytics, Mixpanel, etc.)
        console.log('Page loaded:', window.location.pathname);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize post manager
    const postManager = new PostManager();
    
    // Initialize SEO
    SEOOptimizer.init();

    // Add smooth scroll behavior for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Performance monitoring
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log('Page load time:', loadTime, 'ms');
            }, 0);
        });
    }
});

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            console.log('Service Worker not available');
        });
    });
}

// Handle visibility change for analytics
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User left page');
    } else {
        console.log('User returned to page');
    }
});
