import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  host: { '[class.dark]': 'darkMode()' },
  standalone: true,
  template: `
    <nav class="nav">
      <div class="nav-inner container">
        <a href="#" class="nav-logo">
          <span class="nav-logo-icon">&#x271E;</span>
          <span class="nav-logo-text">Holy Scriptures</span>
        </a>
        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#privacy">Privacy</a>
          <button
            class="theme-toggle"
            (click)="toggleDarkMode()"
            [attr.aria-label]="darkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            @if (darkMode()) {
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            } @else {
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            }
          </button>
        </div>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-icon">&#x271E;</div>
        <h1 class="hero-title">Holy Scriptures</h1>
        <p class="hero-subtitle">
          King James Bible with Apocrypha &mdash; A free, offline Bible study app for reading,
          studying, and sharing the Word of God.
        </p>
        <div class="hero-actions">
          <a href="#download" class="btn btn-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
          <a href="#features" class="btn btn-outline">Explore Features</a>
        </div>
        <div class="hero-badges">
          <span class="hero-badge">&#x2713; Fully Offline</span>
          <span class="hero-badge">&#x2713; No Data Collection</span>
          <span class="hero-badge">&#x2713; Android, Linux &amp; Windows</span>
        </div>
      </div>
    </section>

    <section id="features" class="section features">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Features</span>
          <h2 class="section-title">Everything you need for Bible study</h2>
          <p class="section-subtitle">
            A complete, private, and offline Bible study experience across all your devices.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">&#x1F4D6;</div>
            <h3>Read the Bible</h3>
            <p>
              Full King James Version including the Apocrypha. Continuous scroll, chapter
              navigation, and red-letter text for the words of Christ.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F516;</div>
            <h3>Bookmarks &amp; Notes</h3>
            <p>
              Bookmark verses with color coding, organize into folders, and attach personal notes.
              Everything stays on your device.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F4C5;</div>
            <h3>Daily Verses</h3>
            <p>
              Set daily verse reminders from selected books. Receive push notifications with a
              random verse at your chosen time.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F50D;</div>
            <h3>Full-Text Search</h3>
            <p>
              Search across the Old Testament, New Testament, Apocrypha, or all books at once.
              Instantly navigate to any verse.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F916;</div>
            <h3>AI Study Assistant</h3>
            <p>
              Chat with an AI assistant powered by Google Gemini. It searches relevant Bible verses
              to enrich every answer.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F4DA;</div>
            <h3>Scripture Indexes</h3>
            <p>
              Browse curated indexes of Bible characters, major events, parables, prayers, and
              topical references.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F50A;</div>
            <h3>Text-to-Speech</h3>
            <p>
              Listen to scripture read aloud with adjustable speech rate and pitch. Perfect for
              hands-free study.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F3A8;</div>
            <h3>Customizable</h3>
            <p>
              Choose from 6 fonts, adjust text size and spacing, switch between light and dark
              themes, and toggle red-letter text.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F512;</div>
            <h3>Private &amp; Offline</h3>
            <p>
              No accounts, no ads, no data collection. The entire Bible and all your notes are
              stored locally on your device.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="download" class="section download">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Get the App</span>
          <h2 class="section-title">Available for desktop &amp; mobile</h2>
          <p class="section-subtitle">
            Download Holy Scriptures for Android, Linux, or Windows. Completely free, no sign-up
            required.
          </p>
        </div>
        <div class="download-grid">
          <a href="#" class="download-card" (click)="showAlert('Android')">
            <div class="download-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2v4M6 2v4" />
                <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
                <path d="M8 12h.01M16 12h.01" />
              </svg>
            </div>
            <h3>Android</h3>
            <p>Available on Google Play</p>
          </a>
          <a href="#" class="download-card" (click)="showAlert('Linux')">
            <div class="download-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3>Linux</h3>
            <p>Available for desktop</p>
          </a>
          <a href="#" class="download-card" (click)="showAlert('Windows')">
            <div class="download-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 5.5L10.5 4.5L10.5 11.5L3 11.5Z" />
                <path d="M13.5 4.5L21 5.5L21 11.5L13.5 11.5Z" />
                <path d="M3 13.5L10.5 13.5L10.5 20.5L3 19.5Z" />
                <path d="M13.5 13.5L21 13.5L21 19.5L13.5 20.5Z" />
              </svg>
            </div>
            <h3>Windows</h3>
            <p>Available for desktop</p>
          </a>
        </div>
      </div>
    </section>

    <section id="privacy" class="section privacy">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Privacy</span>
          <h2 class="section-title">Your data stays with you</h2>
          <p class="section-subtitle">
            Holy Scriptures is designed with your privacy as a core principle.
          </p>
        </div>
        <div class="privacy-content">
          <div class="privacy-card">
            <h3>&#x2713; No Data Collection</h3>
            <p>
              We do not collect, store, or transmit any personal data, analytics, or crash reports.
            </p>
          </div>
          <div class="privacy-card">
            <h3>&#x2713; Fully Offline</h3>
            <p>
              The entire Bible and all your notes, bookmarks, and settings are stored locally on
              your device.
            </p>
          </div>
          <div class="privacy-card">
            <h3>&#x2713; No Accounts</h3>
            <p>No sign-up, no login, no account creation required. Just download and use.</p>
          </div>
          <div class="privacy-card">
            <h3>&#x2713; Minimal Ads</h3>
            <p>
              Non-intrusive ads help support development. Your Bible study experience remains the
              priority.
            </p>
          </div>
          <div class="privacy-card">
            <h3>&#x2713; Free Forever</h3>
            <p>
              No subscriptions, no in-app purchases, no hidden costs. The full Bible study
              experience is completely free.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">&#x271E; Holy Scriptures</span>
            <p>King James Bible with Apocrypha &mdash; Free Bible study for everyone.</p>
          </div>
          <div class="footer-links">
            <h4>Links</h4>
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a
              href="https://github.com/LiquidHive/app-privacy-policy/blob/cf3de077387ce84a95a203fa28d1e9d573fed62e/holy-scriptures-privacy.md"
              target="_blank"
              rel="noopener"
              >Privacy Policy</a
            >
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Holy Scriptures. All rights reserved.</p>
          <p>King James Version of the Bible is in the public domain.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      :host.dark {
        --bg: #0f0f1a;
        --bg-alt: #18182b;
        --text: #e8e6e3;
        --text-light: #9a9ab0;
        --white: #1e1e32;
        --shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 12px 48px rgba(0, 0, 0, 0.4);
      }

      :host.dark .nav-logo-text {
        color: var(--text);
      }

      :host.dark .section-title {
        color: var(--text);
      }

      :host.dark .feature-card h3,
      :host.dark .download-card h3,
      :host.dark .privacy-card h3 {
        color: var(--text);
      }

      .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: rgba(250, 248, 244, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(13, 27, 62, 0.06);
      }

      :host.dark .nav {
        background: rgba(15, 15, 26, 0.92);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }

      .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
      }

      .nav-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
      }

      .nav-logo-icon {
        font-size: 1.5rem;
        color: var(--accent);
      }

      .nav-logo-text {
        font-family: var(--font-display);
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--primary);
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 32px;
      }

      .nav-links a {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-light);
        transition: color 0.2s;
        text-decoration: none;
      }

      .nav-links a:hover {
        color: var(--accent);
      }

      .theme-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid rgba(13, 27, 62, 0.12);
        background: transparent;
        color: var(--text-light);
        cursor: pointer;
        transition: all 0.2s;
      }

      .theme-toggle:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      :host.dark .theme-toggle {
        border-color: rgba(255, 255, 255, 0.15);
      }

      :host.dark .theme-toggle:hover {
        border-color: var(--accent);
      }

      .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 120px 0 80px;
        overflow: hidden;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          var(--primary) 0%,
          var(--primary-light) 50%,
          #162a5e 100%
        );
        z-index: 0;
      }

      .hero-bg::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 50%);
      }

      .hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .hero-icon {
        font-size: 4rem;
        color: var(--accent);
        margin-bottom: 24px;
        line-height: 1;
      }

      .hero-title {
        font-family: var(--font-display);
        font-size: 4rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 20px;
        line-height: 1.15;
        letter-spacing: -0.5px;
      }

      .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.75);
        max-width: 640px;
        margin-bottom: 40px;
        line-height: 1.7;
      }

      .hero-actions {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 48px;
      }

      .hero-badges {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero-badge {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 500;
      }

      .section-header {
        text-align: center;
        margin-bottom: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .features {
        background: var(--bg);
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
        max-width: var(--max-width);
        margin: 0 auto;
      }

      .feature-card {
        background: var(--white);
        border-radius: var(--radius);
        padding: 36px 32px;
        box-shadow: var(--shadow);
        transition: all 0.3s;
        border: 1px solid rgba(13, 27, 62, 0.04);
      }

      :host.dark .feature-card {
        border-color: rgba(255, 255, 255, 0.04);
      }

      .feature-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-lg);
      }

      .feature-icon {
        font-size: 2.2rem;
        margin-bottom: 20px;
        line-height: 1;
      }

      .feature-card h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 12px;
      }

      .feature-card p {
        font-size: 0.95rem;
        color: var(--text-light);
        line-height: 1.7;
      }

      .download {
        background: var(--bg-alt);
      }

      .download-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        max-width: 900px;
        margin: 0 auto;
      }

      .download-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: var(--white);
        border-radius: var(--radius);
        padding: 36px 24px;
        box-shadow: var(--shadow);
        transition: all 0.3s;
        cursor: pointer;
        border: 1px solid rgba(13, 27, 62, 0.04);
        text-decoration: none;
        color: inherit;
      }

      :host.dark .download-card {
        border-color: rgba(255, 255, 255, 0.04);
      }

      .download-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-lg);
      }

      .download-icon {
        color: var(--accent);
        margin-bottom: 16px;
      }

      .download-card h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 8px;
      }

      .download-card p {
        font-size: 0.9rem;
        color: var(--text-light);
      }

      .privacy {
        background: var(--bg);
      }

      .privacy-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        max-width: var(--max-width);
        margin: 0 auto;
      }

      .privacy-card {
        background: var(--white);
        border-radius: var(--radius);
        padding: 28px 24px;
        box-shadow: var(--shadow);
        border-left: 4px solid var(--accent);
      }

      .privacy-card h3 {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 10px;
      }

      .privacy-card p {
        font-size: 0.92rem;
        color: var(--text-light);
        line-height: 1.6;
      }

      .footer {
        background: var(--primary);
        color: rgba(255, 255, 255, 0.7);
        padding: 64px 0 32px;
      }

      :host.dark .footer {
        background: #141428;
      }

      .footer-top {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 48px;
        margin-bottom: 48px;
      }

      .footer-logo {
        font-family: var(--font-display);
        font-size: 1.4rem;
        font-weight: 700;
        color: #ffffff;
        display: block;
        margin-bottom: 12px;
      }

      .footer-brand p {
        font-size: 0.9rem;
        line-height: 1.7;
      }

      .footer-links h4 {
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }

      .footer-links a {
        display: block;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 10px;
        transition: color 0.2s;
        text-decoration: none;
      }

      .footer-links a:hover {
        color: var(--accent);
      }

      .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 24px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 0.85rem;
      }

      @media (max-width: 968px) {
        .features-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .download-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .privacy-content {
          grid-template-columns: repeat(2, 1fr);
        }
        .footer-top {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 640px) {
        .hero-title {
          font-size: 2.5rem;
        }
        .hero-subtitle {
          font-size: 1rem;
        }
        .features-grid {
          grid-template-columns: 1fr;
        }
        .download-grid {
          grid-template-columns: 1fr;
        }
        .privacy-content {
          grid-template-columns: 1fr;
        }
        .footer-top {
          grid-template-columns: 1fr;
        }
        .nav-links {
          display: none;
        }
        .footer-bottom {
          flex-direction: column;
          text-align: center;
        }
      }
    `,
  ],
})
export class App {
  protected readonly darkMode = signal(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark',
  );

  toggleDarkMode() {
    const next = !this.darkMode();
    this.darkMode.set(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  showAlert(platform: string) {
    alert(
      `Holy Scriptures for ${platform} is coming soon! Check the GitHub repository for updates.`,
    );
  }
}
