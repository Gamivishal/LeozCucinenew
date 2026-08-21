import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

/* Easing curve token */
const luxuryEase = [0.16, 1, 0.3, 1];

/* Stagger animation variants for Left Column Content */
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

const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.03, clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: luxuryEase, delay: 0.1 }
  }
};

export const ModularKitchens: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useDocumentMeta(
    'Premium Kitchens | Leoz Cucine',
    'Thoughtfully planned kitchens with refined finishes and intelligent storage.'
  );

  // Parallax transform calculation for Hero image
  const parallaxY = Math.min(scrollY * 0.15, 120);

  /* Layout Cards Data (5 Types) */
  const layouts = [
    {
      id: 'l-shape',
      title: 'L-Shape Layout',
      subtitle: 'Corner wall layout',
      description: 'Works well in open-plan spaces, providing easy access to the sink and stove while leaving the center area open.',
      image: images.layouts.lShape
    },
    {
      id: 'u-shape',
      title: 'U-Shape Layout',
      subtitle: 'Three-wall workspace',
      description: 'Surrounds you on three sides for an efficient work triangle with maximum counter space and storage.',
      image: images.layouts.uShape
    },
    {
      id: 'island',
      title: 'Island Layout',
      subtitle: 'Central island counter',
      description: 'Combines a wall kitchen setup with a freestanding center counter for extra preparation space and seating.',
      image: '/Island Layout.png'
    },
    {
      id: 'parallel',
      title: 'Parallel Layout',
      subtitle: 'Double-wall layout',
      description: 'A classic galley design with counters on opposing walls, commonly used to keep cooking steps short.',
      image: images.layouts.parallel
    },
    {
      id: 'straight',
      title: 'Straight Layout',
      subtitle: 'Single-wall layout',
      description: 'Fits all appliances and cabinets on a single wall. Useful for studio apartments or narrow spaces.',
      image: '/Straight Layout.png'
    },
    {
      id: 'contemporary',
      title: 'Contemporary',
      subtitle: 'Clean lines, modern finish',
      description: 'Minimal lines and sophisticated finishes for a modern, uncluttered look.',
      image: images.materials.woodVeneer
    },
    {
      id: 'handleless',
      title: 'Handleless',
      subtitle: 'Seamless push-to-open fronts',
      description: 'Clean, uninterrupted surfaces with integrated push-to-open profiles.',
      image: images.materials.matte
    }
  ];

  /* Finishes & Materials (7 Categories) */
  const materials = [
    { title: 'Matte Finish', detail: 'Soft-touch, fingerprint-resistant.', image: images.materials.matte },
    { title: 'Gloss Finish', detail: 'Reflective, high-shine surface.', image: images.materials.gloss },
    { title: 'Wood Veneer', detail: 'Natural oak and walnut tones.', image: images.materials.woodVeneer },
    { title: 'Marble', detail: 'Natural stone worktops.', image: '/Italian Marble.png' },
    { title: 'Quartz Stone', detail: 'Durable engineered worktops.', image: images.materials.quartz },
    { title: 'Glass Vitrines', detail: 'Fluted glass cabinet doors.', image: images.materials.glass },
    { title: 'Metal Accents', detail: 'Anodized handles and trim.', image: '/Metal Accents.png' }
  ];

  return (
    <div className="page-modular-kitchens" style={{ backgroundColor: 'var(--color-surface-dark)', color: 'var(--color-text-primary)' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        {/* ==========================================================================
           SECTION 1: 50/50 SPLIT-SCREEN 100VH HERO (REFERENCE STRUCTURE & UX)
           ========================================================================== */}
        <section
          id="hero"
          aria-label="Modular Kitchens Split Hero"
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
          {/* --- LEFT COLUMN: FULL-HEIGHT EDGE-TO-EDGE KITCHEN IMAGE (~50%) --- */}
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
                src={images.modularKitchenHero}
                alt="LEOZ CUCINE Architectural Modular Kitchen"
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

          {/* --- RIGHT COLUMN: EDITORIAL TYPOGRAPHY MATCHING REFERENCE IMAGE & LEOZ BRAND STACK --- */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '80px clamp(32px, 5vw, 60px)',
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
              <motion.span variants={itemVariants} className="section-label" style={{ marginBottom: '16px' }}>
                LEOZ KITCHENS
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="page-title"
                style={{ marginBottom: '20px' }}
              >
                Designed for Cooking. Made for Living.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="hero-description"
                style={{ margin: '0 auto', textAlign: 'center', color: 'var(--color-body)' }}
              >
                Thoughtfully planned kitchens with refined finishes and intelligent storage.
              </motion.p>
            </motion.div>
          </div>

          {/* Responsive CSS Overrides for Split Layout */}
          <style>{`
            @media (max-width: 1023px) {
              .hero-split-container {
                display: flex !important;
                flex-direction: column !important;
                min-height: auto !important;
                width: 100% !important;
              }
              .hero-split-container > div:first-child {
                min-height: 360px !important;
                height: 45vh !important;
                order: 2 !important;
              }
              .hero-split-container > div:last-child {
                padding-top: 110px !important;
                padding-bottom: 40px !important;
                padding-left: clamp(20px, 4vw, 40px) !important;
                padding-right: clamp(20px, 4vw, 40px) !important;
                order: 1 !important;
              }
            }
          `}</style>
        </section>

        {/* ==========================================================================
           SECTION 2: PHILOSOPHY
           ========================================================================== */}
        <section
          aria-label="Modular Kitchen Philosophy"
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
              className="mk-intro-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(40px, 6vw, 100px)',
                alignItems: 'center',
              }}
            >
              {/* Text Left Column */}
              <motion.div variants={itemVariants}>
                <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                  INTRODUCTION
                </span>

                <motion.h2
                  variants={headingMaskVariant}
                  className="section-title"
                  style={{ marginBottom: '20px', willChange: 'clip-path' }}
                >
                  Your Kitchen. Your Way.
                </motion.h2>

                <p className="description" style={{ marginBottom: 0 }}>
                  Every kitchen is designed around your space, lifestyle and daily routine.
                </p>
              </motion.div>

              {/* Image Right Column */}
              <motion.div
                variants={itemVariants}
                style={{
                  position: 'relative',
                  height: 'clamp(400px, 55vh, 640px)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid var(--color-border-gold)',
                }}
              >
                <ParallaxImage yOffset={30}>
                  <img
                    src="/Metal Accents.png"
                    alt="LEOZ Architectural Modular Kitchen Detail"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ParallaxImage>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 3: KITCHEN LAYOUTS (5 CARDS GRID)
           ========================================================================== */}
        <section
          aria-label="Kitchen Layouts Architecture"
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
            <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 110px)' }}>
              <span
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
                OUR KITCHENS
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                className="section-title"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Explore Our Kitchens.
              </motion.h2>
            </div>

            {/* Responsive Grid Layout */}
            <div
              className="mk-layouts-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(32px, 4vw, 54px)',
              }}
            >
              {layouts.map((layout, idx) => (
                <motion.article
                  key={layout.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
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
            </div>
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
           SECTION 4: FINISHES & MATERIALS (7 CATEGORIES)
           ========================================================================== */}
        <section
          aria-label="Finishes & Materials Showcase"
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
            <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 110px)' }}>
              <span
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
                MATERIALS &amp; FINISHES
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                className="section-title"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Materials That Define the Space.
              </motion.h2>
              <p className="description" style={{ margin: '20px auto 0', color: 'var(--color-text-secondary)' }}>
                A considered mix of textures, tones and finishes makes every kitchen personal.
              </p>
            </div>

            <div
              className="mk-materials-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {materials.map((mat, idx) => (
                <motion.div
                  key={mat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
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
            </div>
          </div>

          <style>{`
            .material-card:hover .material-img {
              transform: scale(1.04);
            }
          `}</style>
        </section>

        {/* ==========================================================================
           SECTION 5: FEATURES (PLAIN VISUAL LABELS)
           ========================================================================== */}
        <section
          aria-label="Kitchen Features"
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
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                THOUGHTFULLY PLANNED
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                className="section-title"
              >
                Everything in Its Place.
              </motion.h2>
            </div>

            <div
              className="mk-features-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {[
                'Smart Storage',
                'Integrated Appliances',
                'Premium Hardware',
                'Internal Organisers',
                'Ambient Lighting',
                'Refined Finishes',
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

        {/* ==========================================================================
           SECTION 7: NEW PREMIUM EDITORIAL CTA SECTION
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
              Ready to Plan Your Kitchen?
            </motion.h2>

            {/* 4. Single Premium Button */}
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
                Book a Design Consultation
              </a>
            </motion.div>
          </motion.div>

        </section>
      </main>

      <Footer />
      <style>{`
        @media (max-width: 1023px) {
          .hero-split-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: auto !important;
            width: 100% !important;
          }
          .hero-split-container > div:first-child {
            min-height: 360px !important;
            height: 45vh !important;
            order: 2 !important;
          }
          .hero-split-container > div:last-child {
            padding: 110px 24px 40px 24px !important;
            min-height: auto !important;
            order: 1 !important;
          }
        }
        @media (max-width: 767px) {
          .mk-intro-grid, .mk-layouts-grid, .mk-materials-grid, .mk-features-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .mk-layouts-grid, .mk-materials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .mk-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ModularKitchens;
