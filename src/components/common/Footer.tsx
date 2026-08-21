import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-footer-bg)',
        color: 'var(--color-text-primary)',
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: '60px',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        borderTop: '1px solid var(--color-border-gold)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Main Top Footer Grid */}
        <div
          className="footer-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            marginBottom: 'clamp(60px, 8vw, 100px)',
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Logo variant="dark" />
            <p
              style={{
                fontFamily: 'var(--font-family-sans)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 300,
                lineHeight: '1.65',
                color: 'var(--color-text-secondary)',
                maxWidth: '300px',
              }}
            >
              Thoughtfully designed for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-family-sans)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: '24px',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Kitchens', path: '/modular-kitchens' },
                { label: 'Wardrobes', path: '/modular-wardrobes' },
                { label: 'Projects', path: '/projects' },
                { label: 'Contact', path: '/contact' },
                { label: 'Franchise Enquiry', path: '/franchise-enquiry' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', item.path);
                      window.dispatchEvent(new Event('popstate'));
                    }}
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 300,
                      color: 'var(--color-text-secondary)',
                      transition: 'color var(--motion-duration-fast) ease',
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-family-sans)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
                marginBottom: '24px',
              }}
            >
              Contact Studio
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-family-sans)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
              }}
            >
              <p>Email: [Email Address]</p>
              <p>Phone: [Phone Number]</p>
              <p>Studio: [Studio Address]</p>
              <p>Hours: [Working Hours]</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid var(--color-border-gold)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontFamily: 'var(--font-family-sans)',
            fontSize: '11px',
            color: 'var(--color-text-secondary)',
            letterSpacing: '0.08em',
          }}
        >
          <p>© {new Date().getFullYear()} LEOZ CUCINE. All Rights Reserved.</p>
          <p>Kitchens &amp; Wardrobes</p>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-accent-gold) !important;
        }

        @media (max-width: 767px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>

  );
};
