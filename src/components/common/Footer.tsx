import React from 'react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_SALES_DISPLAY,
  PHONE_SALES_HREF,
  PHONE_CARE_DISPLAY,
  PHONE_CARE_HREF,
  ADDRESS_LINE,
  HOURS_SHORT,
} from '../../constants/siteInfo';

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Logo variant="dark" />
            </motion.div>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
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
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
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
                { label: 'Kitchens', path: '/modular-kitchens' },
                { label: 'Wardrobes', path: '/modular-wardrobes' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Franchise Enquiry', path: '/franchise-opportunities' },
                // EXTRA (not part of current spec) — disabled, kept for reference. Uncomment to re-enable.
                // { label: 'Franchise Enquiry', path: '/franchise-enquiry' },
              ].map((item) => (
                <li key={item.path}>
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
          </motion.div>

          {/* Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
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
              <p>Email: <a href={EMAIL_HREF} className="footer-link">{EMAIL}</a></p>
              <p>Sales &amp; Enquiry: <a href={PHONE_SALES_HREF} className="footer-link">{PHONE_SALES_DISPLAY}</a></p>
              <p>Customer Care: <a href={PHONE_CARE_HREF} className="footer-link">{PHONE_CARE_DISPLAY}</a></p>
              <p>Studio: {ADDRESS_LINE}</p>
              <p>Hours: {HOURS_SHORT}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
          <p>© {new Date().getFullYear()} LEOZ Cucine. All Rights Reserved.</p>
          <a
            href="/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/privacy-policy');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="footer-link"
          >
            Privacy Policy
          </a>
          <p>Kitchens &amp; Wardrobes</p>
        </motion.div>
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
          .footer-link {
            display: inline-flex !important;
            align-items: center !important;
            min-height: 44px !important;
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
