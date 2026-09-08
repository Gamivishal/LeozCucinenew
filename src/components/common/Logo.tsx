import React from 'react';
import logoImg from '../../../LEOZ logo.webp';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="/"
      onClick={handleLogoClick}
      className={`brand-logo-link ${className}`}
      aria-label="LEOZ CUCINE — Kitchens & Wardrobes"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
      }}
    >
      <img loading="lazy"
        src={logoImg}
        alt="LEOZ CUCINE — Luxury Kitchen & Wardrobes"
        style={{
          height: 'clamp(54px, 7.5vw, 90px)',
          width: 'auto',
          maxHeight: '100px',
          objectFit: 'contain',
          display: 'block',
          transition: 'opacity var(--motion-duration-fast) ease',
        }}
      />
    </a>
  );
};

