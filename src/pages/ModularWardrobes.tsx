import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Check, Factory, Compass, Clock, ShieldCheck, Wrench } from 'lucide-react';

/* Easing curve token matching Modular Kitchens page */
const luxuryEase = [0.16, 1, 0.3, 1];

/* Stagger animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: luxuryEase }
  }
};

const staggerContainer = containerVariants;
const staggerItem = itemVariants;

/* Heading-specific mask reveal — for h2/h3 inside stagger containers */
const headingMaskVariant = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

/* Hero image sits on the RIGHT, so it enters from the LEFT (opposite side) */
const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.03, x: -70, clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: luxuryEase, delay: 0.1 }
  }
};

/* Hero text sits on the LEFT, so it enters from the RIGHT (opposite side) */
const heroTextItemVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: luxuryEase } }
};

/* Directional entrance variants — Introduction section: image slides in from
   the left, its companion text slides in from the right */
const fromLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: luxuryEase } }
};
const fromRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: luxuryEase } }
};

export const ModularWardrobes: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useDocumentMeta(
    'Premium Wardrobes | Leoz Cucine',
    'Wardrobes designed around your room, belongings and personal style.'
  );

  // Parallax transform calculation for Hero image
  const parallaxY = Math.min(scrollY * 0.15, 120);

  /* SECTION 3: Wardrobe Collections (5 Typologies) */
  const layouts = [
    {
      id: 'hinged',
      title: 'Hinged',
      subtitle: 'Timeless design',
      description: 'Timeless design with complete access to the entire wardrobe width.',
      image: images.wardrobeTypes.hinged
    },
    {
      id: 'sliding',
      title: 'Sliding',
      subtitle: 'Space-saving doors',
      description: 'Smart storage with a clean profile, ideal for narrow spaces.',
      image: images.wardrobeTypes.sliding
    },
    {
      id: 'glass',
      title: 'Glass',
      subtitle: 'Contemporary fronts',
      description: 'Light, elegant and contemporary tinted or fluted glass fronts.',
      image: '/Glass Finish Wardrobes.jfif'
    },
    {
      id: 'walk-in',
      title: 'Walk-In',
      subtitle: 'Dressing suite',
      description: 'A personal space for dressing and storage, designed around you.',
      image: images.wardrobeTypes.walkIn
    },
    {
      id: 'floor-to-ceiling',
      title: 'Floor-to-Ceiling',
      subtitle: 'Maximised storage',
      description: 'Maximum storage with a seamless, uninterrupted look.',
      image: '/Modular Wardrobe.jpeg'
    }
  ];

  /* SECTION 5: Finishes & Door Style Options (8 Categories) */
  const materials = images.wardrobeFinishes.map((f) => ({
    title: f.title,
    detail: f.desc,
    image: f.image
  }));

  return (
    <div className="page-modular-wardrobes" style={{ backgroundColor: 'var(--color-surface-dark)', color: 'var(--color-text-primary)' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        {/* ==========================================================================
           SECTION 1: HERO
           ========================================================================== */}
        <section
          id="hero"
          aria-label="Modular Wardrobes Split Hero"
          className="hero-split-container"
          style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100vw',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            backgroundColor: '#F7F5F1',
            overflow: 'hidden',
          }}
        >
          {/* --- LEFT COLUMN: EDITORIAL TYPOGRAPHY MATCHING MASTER TEMPLATE --- */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: 'clamp(130px, 15vh, 170px)',
              paddingBottom: '80px',
              paddingLeft: 'clamp(32px, 5vw, 60px)',
              paddingRight: 'clamp(32px, 5vw, 60px)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{
                maxWidth: '620px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <motion.span variants={heroTextItemVariants} className="section-label section-label-on-light" style={{ marginBottom: '16px' }}>
                LEOZ WARDROBES
              </motion.span>

              <h1 className="page-title" style={{ marginBottom: '20px' }}>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>Wardrobes Built</motion.span>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>Around the Way</motion.span>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block' }}>You Live</motion.span>
              </h1>

              <motion.p
                variants={heroTextItemVariants}
                className="hero-description"
                style={{ margin: '0 auto', textAlign: 'center', color: 'var(--color-body)', marginBottom: '32px' }}
              >
                Custom-designed, in-house manufactured wardrobes that bring the same premium standard as our kitchens to every corner of your home.
              </motion.p>

              <motion.div variants={heroTextItemVariants}>
                <a
                  href="/talk-to-us"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/talk-to-us');
                    window.dispatchEvent(new Event('popstate'));
                  }}
                  className="btn btn-primary"
                >
                  Book a Wardrobe Consultation
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: FULL-HEIGHT EDGE-TO-EDGE WARDROBE IMAGE (~50%) --- */}
          <div
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '100vh',
              width: '100%',
              overflow: 'hidden',
              backgroundColor: '#181818',
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageRevealVariants}
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transform: `translateY(${parallaxY}px)`,
                willChange: 'transform, clip-path',
              }}
            >
              <img
                src={images.modularWardrobeHero}
                alt="LEOZ CUCINE Architectural Modular Wardrobe"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
              />
              {/* Subtle Ambient Vignette Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, transparent 60%, rgba(24, 24, 24, 0.3) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2: CATEGORY INTRODUCTION
           ========================================================================== */}
        <section
          aria-label="Modular Wardrobe Category Introduction"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-light)',
            color: 'var(--color-text-dark)',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
              }}
              className="mw-intro-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(40px, 6vw, 100px)',
                alignItems: 'center',
              }}
            >
              {/* Image Left Column — enters sliding in from the left */}
              <motion.div
                variants={fromLeftVariants}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(400px, 55vh, 640px)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid var(--color-border-gold)',
                }}
              >
                <ParallaxImage yOffset={30}>
                  <img
                    src={images.wardrobePhilosophy}
                    alt="LEOZ Architectural Modular Wardrobe Detail"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ParallaxImage>
              </motion.div>

              {/* Text Right Column — enters sliding in from the right */}
              <motion.div variants={fromRightVariants}>
                <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>
                  INTRODUCTION
                </span>

                <motion.h2
                  variants={headingMaskVariant}
                  className="section-title"
                  style={{ marginBottom: '20px', willChange: 'clip-path' }}
                >
                  More Than Storage — A Considered Part of Your Home
                </motion.h2>

                <p className="description" style={{ marginBottom: 0 }}>
                  A wardrobe should be as thoughtfully designed as any other feature of your home. At LEOZ Cucine, we design wardrobes around your space, your storage needs, and your style — then manufacture and install them ourselves.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.5: CUSTOMIZED WARDROBES
           ========================================================================== */}
        <section
          aria-label="Customized Wardrobes"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-dark)',
            color: 'var(--color-text-primary)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                CUSTOMIZED WARDROBES
              </motion.span>

              <motion.h2 variants={staggerItem} className="section-title text-white" style={{ marginBottom: '20px' }}>
                Maximize Your Space, Elevate Your Room
              </motion.h2>

              <motion.p variants={staggerItem} className="description" style={{ margin: '0 auto', color: 'var(--color-text-secondary)' }}>
                Maximize your space with our innovative wardrobe designs. Tailored to your needs, our wardrobes combine practicality with elegance, ensuring optimal storage and a clutter-free environment.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.6: WARDROBE STYLES & COLLECTIONS
           ========================================================================== */}
        <section
          aria-label="Wardrobe Styles & Collections"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-light)',
            color: 'var(--color-text-dark)',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>WARDROBE COLLECTIONS</span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Find Your Wardrobe Style.
              </motion.h2>
            </div>

            <div
              className="mw-styles-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {[
                { title: 'Sliding Wardrobes', description: 'Space-efficient designs ideal for compact bedrooms, with smooth, durable sliding mechanisms.' },
                { title: 'Hinged Wardrobes', description: 'Classic, spacious wardrobes with full access — customizable in finish and internal layout.' },
                { title: 'Walk-In Wardrobes', description: 'Premium walk-in storage solutions for larger spaces, designed for organization and display.' },
              ].map((style, idx) => {
                /* Card 1 enters from the right, card 2 from below, card 3 from the left */
                const cardOffset = idx === 0 ? { x: 80 } : idx === 2 ? { x: -80 } : { y: 60 };
                return (
                  <motion.div
                    key={style.title}
                    initial={{ opacity: 0, x: 0, y: 0, ...cardOffset }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: idx * 0.08, ease: luxuryEase }}
                    style={{
                      padding: 'clamp(32px, 3.5vw, 44px)',
                      backgroundColor: 'var(--color-surface-stone)',
                      border: '1px solid var(--color-border-gold)',
                      borderRadius: 'var(--radius-sm)',
                      boxShadow: 'var(--shadow-subtle)',
                    }}
                  >
                    <h3 className="sub-title" style={{ marginBottom: '12px' }}>{style.title}</h3>
                    <p className="description" style={{ margin: 0 }}>{style.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.7: MATERIALS & FINISHES (SPECIFICATIONS)
           ========================================================================== */}
        <section
          aria-label="Materials & Finishes Specifications"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#202020',
            color: 'var(--color-text-primary)',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>MATERIALS &amp; FINISHES</span>
            <motion.h2 
              className="section-title text-white" 
              style={{ marginBottom: '40px' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Built for Performance. Finished for Life.
            </motion.h2>

            <div
              className="mw-fusion-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '14px',
                textAlign: 'left',
              }}
            >
              {[
                'Engineered wood and marine-grade plywood construction',
                'Laminate, veneer, acrylic and PU finish options',
                'Premium German-grade sliding and hinge hardware for long-term durability',
                'Internal organizers — drawers, shelves, trouser racks, accessory units',
              ].map((item, idx) => {
                /* Item 1 from top, item 2 from bottom, item 3 from left, item 4 from right */
                const lineOffset = [{ y: -60 }, { y: 60 }, { x: -60 }, { x: 60 }][idx] || {};
                return (
                  <motion.div
                    key={item}
                    className="mw-check-row"
                    initial={{ opacity: 0, x: 0, y: 0, ...lineOffset }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '14px 18px',
                      borderLeft: '3px solid var(--color-accent-gold)',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    <div
                      className="mw-check-badge"
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(182, 154, 107, 0.15)',
                        color: '#B69A6B',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={13} strokeWidth={2.5} />
                    </div>
                    <span className="small-description" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.8: WHY OUR WARDROBES STAND APART
           ========================================================================== */}
        <section
          aria-label="Why Our Wardrobes Stand Apart"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-stone)',
            color: 'var(--color-text-dark)',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>WHY LEOZ WARDROBES</span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Why Our Wardrobes Stand Apart.
              </motion.h2>
            </div>

            <div
              className="mw-pillar-list"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {[
                { icon: Factory, title: 'Designed & Manufactured In-House', description: 'Designed and manufactured at our own factory.' },
                { icon: Compass, title: 'German Design Precision', description: 'German design precision reflected in finish and detailing.' },
                { icon: Clock, title: '20+ Years of Experience', description: '20+ years of manufacturing experience.' },
                { icon: ShieldCheck, title: 'Comprehensive Warranty', description: 'Comprehensive warranty on materials and workmanship.' },
                { icon: Wrench, title: 'In-House Installation', description: 'Installed by our own trained team, not outsourced labor.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="mw-pillar-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                    whileHover={{
                      x: 6,
                      borderColor: 'rgba(182, 154, 107, 0.5)',
                      boxShadow: '0 14px 34px -14px rgba(182, 154, 107, 0.28)',
                      transition: { duration: 0.3, ease: luxuryEase },
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      textAlign: 'left',
                      padding: 'clamp(20px, 2.4vw, 28px)',
                      backgroundColor: 'var(--color-surface-light)',
                      border: '1px solid var(--color-border-gold)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div
                      className="mw-pillar-icon"
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(182, 154, 107, 0.12)',
                        color: '#B69A6B',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="sub-title" style={{ fontSize: '18px', marginBottom: '4px' }}>{item.title}</h3>
                      <p className="small-description" style={{ margin: 0 }}>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.9: OUR PROCESS
           ========================================================================== */}
        <section
          aria-label="Our Process"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-dark)',
            color: 'var(--color-text-primary)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>OUR PROCESS</span>
              <motion.h2 
                className="section-title text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                From Consultation to Installation.
              </motion.h2>
            </div>

            <div className="mw-process-grid">
              <div className="mw-process-line" aria-hidden="true" />
              {[
                { step: '01', title: 'Space Assessment & Measurement', desc: 'We assess your space and take precise measurements.' },
                { step: '02', title: 'Custom Design', desc: 'A design based on your storage needs.' },
                { step: '03', title: 'Material & Finish Selection', desc: 'Choose the materials and finishes that suit you.' },
                { step: '04', title: 'In-House Manufacturing', desc: 'Your wardrobe is built at our own factory.' },
                { step: '05', title: 'Professional Installation', desc: 'Installed by our own in-house team.' },
                { step: '06', title: 'Final Quality Inspection', desc: 'A final check to ensure everything is right.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  className="mw-process-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    className="mw-process-number"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--color-surface-dark)',
                      border: '2px solid var(--color-accent)',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-family-sans)',
                      fontWeight: 700,
                      fontSize: '14px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {item.step}
                  </span>
                  <h3 className="sub-title text-white" style={{ fontSize: '16px', margin: 0 }}>{item.title}</h3>
                  <p className="small-description" style={{ color: 'var(--color-text-secondary)', margin: 0 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <style>{`
            .mw-process-grid {
              position: relative;
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              gap: clamp(12px, 2vw, 20px);
              row-gap: clamp(36px, 5vw, 56px);
            }
            .mw-process-line {
              position: absolute;
              top: 20px;
              left: calc(100% / 12);
              right: calc(100% / 12);
              height: 1px;
              background: var(--color-border-gold-medium);
              z-index: 0;
            }
            @media (max-width: 1279px) {
              .mw-process-grid {
                grid-template-columns: repeat(3, 1fr);
              }
              .mw-process-line {
                display: none;
              }
            }
            @media (max-width: 767px) {
              .mw-process-grid {
                grid-template-columns: 1fr;
                gap: 28px;
              }
            }
          `}</style>
        </section>

        {/* ==========================================================================
           SECTION 2.10: FAQ
           ========================================================================== */}
        <section
          aria-label="Frequently Asked Questions"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-light)',
            color: 'var(--color-text-dark)',
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>FAQ</span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  q: 'Can wardrobes be customized for irregular room shapes?',
                  a: 'Yes, every wardrobe is designed to fit your exact space and dimensions.',
                },
                {
                  q: 'What internal storage options are available?',
                  a: 'Drawers, shelves, trouser racks, jewelry units, and shoe racks can all be included based on your needs.',
                },
                {
                  q: 'What warranty applies to wardrobes?',
                  a: 'A comprehensive 10-year warranty covering manufacturing defects and hardware performance.',
                },
                {
                  q: 'Do you handle both design and installation?',
                  a: 'Yes, our in-house team manages the entire process from design through installation.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                  style={{
                    padding: 'clamp(24px, 3vw, 32px)',
                    backgroundColor: 'var(--color-surface-stone)',
                    border: '1px solid var(--color-border-gold)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <h3 className="sub-title" style={{ fontSize: '19px', marginBottom: '10px' }}>{item.q}</h3>
                  <p className="description" style={{ margin: 0 }}>{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 6: LEAD ENQUIRY CTA
           ========================================================================== */}
        <section
          id="contact"
          aria-label="Request Design Consultation"
          style={{
            position: 'relative',
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#181818',
            color: '#FFFFFF',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Subtle Ambient Background Vignette */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 0.15, scale: 1.00 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, ease: luxuryEase }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images.consultationBg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              pointerEvents: 'none',
              willChange: 'transform, opacity',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(24,24,24,0.6) 0%, rgba(24,24,24,0.98) 100%)',
              pointerEvents: 'none',
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '820px',
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <motion.h2
              variants={staggerItem}
              className="section-title text-white"
              style={{ marginBottom: '20px' }}
            >
              Ready to Design Your Wardrobe?
            </motion.h2>

            <motion.div
              variants={staggerItem}
            >
              <a
                href="/talk-to-us"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/talk-to-us');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="btn btn-light"
              >
                Book a Wardrobe Consultation
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* EXTRA SECTIONS (not part of current spec) — disabled, kept for reference. Remove `false &&` to re-enable. */}
        {false && (
        <>
        {/* ==========================================================================
           SECTION 3: WARDROBE TYPES (3 CARDS GRID)
           ========================================================================== */}
        <section
          aria-label="Wardrobe Solutions"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-dark)',
            color: 'var(--color-text-primary)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 110px)' }}
            >
              <motion.span
                variants={staggerItem}
                style={{
                  fontFamily: 'var(--font-family-sans)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#B69A6B',
                  display: 'block',
                  marginBottom: 'var(--space-4)',
                }}
              >
                OUR WARDROBES
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="section-title"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Explore Our Wardrobes.
              </motion.h2>
            </motion.div>

            {/* Responsive Grid Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mw-layouts-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(32px, 4vw, 54px)',
              }}
            >
              {layouts.map((layout) => (
                <motion.article
                  key={layout.id}
                  variants={staggerItem}
                  className="layout-card"
                  style={{
                    backgroundColor: 'var(--color-surface-card)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 400ms var(--motion-ease-luxury), box-shadow 400ms var(--motion-ease-luxury)',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      height: '320px',
                      overflow: 'hidden',
                    }}
                  >
                    <ParallaxImage yOffset={30}>
                      <img
                        src={layout.image}
                        alt={layout.title}
                        loading="lazy"
                        className="layout-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 800ms var(--motion-ease-luxury)',
                        }}
                      />
                    </ParallaxImage>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 50%, rgba(24, 24, 24, 0.8) 100%)',
                      }}
                    />
                  </div>

                  <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        color: '#B69A6B',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {layout.subtitle}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-family-serif)',
                        fontSize: 'clamp(24px, 2vw, 30px)',
                        fontWeight: 400,
                        color: 'var(--color-text-primary)',
                        marginBottom: '12px',
                      }}
                    >
                      {layout.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 300,
                        lineHeight: '1.65',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {layout.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <style>{`
            .layout-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 16px 40px -10px rgba(24, 24, 24, 0.4);
            }
            .layout-card:hover .layout-img {
              transform: scale(1.04);
            }
          `}</style>
        </section>



        {/* ==========================================================================
           SECTION 5: FINISH & DOOR STYLE OPTIONS (8 CARDS)
           ========================================================================== */}
        <section
          aria-label="Finishes & Door Styles Showcase"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#202020',
            color: 'var(--color-text-primary)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 110px)' }}
            >
              <motion.span
                variants={staggerItem}
                style={{
                  fontFamily: 'var(--font-family-sans)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#B69A6B',
                  display: 'block',
                  marginBottom: 'var(--space-4)',
                }}
              >
                FINISH GALLERY
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="section-title"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Finishes &amp; Door Styles.
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mw-materials-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {materials.map((mat) => (
                <motion.div
                  key={mat.title}
                  variants={staggerItem}
                  className="material-card"
                  style={{
                    position: 'relative',
                    height: '360px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-surface-card)',
                    border: '1px solid var(--color-border-gold)',
                  }}
                >
                  <ParallaxImage yOffset={30}>
                    <img
                      src={mat.image}
                      alt={mat.title}
                      loading="lazy"
                      className="material-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 800ms var(--motion-ease-luxury)',
                      }}
                    />
                  </ParallaxImage>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(24, 24, 24, 0.2) 0%, rgba(24, 24, 24, 0.9) 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '28px 24px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-family-serif)',
                        fontSize: 'clamp(20px, 1.8vw, 26px)',
                        fontWeight: 400,
                        color: 'var(--color-text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      {mat.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '12px',
                        fontWeight: 300,
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {mat.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <style>{`
            .material-card:hover .material-img {
              transform: scale(1.04);
            }
          `}</style>
        </section>

        {/* ==========================================================================
           SECTION 5B: INTERIOR (PLAIN VISUAL LABELS)
           ========================================================================== */}
        <section
          aria-label="Wardrobe Interior"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-stone)',
            color: 'var(--color-text-dark)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 110px)' }}>
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>
                DESIGNED INSIDE &amp; OUT
              </span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                A Place for Everything.
              </motion.h2>
            </div>

            <div
              className="mw-interior-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {[
                'Hanging Space',
                'Shelving',
                'Drawers',
                'Shoe Storage',
                'Accessory Trays',
                'Trouser Racks',
                'Integrated Lighting',
              ].map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.06, ease: luxuryEase }}
                  style={{
                    padding: '28px 20px',
                    textAlign: 'center',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <span className="sub-title" style={{ fontSize: '18px' }}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </>
        )}

      </main>

      {/* FOOTER */}
      <Footer />
      <style>{`
        @media (max-width: 1023px) {
          .hero-split-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: auto !important;
            width: 100% !important;
          }
          .hero-split-container > div:first-of-type {
            padding: 110px 24px 40px 24px !important;
            min-height: auto !important;
            order: 1 !important;
          }
          .hero-split-container > div:last-of-type {
            min-height: 360px !important;
            height: 45vh !important;
            order: 2 !important;
          }
        }
        @media (max-width: 767px) {
          .mw-intro-grid {
            display: flex !important;
            flex-direction: column-reverse !important;
            gap: 28px !important;
          }
          .mw-layouts-grid, .mw-materials-grid, .mw-interior-grid, .mw-fusion-grid, .mw-styles-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .mw-layouts-grid, .mw-materials-grid, .mw-interior-grid, .mw-styles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Materials & Finishes checklist rows */
        .mw-check-row {
          transition: transform 0.3s var(--motion-ease-luxury), background-color 0.3s ease, border-left-color 0.3s ease;
        }
        .mw-check-row:hover {
          transform: translateX(4px);
          background-color: rgba(182, 154, 107, 0.08);
          border-left-color: var(--color-accent-gold-hover);
        }
        .mw-check-badge {
          transition: transform 0.3s var(--motion-ease-luxury);
        }
        .mw-check-row:hover .mw-check-badge {
          transform: scale(1.1);
        }

        /* Why Leoz Wardrobes feature-list rows */
        .mw-pillar-icon {
          transition: transform 0.35s var(--motion-ease-luxury), background-color 0.35s ease;
        }
        .mw-pillar-row:hover .mw-pillar-icon {
          transform: scale(1.1);
          background-color: rgba(182, 154, 107, 0.22);
        }
        @media (max-width: 479px) {
          .mw-pillar-row {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px !important;
          }
          .mw-pillar-row > div:last-child {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ModularWardrobes;
