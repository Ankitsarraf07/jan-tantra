import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdShield, MdPeople, MdTrendingUp, MdAccountBalance, MdMenu, MdClose } from 'react-icons/md';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

export default function Landing() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countUp, setCountUp] = useState({ issues: 0, resolved: 0, cities: 0, funds: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = { issues: 12400, resolved: 9800, cities: 142, funds: 320 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCountUp({
        issues: Math.round(targets.issues * ease),
        resolved: Math.round(targets.resolved * ease),
        cities: Math.round(targets.cities * ease),
        funds: Math.round(targets.funds * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: '🏘️', color: '#dbeafe', iconBg: '#2563eb', label: 'Area-Based Reporting', desc: 'Citizens report issues specific to their locality with location-tagged complaints.' },
    { icon: '💰', color: '#dcfce7', iconBg: '#16a34a', label: 'Fund Transparency', desc: 'Every rupee allocated is publicly visible. Track utilization in real-time.' },
    { icon: '⭐', color: '#fef3c7', iconBg: '#d97706', label: 'Officer Accountability', desc: 'Performance-based ranking ensures officers are measured on results, not tenure.' },
    { icon: '🔒', color: '#ede9fe', iconBg: '#7c3aed', label: 'Secure Role-Based Access', desc: 'JWT auth with 4 distinct roles — Citizen, Officer, Authority & Admin.' },
    { icon: '📊', color: '#fed7aa', iconBg: '#c2410c', label: 'Real-Time Analytics', desc: 'Higher authorities see live dashboards of issue resolution and fund efficiency.' },
    { icon: '🔔', color: '#fce7f3', iconBg: '#db2777', label: 'Citizen Feedback Loop', desc: 'Locals rate completed work ensuring quality and preventing corruption.' },
  ];

  const roles = [
    { icon: <MdPeople size={26} />, role: 'Citizen', color: '#2563eb', bg: 'linear-gradient(135deg,#dbeafe,#eff6ff)', desc: 'Report issues, track resolution, give feedback on public works', action: () => navigate('/register') },
    { icon: <MdShield size={26} />, role: 'Officer', color: '#16a34a', bg: 'linear-gradient(135deg,#dcfce7,#f0fdf4)', desc: 'View assigned issues, update status, manage work within deadlines', action: () => navigate('/login') },
    { icon: <MdAccountBalance size={26} />, role: 'Authority', color: '#7c3aed', bg: 'linear-gradient(135deg,#ede9fe,#faf5ff)', desc: 'Allocate funds, monitor analytics, review officer performance', action: () => navigate('/login') },
    { icon: <MdTrendingUp size={26} />, role: 'Admin', color: '#dc2626', bg: 'linear-gradient(135deg,#fee2e2,#fff5f5)', desc: 'Full system control — users, areas, roles and all data', action: () => navigate('/login') },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6f8', fontFamily: "'Inter', sans-serif" }}>

      {/* Gov Banner */}
      <div className="gov-banner">
        <span style={{ fontSize: 18 }}>🇮🇳</span>
        <span>An official initiative of the <strong>Jan-Tantra Digital Governance Platform</strong></span>
        {/* <span className="gov-banner-right">
          <span className="gov-dot" /><span>Live & Operational</span>
        </span> */}
      </div>

      {/* Navbar */}
      <nav className={`public-nav-v2 ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <div className="nav-logo-icon">
              <span>🏛️</span>
            </div>
            <div>
              <div className="nav-logo-text">Jan<span>Tantra</span></div>
              <div className="nav-logo-sub">Digital Governance</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="nav-desktop-links">
            <a className="nav-link-v2" href="#features">Features</a>
            <a className="nav-link-v2" href="#roles">Roles</a>
            <a className="nav-link-v2" href="#stats">Impact</a>
            <div className="nav-divider-v" />
            <button className="nav-btn-login" onClick={() => navigate('/login')}>Login</button>
            <button className="nav-btn-cta" onClick={() => navigate('/register')}>
              Join Now <FiChevronRight size={15} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            <a className="nav-mobile-link" href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a className="nav-mobile-link" href="#roles" onClick={() => setMenuOpen(false)}>Roles</a>
            <a className="nav-mobile-link" href="#stats" onClick={() => setMenuOpen(false)}>Impact</a>
            <div className="nav-mobile-actions">
              <button className="nav-btn-login w-full" onClick={() => { navigate('/login'); setMenuOpen(false); }}>Login</button>
              <button className="nav-btn-cta w-full" onClick={() => { navigate('/register'); setMenuOpen(false); }}>
                Join Now <FiChevronRight size={15} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="landing-hero-v2">
        {/* Background image with overlay */}
        <div className="hero-bg-image" />
        <div className="hero-overlay" />

        {/* Floating particles */}
        <div className="hero-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`hero-particle hero-particle-${i + 1}`} />
          ))}
        </div>

        <div className="hero-content-v2">
          <div className="hero-badge-pill">
            <span className="hero-badge-dot" />
            <span>🇮🇳 India's Transparent Governance Platform</span>
          </div>

          <h1 className="hero-title-v2">
            Empowering Citizens.<br />
            Holding Governance<br />
            <span className="hero-title-accent">Accountable.</span>
          </h1>

          <p className="hero-desc-v2">
            Report civic issues, track every rupee of public funds, and measure officer performance —
            all in one transparent platform built for every Indian citizen.
          </p>

          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={() => navigate('/register')}>
              <span>Report an Issue</span>
              <FiArrowRight size={18} />
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate('/login')}>
              View Dashboards
            </button>
          </div>

          {/* Trust pills */}
          <div className="hero-trust-row">
            <div className="hero-trust-pill">Free for Citizens</div>
            <div className="hero-trust-pill">🔒 Secure & Encrypted</div>
            <div className="hero-trust-pill">📍 Location-Verified</div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="hero-scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll to explore</span>
        </div> */}
      </div>

      {/* Stats Section */}
      <div className="stats-section" id="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-num">{countUp.issues.toLocaleString()}+</div>
            <div className="stat-lbl">Issues Reported</div>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <div className="stat-num">{countUp.resolved.toLocaleString()}+</div>
            <div className="stat-lbl">Issues Resolved</div>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <div className="stat-num">{countUp.cities}+</div>
            <div className="stat-lbl">Cities & Towns</div>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <div className="stat-num">₹{countUp.funds}Cr+</div>
            <div className="stat-lbl">Funds Tracked</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section" id="features">
        <div className="features-header">
          <div className="section-tag">Platform Capabilities</div>
          <h2 className="features-title">One Platform. Complete Governance.</h2>
          <p className="features-subtitle">Designed for every stakeholder — from the street to the secretariat.</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.label} className="feature-card-v2">
              <div className="feature-icon-v2" style={{ background: f.color }}>
                <span>{f.icon}</span>
              </div>
              <div className="feature-title">{f.label}</div>
              <div className="feature-desc">{f.desc}</div>
              <div className="feature-arrow">
                <FiChevronRight size={16} color="#003058" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roles Section */}
      <div className="roles-section" id="roles">
        <div className="roles-header">
          <div className="section-tag section-tag-gold">Role-Based Access</div>
          <h2 className="features-title" style={{ color: '#fff' }}>Built for Every Role</h2>
          <p className="features-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Four secure portals with tailored access and permissions</p>
        </div>
        <div className="roles-grid">
          {roles.map(r => (
            <div key={r.role} className="role-card" onClick={r.action}>
              <div className="role-card-inner">
                <div className="role-icon" style={{ background: r.bg, color: r.color }}>
                  {r.icon}
                </div>
                <div className="role-name">{r.role}</div>
                <div className="role-desc">{r.desc}</div>
                <div className="role-cta" style={{ color: r.color }}>
                  Get Started <FiArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-section">
        <div className="cta-inner">
          <div className="cta-icon">🏛️</div>
          <h2 className="cta-title">Be the Change in Your Community</h2>
          <p className="cta-desc">Join thousands of citizens making their localities better. Your report matters.</p>
          <div className="cta-actions">
            <button className="hero-btn-primary" onClick={() => navigate('/register')}>
              Register as Citizen <FiArrowRight size={16} />
            </button>
            <button className="cta-btn-outline" onClick={() => navigate('/login')}>
              Already have an account?
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-v2">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Jan<span>Tantra</span></div>
            <div className="footer-tagline">Transparent Government for Every Indian</div>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <div className="footer-col-title">Platform</div>
              <a href="#features" className="footer-link">Features</a>
              <a href="#roles" className="footer-link">Role Access</a>
              <a href="#stats" className="footer-link">Our Impact</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Access</div>
              <span className="footer-link" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Login</span>
              <span className="footer-link" onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Register</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>🇮🇳 Jan-Tantra Digital Governance Platform &copy; 2026</span>
          <span>· Proudly Indian</span>
        </div>
      </footer>
    </div>
  );
}
