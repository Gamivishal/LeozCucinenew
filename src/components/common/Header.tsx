import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isPreloaderActive?: boolean;
  showHeader?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isPreloaderActive = false, showHeader = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isVisible = !isPreloaderActive || showHeader;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === '/modular-kitchens' || path === '/talk-to-us' || path === '/modular-wardrobes' || path === '/about' || path === '/contact' || path === '/franchise-enquiry' || path === '/franchise-opportunities') {
      e.preventDefault();
      window.history.pushState({}, '', path);
      window.dispatchEvent(new Event('popstate'));
    } else if (path === '/') {
      e.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    } else if (path.startsWith('/#')) {
      e.preventDefault();
      const hash = path.substring(1);
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/' + hash);
        window.dispatchEvent(new Event('popstate'));
      } else {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsMobileMenuOpen(false);
    handleNavClick(e, path);
  };

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isSpecialPage = currentPath === '/modular-kitchens' || currentPath === '/modular-wardrobes' || currentPath === '/about' || currentPath === '/contact' || currentPath === '/talk-to-us' || currentPath === '/franchise-enquiry' || currentPath === '/franchise-opportunities';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Kitchens', path: '/modular-kitchens' },
    { name: 'Wardrobes', path: '/modular-wardrobes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Franchise Enquiry', path: '/franchise-opportunities' },
  ];

  return (
    <>
      <header
        role="banner"
        className="main-header-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '10px 5vw' : '18px 5vw',
          backgroundColor: (scrolled || isMobileMenuOpen || isSpecialPage || currentPath === '/' || currentPath === '') ? 'var(--color-dark-bg)' : 'transparent',
          backdropFilter: (scrolled || isSpecialPage || isMobileMenuOpen || currentPath === '/' || currentPath === '') ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: (scrolled || isSpecialPage || isMobileMenuOpen || currentPath === '/' || currentPath === '') ? 'blur(16px)' : 'none',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transform: isVisible ? 'translateY(0)' : 'translateY(-6px)',
          borderBottom: (scrolled || isSpecialPage || isMobileMenuOpen || currentPath === '/' || currentPath === '') ? '1px solid rgba(182, 154, 107, 0.25)' : '1px solid transparent',
          transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, padding var(--motion-duration-slow) var(--motion-ease-luxury), background-color var(--motion-duration-slow) var(--motion-ease-luxury), border-bottom var(--motion-duration-slow) var(--motion-ease-luxury)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          width: '100%',
          willChange: 'opacity, transform',
          boxShadow: (scrolled) ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        {/* LEFT NAVIGATION ITEMS (DESKTOP) */}
        <nav aria-label="Main Navigation" className="desktop-header-nav" style={{ justifySelf: 'start', display: 'flex', gap: 'clamp(14px, 2vw, 24px)', alignItems: 'center' }}>
          {navItems.map((item) => {
            const isActive = item.path === currentPath || (item.path === '/' && currentPath === '');
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`header-link ${isActive ? 'active-link' : ''}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.4px',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                  opacity: isActive ? 1 : 0.85,
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'opacity var(--motion-duration-fast) var(--motion-ease-luxury), color var(--motion-duration-fast) var(--motion-ease-luxury)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: 'var(--color-accent)',
                      boxShadow: '0 0 8px rgba(182, 154, 107, 0.4)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CENTER LOGO */}
        <div style={{ justifySelf: 'center' }}>
          <Logo variant="dark" showTagline={false} />
        </div>

        {/* RIGHT UTILITIES & ELEGANT COMPACT BUTTON */}
        <div
          className="header-right-actions"
          style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '16px' }}
        >

          <a
            href="/talk-to-us"
            onClick={(e) => handleNavClick(e, '/talk-to-us')}
            className="btn btn-light desktop-header-btn"
            style={{
              fontSize: '13px',
              padding: '10px 22px',
              minHeight: 'auto',
            }}
          >
            Talk to Us
          </a>

          {/* MOBILE HAMBURGER TOGGLE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-hamburger-btn"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            style={{
              color: 'var(--color-accent)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE PREMIUM SLIDE-OVER DRAWER MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'var(--color-dark-bg)',
              zIndex: 995,
              paddingTop: '105px',
              paddingBottom: '36px',
              paddingLeft: '24px',
              paddingRight: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navItems.map((item) => {
                const isActive = item.path === currentPath || (item.path === '/' && currentPath === '');
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handleMobileNavClick(e, item.path)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '22px',
                      color: isActive ? 'var(--color-accent)' : '#FFFFFF',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(182, 154, 107, 0.1)',
                      paddingBottom: '14px',
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(182, 154, 107, 0.2)' }}>
              <a
                href="/talk-to-us"
                onClick={(e) => handleMobileNavClick(e, '/talk-to-us')}
                className="btn btn-light"
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Talk to Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-hamburger-btn {
          display: none;
        }

        @media (max-width: 1023px) {
          .main-header-bar {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 14px 20px !important;
          }
          .desktop-header-nav {
            display: none !important;
          }
          .desktop-header-btn {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
            outline: none !important;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 2px !important;
          }
          .header-right-actions {
            display: flex !important;
            align-items: center !important;
            justify-content: flex-end !important;
            gap: 16px !important;
            margin-left: auto !important;
          }
        }

        .header-link:hover {
          color: var(--color-accent-gold) !important;
          opacity: 1 !important;
        }
        .header-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: var(--color-accent-gold);
          transition: width var(--motion-duration-fast) var(--motion-ease-luxury);
        }
        .header-link:hover::after, .header-link:focus-visible::after {
          width: 100%;
        }
        .hover-opacity:hover {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
};

export default Header;

