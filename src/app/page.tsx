'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function IdeolabzHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '', service: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: '🎬',
      title: 'AI Video Ads',
      desc: 'Cutting-edge AI-generated video advertisements that captivate your audience and drive conversions at scale.',
      features: ['Script writing', 'AI voiceover', 'Visual effects', 'Platform optimization'],
    },
    {
      icon: '📱',
      title: 'Social Media Posts',
      desc: 'Scroll-stopping social media content crafted with strategic intent to build brand awareness and engagement.',
      features: ['Content calendar', 'Graphic design', 'Copywriting', 'Hashtag strategy'],
    },
    {
      icon: '🎯',
      title: 'Meta Ad Campaigns',
      desc: 'Data-driven Facebook & Instagram ad campaigns optimized for high CPM audiences and maximum ROI.',
      features: ['Audience targeting', 'A/B testing', 'Retargeting', 'Performance tracking'],
    },
    {
      icon: '📊',
      title: 'Account Management',
      desc: 'Full-service social media account management so you can focus on your business while we grow your presence.',
      features: ['Daily posting', 'Community management', 'Analytics reports', 'Growth strategy'],
    },
    {
      icon: '🎥',
      title: 'Video Production',
      desc: 'Professional video production from concept to delivery, tailored for both organic and paid distribution.',
      features: ['Storyboarding', 'Editing & color', 'Motion graphics', 'Multi-format export'],
    },
  ];

  const testimonials = [
    {
      name: 'Kasun Perera',
      role: 'E-commerce Founder',
      text: "Ideolabz transformed our social media presence. Our engagement tripled and our Meta ads now consistently achieve exceptional ROAS.",
      avatar: 'KP',
    },
    {
      name: 'Dilani Fernando',
      role: 'Restaurant Owner',
      text: "The AI video ads they created for us went viral locally. We saw a 200% increase in footfall within a month of launching the campaign.",
      avatar: 'DF',
    },
    {
      name: 'Rajan Wickramasinghe',
      role: 'Tech Startup CEO',
      text: "Professional, creative, and results-driven. Ideolabz is our go-to partner for all things digital marketing.",
      avatar: 'RW',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => setFormStatus('sent'), 2000);
  };

  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span className={styles.logoText}>Ideolabz</span>
          </Link>
          <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <Link href="/techbaselk" className={styles.navTblLink} onClick={() => setMenuOpen(false)}>
              Tech Base LK →
            </Link>
          </div>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            <span className={menuOpen ? styles.menuBarOpen : styles.menuBar}></span>
            <span className={menuOpen ? styles.menuBarOpen : styles.menuBar}></span>
            <span className={menuOpen ? styles.menuBarOpen : styles.menuBar}></span>
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBlobA}></div>
          <div className={styles.heroBlobB}></div>
          <div className={styles.heroBlobC}></div>
          <div className={styles.heroGrid}></div>
        </div>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroBadge}>
            <span>🚀</span> Sri Lanka&apos;s Premier Creative Digital Agency
          </div>
          <h1 className={styles.heroTitle}>
            We Build Brands That<br />
            <span className={styles.heroGradientText}>Command Attention</span>
          </h1>
          <p className={styles.heroDesc}>
            From AI-powered video ads to full-scale Meta campaigns — Ideolabz turns your vision into scroll-stopping content that converts.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.ctaPrimary} id="hero-cta-primary">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#portfolio" className={styles.ctaSecondary} id="hero-cta-secondary">
              View Our Work
            </a>
          </div>
          <div className={styles.heroStats}>
            {[['200+', 'Projects Delivered'], ['50+', 'Happy Clients'], ['3x', 'Avg. ROAS'], ['24/7', 'Support']].map(([num, label]) => (
              <div key={label} className={styles.statItem}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>What We Do</div>
            <h2 className={styles.sectionTitle}>Services That Deliver Results</h2>
            <p className={styles.sectionDesc}>End-to-end digital marketing solutions powered by creativity and data</p>
          </div>
          <div className={styles.servicesLayout}>
            <div className={styles.servicesNav}>
              {services.map((s, i) => (
                <button
                  key={i}
                  id={`service-tab-${i}`}
                  className={`${styles.serviceTab} ${activeService === i ? styles.serviceTabActive : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className={styles.serviceTabIcon}>{s.icon}</span>
                  <span className={styles.serviceTabTitle}>{s.title}</span>
                </button>
              ))}
            </div>
            <div className={styles.serviceDetail}>
              <div className={styles.serviceDetailIcon}>{services[activeService].icon}</div>
              <h3 className={styles.serviceDetailTitle}>{services[activeService].title}</h3>
              <p className={styles.serviceDetailDesc}>{services[activeService].desc}</p>
              <ul className={styles.serviceFeatures}>
                {services[activeService].features.map((f, i) => (
                  <li key={i} className={styles.serviceFeatureItem}>
                    <span className={styles.featureCheck}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.serviceDetailCta}>Get This Service →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <div className={styles.sectionBadge}>Our Story</div>
              <h2 className={styles.sectionTitle}>Born from Passion,<br />Built for Impact</h2>
              <p className={styles.aboutText}>
                Ideolabz was founded with a clear mission: to make world-class digital marketing accessible to businesses in Sri Lanka and beyond. We combine the power of AI with human creativity to produce content that not only looks stunning but delivers measurable results.
              </p>
              <p className={styles.aboutText}>
                Our founder brings deep expertise in AI video creation, Meta advertising, and social media growth — skills sharpened through years of running Tech Base LK, one of Sri Lanka&apos;s fastest-growing tech education communities.
              </p>
              <div className={styles.aboutHighlights}>
                {[['🎯', 'Results-Driven', 'Every campaign is built around your KPIs'],
                  ['🤖', 'AI-Powered', 'Leveraging cutting-edge AI tools for superior output'],
                  ['🌍', 'Global Ready', 'Strategies that work for local and international audiences']
                ].map(([icon, title, desc]) => (
                  <div key={title} className={styles.highlightCard}>
                    <span className={styles.highlightIcon}>{icon}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardInner}>
                  <div className={styles.aboutCardGlowRing}></div>
                  <div className={styles.aboutCardContent}>
                    <div className={styles.aboutLogoMark}>⚡</div>
                    <h3>Ideolabz</h3>
                    <p>Where Ideas Meet Excellence</p>
                    <div className={styles.aboutCardStats}>
                      <div><strong>2024</strong><span>Founded</span></div>
                      <div><strong>LK</strong><span>Based</span></div>
                      <div><strong>AI+</strong><span>Powered</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className={styles.portfolio}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Our Work</div>
            <h2 className={styles.sectionTitle}>Projects We&apos;re Proud Of</h2>
            <p className={styles.sectionDesc}>A snapshot of the impact we&apos;ve created for our clients</p>
          </div>
          <div className={styles.portfolioGrid}>
            {[
              { tag: 'AI Video Ad', title: 'E-commerce Flash Sale Campaign', result: '+340% ROAS', color: '#5c21b7' },
              { tag: 'Meta Ads', title: 'Restaurant Chain Launch', result: '+200% Footfall', color: '#7c3aed' },
              { tag: 'Social Media', title: 'Tech Startup Brand Build', result: '10K followers in 30 days', color: '#9f67e4' },
              { tag: 'Video Production', title: 'SaaS Product Explainer', result: '85% watch rate', color: '#6d28d9' },
              { tag: 'Account Management', title: 'Fashion Brand Growth', result: '5x Engagement', color: '#4c1d95' },
              { tag: 'AI Video Ad', title: 'Real Estate Lead Generation', result: '120+ qualified leads', color: '#7c3aed' },
            ].map((item, i) => (
              <div key={i} className={styles.portfolioCard} id={`portfolio-card-${i}`}>
                <div className={styles.portfolioCardBg} style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)` }}></div>
                <div className={styles.portfolioCardContent}>
                  <span className={styles.portfolioTag}>{item.tag}</span>
                  <h3 className={styles.portfolioTitle}>{item.title}</h3>
                  <div className={styles.portfolioResult}>
                    <span className={styles.portfolioResultNum}>{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Investment</div>
            <h2 className={styles.sectionTitle}>Transparent Pricing</h2>
            <p className={styles.sectionDesc}>No hidden fees. Choose the plan that fits your goals.</p>
          </div>
          <div className={styles.pricingGrid}>
            {[
              {
                name: 'Starter',
                price: 'LKR 25,000',
                period: '/month',
                desc: 'Perfect for small businesses ready to grow',
                features: ['5 Social Media Posts', '1 AI Video Ad', 'Basic Analytics', 'Email Support'],
                popular: false,
              },
              {
                name: 'Growth',
                price: 'LKR 65,000',
                period: '/month',
                desc: 'For brands serious about scaling fast',
                features: ['15 Social Media Posts', '3 AI Video Ads', 'Meta Ad Campaign', 'Advanced Analytics', 'Weekly Strategy Call', 'Priority Support'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                desc: 'Full-scale digital marketing for ambitious brands',
                features: ['Unlimited Content', 'Full Account Management', 'Multiple Ad Campaigns', 'Custom AI Videos', 'Dedicated Manager', '24/7 Support'],
                popular: false,
              },
            ].map((plan, i) => (
              <div key={i} className={`${styles.pricingCard} ${plan.popular ? styles.pricingCardPopular : ''}`} id={`pricing-plan-${plan.name.toLowerCase()}`}>
                {plan.popular && <div className={styles.pricingPopularBadge}>Most Popular</div>}
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingName}>{plan.name}</h3>
                  <div className={styles.pricingPrice}>
                    <span className={styles.pricingAmount}>{plan.price}</span>
                    <span className={styles.pricingPeriod}>{plan.period}</span>
                  </div>
                  <p className={styles.pricingDesc}>{plan.desc}</p>
                </div>
                <ul className={styles.pricingFeatures}>
                  {plan.features.map((f, j) => (
                    <li key={j}><span>✓</span> {f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`${styles.pricingCta} ${plan.popular ? styles.pricingCtaPopular : ''}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Client Stories</div>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>&ldquo;</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.sectionBadge}>Get In Touch</div>
              <h2 className={styles.sectionTitle}>Let&apos;s Build Something<br />Incredible Together</h2>
              <p className={styles.contactDesc}>
                Ready to transform your digital presence? Reach out and let&apos;s discuss how Ideolabz can elevate your brand.
              </p>
              <div className={styles.contactMethods}>
                <a href="https://wa.me/94000000000" className={styles.contactMethod} id="contact-whatsapp" target="_blank" rel="noopener noreferrer">
                  <span className={styles.contactMethodIcon}>📱</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>+94 XX XXX XXXX</span>
                  </div>
                </a>
                <a href="mailto:hello@ideolabz.com" className={styles.contactMethod} id="contact-email">
                  <span className={styles.contactMethodIcon}>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <span>hello@ideolabz.com</span>
                  </div>
                </a>
              </div>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit} id="contact-form">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-whatsapp">WhatsApp Number</label>
                <input
                  id="contact-whatsapp"
                  type="tel"
                  placeholder="+94 XX XXX XXXX"
                  value={formData.whatsapp}
                  onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-service">Service Interested In</label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service...</option>
                  <option value="ai-video-ads">AI Video Ads</option>
                  <option value="social-media-posts">Social Media Posts</option>
                  <option value="meta-ads">Meta Ad Campaigns</option>
                  <option value="account-management">Account Management</option>
                  <option value="video-production">Video Production</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.formSubmit} id="contact-submit" disabled={formStatus !== 'idle'}>
                {formStatus === 'idle' && 'Send Message →'}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && '✓ Message Sent!'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={`${styles.footerInner} container`}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoIcon}>⚡</span>
                <span className={styles.logoText}>Ideolabz</span>
              </Link>
              <p>Turning ideas into impactful digital experiences.</p>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <strong>Company</strong>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
              </div>
              <div>
                <strong>Explore</strong>
                <Link href="/techbaselk">Tech Base LK</Link>
                <Link href="/techbaselk/prompts">Prompt Library</Link>
                <Link href="/techbaselk/classes">Book a Class</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2024 Ideolabz. All rights reserved.</span>
            <span>Crafted with ❤️ in Sri Lanka</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
