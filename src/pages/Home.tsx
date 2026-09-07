import React, { useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { Preloader, checkShouldRunPreloader, markPreloaderSeen } from '../components/common/Preloader';
import { images } from '../assets/images';
import { ShieldCheck, Award, Factory, Globe, Compass, Clock, Wrench, ChefHat, Shirt, Handshake } from 'lucide-react';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  staggerContainer,
  staggerItem
} from '../styles/animations';

const luxuryEase = [0.16, 1, 0.3, 1];

/* ==========================================================================
   1. HERO — static image, dark overlay, short copy (Redesigne.md §10)
   ========================================================================== */
const HeroSection: React.FC = () => {
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: luxuryEase,
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Leoz Cucine Hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={images.hero}
        alt="Leoz Cucine premium kitchen"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Layered scrim: even base darkening + a vignette focused on the text zone for guaranteed contrast against busy imagery */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.55) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.6) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 55% at 50% 48%, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
      {/* Bottom fade — softens the seam into the next section instead of a hard cut */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '14vh',
          background: 'linear-gradient(180deg, transparent 0%, var(--color-surface-light) 100%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.span
          variants={heroItemVariants}
          className="section-label text-white"
          style={{ display: 'block', marginBottom: '22px', textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)' }}
        >
          KITCHENS &amp; WARDROBES
        </motion.span>
        <h1
          className="hero-title text-white"
          style={{ marginBottom: '22px', textShadow: '0 4px 30px rgba(0, 0, 0, 0.45)' }}
        >
          <motion.span variants={heroItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>German-Engineered</motion.span>
          <motion.span variants={heroItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>Kitchens &amp; Wardrobes,</motion.span>
          <motion.span variants={heroItemVariants} style={{ display: 'inline-block' }}>Crafted in Gujarat</motion.span>
        </h1>
        <motion.p
          variants={heroItemVariants}
          className="hero-description text-light"
          style={{ margin: '0 auto 36px', maxWidth: '620px', textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)' }}
        >
          LEOZ Cucine brings 20+ years of manufacturing expertise and German design precision to homes across Ahmedabad and throughout Gujarat — designed, built, and installed entirely in-house.
        </motion.p>

        <div
          className="hero-cta-container"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            variants={heroItemVariants}
            href="/talk-to-us"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/talk-to-us');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-light home-cta-btn"
          >
            Book a Free Consultation
          </motion.a>
          <motion.a
            variants={heroItemVariants}
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-outline home-cta-btn home-cta-btn-outline"
            style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
          >
            Explore Our Collections
          </motion.a>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .hero-cta-container {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .hero-cta-container a {
            width: 100% !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   2. BRAND INTRO SECTION (SECONDARY BACKGROUND SOFT IVORY #F7F5F1)
   ========================================================================== */
const BrandIntroSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Brand Introduction"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-light)',
        color: 'var(--color-text-dark)',
      }}
    >
      <div
        className="home-brandintro-grid"
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 100px)',
          alignItems: 'center',
        }}
      >
        <motion.div
          className="home-media-frame"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            overflow: 'hidden',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-subtle)',
            border: '1px solid var(--color-border-gold)',
          }}
        >
          <img
            src="/PHILOSOPHY.png"
            alt="LEOZ CUCINE Joinery Detail Craftsmanship"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.span variants={staggerItem} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
            LEOZ CUCINE
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="section-title"
            style={{ marginBottom: '20px' }}
          >
            Where German Precision Meets Gujarati Craftsmanship
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="description"
            style={{ marginBottom: '16px' }}
          >
            LEOZ Cucine was founded on a simple belief — a home's kitchen and wardrobes should feel as considered as the rest of the house.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="description"
            style={{ marginBottom: '28px' }}
          >
            Drawing on German design precision and engineering, and backed by over two decades of manufacturing experience, we create modular kitchens and wardrobes that are engineered for durability and finished for elegance. Every piece that leaves our factory carries our name — which is why we build it ourselves, start to finish.
          </motion.p>

          <motion.div variants={staggerItem}>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/about');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="small-description"
              style={{ color: 'var(--color-accent)', fontWeight: 600 }}
            >
              Discover Our Story →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* Helper component for live animated numbers counter */
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState('0');
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  React.useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numStr = numericMatch[0].replace(/,/g, '');
    const targetNum = parseInt(numStr, 10);
    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    let animationFrameId: number;
    const duration = 2000; // 2 seconds count up
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Soft luxury ease-out curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(easeProgress * targetNum);

      const formattedNum = currentNum.toLocaleString('en-US');
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

/* ==========================================================================
   2.5 HIGHLIGHTS STRIP SECTION (DARK NAVY #181818)
   ========================================================================== */
const HighlightsBarSection: React.FC = () => {
  const highlights = [
    { icon: Award, value: "Trusted", label: "By Homeowners" },
    { icon: Factory, value: "In-House", label: "Manufacturing" },
    { icon: ShieldCheck, value: "German-Grade", label: "Hardware Standards" },
    { icon: Globe, value: "Pan-India", label: "Presence" }
  ];

  return (
    <section
      aria-label="Highlights Bar"
      style={{
        backgroundColor: 'var(--color-surface-dark-secondary)',
        color: '#FFFFFF',
        padding: '36px 5vw',
        borderTop: '1px solid rgba(182, 154, 107, 0.25)',
        borderBottom: '1px solid rgba(182, 154, 107, 0.25)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="home-stat-card"
              variants={staggerItem}
              whileHover={{
                y: -6,
                borderColor: 'rgba(182, 154, 107, 0.45)',
                backgroundColor: 'rgba(182, 154, 107, 0.07)',
                boxShadow: '0 14px 34px -12px rgba(182, 154, 107, 0.3)',
                transition: { duration: 0.35, ease: luxuryEase },
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                padding: 'clamp(16px, 2vw, 22px) clamp(14px, 2vw, 20px)',
                border: '1px solid rgba(182, 154, 107, 0.15)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <span className="home-stat-card-bar" aria-hidden="true" />
              <div
                className="home-pillar-icon"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(182, 154, 107, 0.12)',
                  border: '1px solid rgba(182, 154, 107, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B69A6B',
                  flexShrink: 0,
                }}
              >
                <item.icon size={21} strokeWidth={1.5} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-family-serif)',
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    fontWeight: 300,
                    color: '#B69A6B',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <AnimatedCounter value={item.value} />
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#B0ABA2',
                    lineHeight: '1.2',
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section[aria-label="Highlights Bar"] > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   3. OUR COLLECTIONS — KITCHENS + WARDROBES
   ========================================================================== */
const CollectionsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const isNarrowViewport = typeof window !== 'undefined' && window.innerWidth < 768;
  const slideDistance = shouldReduceMotion ? 0 : (isNarrowViewport ? 32 : 72);

  const collections = [
    {
      eyebrow: 'LEOZ KITCHENS',
      title: 'Kitchens',
      desc: 'Modular kitchens designed around how you actually cook and live, built with German-grade hardware and finished to a premium standard.',
      image: images.kitchenCategory,
      link: '/modular-kitchens',
    },
    {
      eyebrow: 'LEOZ WARDROBES',
      title: 'Wardrobes',
      desc: 'Custom wardrobes with intelligent internal storage solutions built to fit your space precisely, with the same attention to hardware, finish, and detail as our kitchens.',
      image: images.wardrobeCategory,
      link: '/modular-wardrobes',
    },
  ];

  const navigate = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    window.history.pushState({}, '', link);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section
      id="collections"
      aria-label="Our Collections"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-stone)',
        color: 'var(--color-heading)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(70px, 9vw, 130px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>OUR COLLECTIONS</span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Two Spaces. One Standard of Craft.
          </motion.h2>
        </div>

        {collections.map((item, idx) => {
          const isImageLeft = idx % 2 === 1;
          return (
            <div
              key={item.title}
              className="collections-editorial-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                gap: 'clamp(40px, 6vw, 90px)',
                alignItems: 'center',
                marginBottom: idx === collections.length - 1 ? 0 : 'clamp(80px, 10vw, 140px)',
              }}
            >
              {/* TEXT BLOCK */}
              <motion.div
                className="collections-editorial-text"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, ease: luxuryEase }}
                style={{ order: isImageLeft ? 2 : 1 }}
              >
                <span className="section-label" style={{ display: 'block', marginBottom: '18px' }}>
                  {item.eyebrow}
                </span>
                <h3 className="section-title" style={{ marginBottom: '20px' }}>{item.title}</h3>
                <p className="description" style={{ marginBottom: '28px', maxWidth: '480px' }}>{item.desc}</p>
                <a
                  href={item.link}
                  onClick={(e) => navigate(e, item.link)}
                  className="collections-explore-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-heading)',
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  Explore {item.title}
                  <span className="collections-explore-arrow" style={{ display: 'inline-block', transition: 'transform 250ms ease' }}>→</span>
                </a>
              </motion.div>

              {/* IMAGE BLOCK — directional reveal: slides in from the side it visually sits on */}
              <motion.div
                className="collections-editorial-image home-media-frame"
                initial={{ opacity: 0, x: isImageLeft ? -slideDistance : slideDistance }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, ease: luxuryEase }}
                style={{
                  order: isImageLeft ? 1 : 2,
                  position: 'relative',
                  height: 'auto',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-gold)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      <style>{`
        .collections-explore-link:hover {
          text-decoration: underline;
        }
        .collections-explore-link:hover .collections-explore-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 767px) {
          .collections-editorial-row {
            grid-template-columns: 1fr !important;
          }
          .collections-editorial-text {
            order: 1 !important;
          }
          .collections-editorial-image {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   3.5 PRODUCT HIGHLIGHTS SECTION
   ========================================================================== */
const ProductHighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: ChefHat,
      title: 'German Style Modular Kitchens',
      description: 'Experience the perfect blend of sleek design, functionality, and customization. Our modular kitchens are crafted with precision, offering innovative storage solutions and contemporary aesthetics suited to modern lifestyles.',
    },
    {
      icon: Shirt,
      title: 'Customized Wardrobes',
      description: 'Maximize your space with our innovative wardrobe designs. Tailored to your needs, our wardrobes combine practicality with elegance, ensuring optimal storage and a clutter-free environment.',
    },
  ];

  return (
    <section
      aria-label="Product Highlights"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-light)',
        color: 'var(--color-heading)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>PRODUCT HIGHLIGHTS</span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium Solutions for Kitchens &amp; Wardrobes
          </motion.h2>
        </div>

        <div
          className="home-highlights-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(28px, 3vw, 48px)',
          }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="home-highlight-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                style={{ position: 'relative' }}
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(182,154,107,0.15)', borderColor: 'rgba(182,154,107,0.6)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    padding: 'clamp(32px, 3.5vw, 44px)',
                    backgroundColor: 'var(--color-surface-stone)',
                    border: '1px solid var(--color-border-gold)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-subtle)',
                    overflow: 'hidden',
                  }}
                >
                  <span className="home-highlight-card-bar" aria-hidden="true" />
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(182, 154, 107, 0.12)',
                      color: '#B69A6B',
                    }}
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="sub-title" style={{ margin: 0 }}>{item.title}</h3>
                  <p className="description" style={{ margin: 0 }}>{item.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   4.5 OUR PROCESS SECTION (Redesigne.md §17)
   ========================================================================== */
const ProcessSection: React.FC = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const timelineProgressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    { title: 'Consultation', desc: 'We understand your kitchen or wardrobe space, needs, and style.' },
    { title: 'Design', desc: 'Our team creates a kitchen or wardrobe layout tailored to your requirements.' },
    { title: 'Manufacturing', desc: 'Your kitchen or wardrobe is built at our own 20,000 sq. ft. facility.' },
    { title: 'Installation', desc: 'Our in-house team installs and finishes the project.' },
    { title: 'After-Sales Support', desc: 'Warranty-backed service, long after installation.' },
  ];

  return (
    <section
      aria-label="Our Process"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-light)',
        color: 'var(--color-heading)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>HOW WE WORK</span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            From Idea to Installation.
          </motion.h2>
        </div>

        <div ref={timelineRef} className="home-timeline">
          <div className="home-timeline-track" aria-hidden="true" />
          <motion.div
            className="home-timeline-progress"
            style={{ height: timelineProgressHeight }}
            aria-hidden="true"
          />

          {steps.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.title}
                className={`home-timeline-row ${isLeft ? 'is-left' : 'is-right'}`}
              >
                <motion.div
                  className="home-timeline-content"
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: luxuryEase }}
                >
                  <h3 className="sub-title" style={{ marginBottom: '8px' }}>{item.title}</h3>
                  <p className="small-description">{item.desc}</p>
                </motion.div>

                <motion.span
                  className="home-timeline-dot"
                  initial={{ backgroundColor: '#F7F5F1', scale: 0.7 }}
                  whileInView={{ backgroundColor: '#B69A6B', scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .home-timeline {
          position: relative;
          padding: 12px 0;
        }
        .home-timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--color-border-gold-medium);
          transform: translateX(-50%);
        }
        .home-timeline-progress {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          background: var(--color-accent);
          transform: translateX(-50%);
          transform-origin: top;
        }
        .home-timeline-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 32px 1fr;
          align-items: center;
          column-gap: clamp(24px, 4vw, 56px);
          padding: clamp(24px, 3.5vw, 40px) 0;
        }
        .home-timeline-row.is-left .home-timeline-content {
          grid-column: 1;
          text-align: right;
        }
        .home-timeline-row.is-right .home-timeline-content {
          grid-column: 3;
          text-align: left;
        }
        .home-timeline-dot {
          grid-column: 2;
          justify-self: center;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--color-accent);
          position: relative;
          z-index: 2;
        }

        @media (max-width: 767px) {
          .home-timeline-row {
            grid-template-columns: 1fr 20px 1fr;
            column-gap: clamp(10px, 3.5vw, 18px);
            padding: clamp(18px, 5vw, 28px) 0;
          }
          .home-timeline-dot {
            width: 10px;
            height: 10px;
          }
          .home-timeline-content .sub-title {
            font-size: 18px;
            margin-bottom: 6px !important;
          }
          .home-timeline-content .small-description {
            font-size: 12.5px;
            line-height: 1.5;
          }
        }

        @media (max-width: 420px) {
          .home-timeline-row {
            grid-template-columns: 1fr 16px 1fr;
            column-gap: 8px;
          }
          .home-timeline-dot {
            width: 9px;
            height: 9px;
          }
          .home-timeline-content .sub-title {
            font-size: 16px;
          }
          .home-timeline-content .small-description {
            font-size: 11.5px;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   5. WHY LEOZ SECTION (DARK DEEP NAVY #181818 / CARDS #202020)
   ========================================================================== */
const WhyLeozSection: React.FC = () => {
  const pillars = [
    { icon: Compass, title: 'German Design Influence', description: 'Precision, engineering, and clean form language adapted for Indian homes and climate.' },
    { icon: Factory, title: 'Own Manufacturing Factory', description: 'We design and manufacture in-house, giving us complete control over quality, materials, and finish.' },
    { icon: Clock, title: '20+ Years of Experience', description: 'Two decades of refining our craft, materials, and processes.' },
    { icon: ShieldCheck, title: 'Comprehensive Warranty', description: 'Backed by a warranty that reflects our confidence in what we build.' },
    { icon: Wrench, title: 'End-to-End Installation Service', description: 'From design consultation to final installation, handled entirely by our own team.' },
  ];

  return (
    <section
      aria-label="Why Leoz Cucine"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-text-primary)',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>WHY CHOOSE LEOZ CUCINE</span>
          <motion.h2 
            className="section-title text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Built to Be Chosen, Not Just Sold.
          </motion.h2>
        </div>

        <div
          className="home-pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'clamp(20px, 2.4vw, 28px)',
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="home-pillar-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: luxuryEase }}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(182, 154, 107, 0.45)',
                  backgroundColor: '#242424',
                  boxShadow: '0 18px 40px -14px rgba(182, 154, 107, 0.3)',
                  transition: { duration: 0.35, ease: luxuryEase },
                }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: 'clamp(24px, 2.6vw, 32px) clamp(16px, 2vw, 22px)',
                  backgroundColor: 'var(--color-surface-dark-secondary)',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <span className="home-pillar-card-bar" aria-hidden="true" />
                <div
                  className="home-pillar-icon"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(182, 154, 107, 0.12)',
                    color: '#B69A6B',
                    marginBottom: '6px',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="sub-title text-white" style={{ fontSize: '18px', margin: 0, minHeight: '48px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>{pillar.title}</h3>
                <p className="small-description" style={{ color: 'var(--color-text-secondary)', margin: 0 }}>{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   6.5 FOR TRADE PROFESSIONALS SECTION (DARK DEEP NAVY #181818)
   ========================================================================== */
const TradeProfessionalsSection: React.FC = () => {
  return (
    <section
      aria-label="For Trade Professionals"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-text-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '760px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(182, 154, 107, 0.12)',
            color: '#B69A6B',
            marginBottom: '24px',
          }}
        >
          <Handshake size={26} strokeWidth={1.5} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="section-label"
          style={{ display: 'block', marginBottom: '16px' }}
        >
          FOR TRADE PROFESSIONALS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="section-title text-white"
          style={{ marginBottom: '24px' }}
        >
          Partnering with Architects, Interior Designers &amp; Builders
        </motion.h2>

        <div style={{ margin: '0 auto', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
          {[
            "We work closely with design and construction professionals",
            "across Gujarat, offering dedicated support, technical",
            "specifications, and reliable timelines for client projects."
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
            >
              <span className="description text-light" style={{ display: 'block', margin: 0 }}>
                {line}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-light home-cta-btn"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================================================
   7. CONSULTATION CTA SECTION (DARK DEEP NAVY #181818)
   ========================================================================== */
const ConsultationSection: React.FC = () => {
  return (
    <section
      id="consultation"
      aria-label="Talk To Us"
      style={{
        position: 'relative',
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-text-primary)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 0.45, scale: 1.00 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.0, ease: luxuryEase }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images.consultationBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          willChange: 'transform, opacity',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(24,24,24,0.3) 0%, rgba(24,24,24,0.9) 100%)',
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            }
          }
        }}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '900px',
          padding: '80px 6vw',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="section-title text-white"
          style={{ marginBottom: '24px' }}
        >
          Let's Design Your Kitchen or Wardrobe
        </motion.h2>

        <div style={{ margin: '0 auto', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
          {[
            "Whether you're planning a new kitchen,",
            "upgrading your wardrobe, or specifying",
            "kitchens and wardrobes for a residential project,",
            "our team is ready to help."
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="description text-light" style={{ display: 'block', margin: 0 }}>
                {line}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
        >
          <a
            href="/talk-to-us"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/talk-to-us');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-light home-cta-btn"
          >
            Talk to Us Today
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ==========================================================================
   MAIN HOME PAGE COMPONENT
   ========================================================================== */
export const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPreloaderActive, setIsPreloaderActive] = useState<boolean>(checkShouldRunPreloader);
  const [isCurtainExiting, setIsCurtainExiting] = useState(false);
  const [showHeader, setShowHeader] = useState<boolean>(() => !checkShouldRunPreloader());

  useDocumentMeta(
    'Leoz Cucine | German-Engineered Kitchens & Wardrobes in Gujarat',
    'LEOZ Cucine brings 20+ years of manufacturing expertise and German design precision to homes across Ahmedabad and throughout Gujarat.'
  );

  // Preloader timeline: hold the curtain briefly, slide it up, then reveal the page.
  useEffect(() => {
    if (!isPreloaderActive) return;

    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const exitTimer = setTimeout(() => {
      setIsCurtainExiting(true);
      setShowHeader(true);
    }, 1500);

    const completeTimer = setTimeout(() => {
      setIsPreloaderActive(false);
      document.body.style.overflow = '';
      markPreloaderSeen();
    }, 1500 + 1100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = '';
    };
  }, [isPreloaderActive]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="page-home">
      <Preloader isActive={isPreloaderActive} isExiting={isCurtainExiting} />

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Header isPreloaderActive={isPreloaderActive} showHeader={showHeader} />
      <main id="main-content">
        <HeroSection />
        <BrandIntroSection />
        <CollectionsSection />
        <ProductHighlightsSection />
        <WhyLeozSection />
        <HighlightsBarSection />
        <ProcessSection />
        <TradeProfessionalsSection />
        <ConsultationSection />
      </main>
      <Footer />
      <style>{`
        /* Premium pill CTA treatment — scoped to Home's own content buttons only */
        .home-cta-btn {
          border-radius: var(--radius-full);
          padding: 14px 32px;
          transition: transform 0.4s var(--motion-ease-luxury), box-shadow 0.4s var(--motion-ease-luxury), background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .home-cta-btn:hover,
        .home-cta-btn:focus-visible {
          transform: translateY(-2px);
        }
        .home-cta-btn.btn-light:hover,
        .home-cta-btn.btn-light:focus-visible {
          box-shadow: 0 14px 32px -10px rgba(0, 0, 0, 0.35);
        }
        .home-cta-btn-outline:hover,
        .home-cta-btn-outline:focus-visible {
          box-shadow: 0 14px 32px -10px rgba(0, 0, 0, 0.25);
        }

        /* Soft zoom-on-hover for editorial images */
        .home-media-frame {
          transition: box-shadow 0.4s var(--motion-ease-luxury);
        }
        .home-media-frame img {
          transition: transform 0.7s var(--motion-ease-luxury);
        }
        .home-media-frame:hover img {
          transform: scale(1.045);
        }

        /* Top accent bar on Product Highlight cards */
        .home-highlight-card-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--color-accent-gold);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s var(--motion-ease-luxury);
        }
        .home-highlight-card:hover .home-highlight-card-bar {
          transform: scaleX(1);
        }
        .home-highlight-card:hover > div {
          border-color: var(--color-border-gold-medium) !important;
        }

        /* Top accent bar shared by the "Why Choose Leoz" pillar cards and the stat cards in the Highlights Bar */
        .home-pillar-card-bar,
        .home-stat-card-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--color-accent-gold);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s var(--motion-ease-luxury);
        }
        .home-pillar-card:hover .home-pillar-card-bar,
        .home-stat-card:hover .home-stat-card-bar {
          transform: scaleX(1);
        }
        .home-pillar-icon {
          transition: transform 0.4s var(--motion-ease-luxury), background-color 0.4s ease;
        }
        .home-pillar-card:hover .home-pillar-icon,
        .home-stat-card:hover .home-pillar-icon {
          transform: scale(1.12);
          background-color: rgba(182, 154, 107, 0.24) !important;
        }

        @media (max-width: 767px) {
          .home-pillars-grid, .home-highlights-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .home-pillars-grid, .home-highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .home-pillars-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

