import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Check, Factory, Compass, Clock, ShieldCheck, Wrench } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase }
  }
};

const staggerContainer = containerVariants;
const staggerItem = itemVariants;


/* Hero image sits on the LEFT, so it enters from the RIGHT (opposite side) */
const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.03, x: 70, clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: luxuryEase, delay: 0.1 }
  }
};

/* Hero text sits on the RIGHT, so it enters from the LEFT (opposite side) */
const heroTextItemVariants = {
  hidden: { opacity: 0, x: -60 },
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

/* ==========================================================================
   OUR PROCESS — vertical timeline (replaces the auto-fit grid, which broke
   into a mismatched 4+2 layout on tablet/small-laptop widths)
   ========================================================================== */
const ProcessTimelineSection: React.FC = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const timelineProgressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    { step: '01', title: 'Site Visit & Measurement', desc: 'We visit your space and take precise measurements.' },
    { step: '02', title: 'Custom Layout & 3D Design', desc: 'A layout and 3D design tailored to your space.' },
    { step: '03', title: 'Material & Finish Selection', desc: 'Choose the materials and finishes that suit you.' },
    { step: '04', title: 'In-House Manufacturing', desc: 'Your kitchen is built at our own factory.' },
    { step: '05', title: 'Professional Installation', desc: 'Installed by our own in-house team.' },
    { step: '06', title: 'Post-Installation Quality Check', desc: 'A final check to ensure everything is right.' },
  ];

  return (
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
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>OUR PROCESS</span>
          <motion.h2
            className="section-title text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>From Consultation</motion.span>
            <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>to Installation.</motion.span>
          </motion.h2>
        </div>

        <div ref={timelineRef} className="mk-timeline">
          <div className="mk-timeline-track" aria-hidden="true" />
          <motion.div
            className="mk-timeline-progress"
            style={{ height: timelineProgressHeight }}
            aria-hidden="true"
          />

          {steps.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.step}
                className={`mk-timeline-row ${isLeft ? 'is-left' : 'is-right'}`}
              >
                <motion.div
                  className="mk-timeline-content"
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: luxuryEase }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {item.step}
                  </span>
                  <h3 className="sub-title text-white" style={{ marginBottom: '8px' }}>{item.title}</h3>
                  <p className="small-description" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </motion.div>

                <motion.span
                  className="mk-timeline-dot"
                  initial={{ backgroundColor: 'var(--color-surface-dark)', scale: 0.7 }}
                  whileInView={{ backgroundColor: '#B69A6B', scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .mk-timeline {
          position: relative;
          padding: 12px 0;
        }
        .mk-timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--color-border-gold-medium);
          transform: translateX(-50%);
        }
        .mk-timeline-progress {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          background: var(--color-accent);
          transform: translateX(-50%);
          transform-origin: top;
        }
        .mk-timeline-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 32px 1fr;
          align-items: center;
          column-gap: clamp(24px, 4vw, 56px);
          padding: clamp(24px, 3.5vw, 40px) 0;
        }
        .mk-timeline-row.is-left .mk-timeline-content {
          grid-column: 1;
          text-align: right;
        }
        .mk-timeline-row.is-right .mk-timeline-content {
          grid-column: 3;
          text-align: left;
        }
        .mk-timeline-dot {
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
          .mk-timeline-row {
            grid-template-columns: 1fr 20px 1fr;
            column-gap: clamp(10px, 3.5vw, 18px);
            padding: clamp(18px, 5vw, 28px) 0;
          }
          .mk-timeline-dot {
            width: 10px;
            height: 10px;
          }
          .mk-timeline-content .sub-title {
            font-size: 18px;
            margin-bottom: 6px !important;
          }
          .mk-timeline-content .small-description {
            font-size: 12.5px;
            line-height: 1.5;
          }
        }

        @media (max-width: 420px) {
          .mk-timeline-row {
            grid-template-columns: 1fr 16px 1fr;
            column-gap: 8px;
          }
          .mk-timeline-dot {
            width: 9px;
            height: 9px;
          }
          .mk-timeline-content .sub-title {
            font-size: 16px;
          }
          .mk-timeline-content .small-description {
            font-size: 11.5px;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
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
                LEOZ KITCHENS
              </motion.span>

              <h1 className="page-title" style={{ marginBottom: '20px' }}>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>Modular Kitchens,</motion.span>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>Designed Around</motion.span>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block' }}>Your Life</motion.span>
              </h1>

              <motion.p
                variants={heroTextItemVariants}
                className="hero-description"
                style={{ margin: '0 auto', textAlign: 'center', color: 'var(--color-body)', marginBottom: '32px' }}
              >
                Experience German Precision – Premium Modular Kitchens from Design to Installation.
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
                  Book a Kitchen Consultation
                </a>
              </motion.div>
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
              .hero-split-container > div:first-of-type {
                min-height: 360px !important;
                height: 45vh !important;
                order: 1 !important;
              }
              .hero-split-container > div:last-of-type {
                padding-top: clamp(40px, 8vw, 60px) !important;
                padding-bottom: clamp(40px, 8vw, 60px) !important;
                padding-left: clamp(20px, 4vw, 40px) !important;
                padding-right: clamp(20px, 4vw, 40px) !important;
                order: 2 !important;
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
              {/* Text Left Column — enters sliding in from the right */}
              <motion.div variants={fromRightVariants}>
                <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>
                  INTRODUCTION
                </span>

                <motion.h2
                  className="section-title"
                  style={{ marginBottom: '20px' }}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>A Kitchen Should</motion.span>
                  <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Work as Beautifully as It Looks</motion.span>
                </motion.h2>

                <p className="description" style={{ marginBottom: 0 }}>
                  At LEOZ Cucine, every modular kitchen is designed for the way you cook, store, and gather — then finished to a standard that feels considered in every detail, from cabinet edges to hardware.
                </p>
              </motion.div>

              {/* Image Right Column — enters sliding in from the left */}
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
           SECTION 2.5: MODULAR KITCHENS — GERMAN PRECISION, INDIAN SENSIBILITY
           ========================================================================== */}
        <section
          aria-label="Modular Kitchens"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-surface-dark)',
            color: 'var(--color-text-primary)',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                MODULAR KITCHENS
              </motion.span>

              <h2 className="section-title text-white" style={{ marginBottom: '20px' }}>
                <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>German Precision,</motion.span>
                <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Indian Sensibility</motion.span>
              </h2>

              <motion.p variants={staggerItem} className="description" style={{ margin: '0 auto 40px', color: 'var(--color-text-secondary)' }}>
                Our kitchens blend German-grade hardware with Indian sensibilities, offering a smart fusion of:
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="mk-fusion-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  textAlign: 'left',
                  marginBottom: '40px',
                }}
              >
                {(() => {
                  const fusionItems = [
                    'Ergonomic Flow',
                    'Ample Storage',
                    'Easy Maintenance',
                    'Moisture-resistant carcass and finishes',
                    'Customizable layouts',
                  ];
                  return fusionItems.map((item, idx) => {
                    const isOrphan = fusionItems.length % 2 !== 0 && idx === fusionItems.length - 1;
                    return (
                      <motion.div
                        key={item}
                        className="mk-check-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '16px 18px',
                          border: '1px solid var(--color-border-gold)',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          gridColumn: isOrphan ? '1 / -1' : undefined,
                        }}
                      >
                        <div
                          className="mk-check-icon"
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(182, 154, 107, 0.15)',
                            color: '#B69A6B',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                        <span className="small-description" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                      </motion.div>
                    );
                  });
                })()}
              </motion.div>

              <motion.p variants={staggerItem} className="description" style={{ margin: '0 auto', color: 'var(--color-text-secondary)' }}>
                Whether you're a gourmet chef or a minimalist, a LEOZ kitchen is crafted to perform flawlessly and remain timeless.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.6: KITCHEN STYLES & COLLECTIONS
           ========================================================================== */}
        <section
          aria-label="Kitchen Styles & Collections"
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
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>KITCHEN COLLECTIONS</span>
              <motion.h2 
                className="section-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>Find Your</motion.span>
                <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Kitchen Style.</motion.span>
              </motion.h2>
            </div>

            <div
              className="mk-styles-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {[
                { title: 'Modern Minimalist', description: 'Clean lines, handle-less shutters, and a restrained material palette for a contemporary look.' },
                { title: 'German Classic', description: 'Precision-engineered cabinetry and refined finishes inspired by German kitchen design.' },
                { title: 'Contemporary Fusion', description: "A balance of bold and understated — built for Gujarati households that entertain often." },
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>Built for Performance.</motion.span>
              <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Finished for Life.</motion.span>
            </motion.h2>

            <div
              className="mk-fusion-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                textAlign: 'left',
              }}
            >
              {[
                'High-grade marine plywood and engineered wood carcasses',
                'Premium laminate, acrylic, and PU finish options',
                'German-grade hardware for smooth, long-lasting function',
                "Anti-scratch, moisture-resistant surfaces suited to Gujarat's climate",
              ].map((item, idx) => {
                /* Item 1 from top, item 2 from bottom, item 3 from left, item 4 from right */
                const lineOffset = [{ y: -60 }, { y: 60 }, { x: -60 }, { x: 60 }][idx] || {};
                return (
                  <motion.div
                    key={item}
                    className="mk-check-card"
                    initial={{ opacity: 0, x: 0, y: 0, ...lineOffset }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '16px 18px',
                      border: '1px solid var(--color-border-gold)',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    <div
                      className="mk-check-icon"
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(182, 154, 107, 0.15)',
                        color: '#B69A6B',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span className="small-description" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.8: WHY OUR KITCHENS STAND APART
           ========================================================================== */}
        <section
          aria-label="Why Our Kitchens Stand Apart"
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
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>WHY LEOZ KITCHENS</span>
              <motion.h2 
                className="section-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>Why Our Kitchens</motion.span>
                <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Stand Apart.</motion.span>
              </motion.h2>
            </div>

            <div
              className="mk-standapart-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 'clamp(20px, 2.4vw, 28px)',
              }}
            >
              {[
                { icon: Factory, title: 'Manufactured In-House', description: 'Manufactured entirely at our own factory — no outsourced production.' },
                { icon: Compass, title: 'German Precision', description: 'German design and hardware precision.' },
                { icon: Clock, title: '20+ Years of Experience', description: '20+ years of manufacturing experience.' },
                { icon: ShieldCheck, title: 'Comprehensive Warranty', description: 'Comprehensive warranty on materials and workmanship.' },
                { icon: Wrench, title: 'In-House Installation', description: 'In-house installation team, not third-party contractors.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="mk-pillar-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                    whileHover={{
                      y: -8,
                      borderColor: 'rgba(182, 154, 107, 0.5)',
                      boxShadow: '0 18px 40px -14px rgba(182, 154, 107, 0.28)',
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
                      backgroundColor: 'var(--color-surface-light)',
                      border: '1px solid var(--color-border-gold)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-subtle)',
                    }}
                  >
                    <span className="mk-pillar-card-bar" aria-hidden="true" />
                    <div
                      className="mk-pillar-icon"
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
                      }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="sub-title" style={{ fontSize: '18px', margin: 0 }}>{item.title}</h3>
                    <p className="small-description" style={{ margin: 0 }}>{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.9: OUR PROCESS
           ========================================================================== */}
        <ProcessTimelineSection />

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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>Frequently</motion.span>
                <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>Asked</motion.span>
                <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Questions</motion.span>
              </motion.h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  q: 'How long does a modular kitchen installation take?',
                  a: 'Standard installation typically takes 4 to 6 weeks from the date of final design approval.',
                },
                {
                  q: 'Do you offer customization for non-standard kitchen spaces?',
                  a: 'Yes, all our kitchens are custom-designed to fit your specific layout and dimensions.',
                },
                {
                  q: 'What warranty do you offer on kitchens?',
                  a: 'We offer a 10-year warranty covering material integrity and hardware function.',
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
            <h2
              className="section-title text-white"
              style={{ marginBottom: '20px' }}
            >
              <motion.span variants={staggerItem} style={{ display: 'inline-block', marginRight: '0.25em' }}>Ready to Design</motion.span>
              <motion.span variants={staggerItem} style={{ display: 'inline-block' }}>Your Kitchen?</motion.span>
            </h2>

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
                Book a Free Design Consultation
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
          .hero-split-container > div:first-of-type {
            min-height: 360px !important;
            height: 45vh !important;
            order: 1 !important;
          }
          .hero-split-container > div:last-of-type {
            padding-top: clamp(40px, 8vw, 60px) !important;
            padding-bottom: clamp(40px, 8vw, 60px) !important;
            padding-left: clamp(20px, 4vw, 40px) !important;
            padding-right: clamp(20px, 4vw, 40px) !important;
            order: 2 !important;
          }
        }
        @media (max-width: 767px) {
          .mk-intro-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
          }
          .mk-fusion-grid, .mk-styles-grid, .mk-standapart-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .mk-styles-grid, .mk-standapart-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .mk-standapart-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        /* Checklist item cards — Modular Kitchens & Materials/Finishes sections */
        .mk-check-card {
          transition: transform 0.35s var(--motion-ease-luxury), border-color 0.35s ease, background-color 0.35s ease, box-shadow 0.35s var(--motion-ease-luxury);
        }
        .mk-check-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-border-gold-medium);
          background-color: rgba(182, 154, 107, 0.07);
          box-shadow: 0 12px 28px -12px rgba(182, 154, 107, 0.3);
        }
        .mk-check-icon {
          transition: transform 0.35s var(--motion-ease-luxury), background-color 0.35s ease;
        }
        .mk-check-card:hover .mk-check-icon {
          transform: scale(1.12);
          background-color: rgba(182, 154, 107, 0.28);
        }

        /* "Why Leoz Kitchens" pillar cards */
        .mk-pillar-card-bar {
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
        .mk-pillar-card:hover .mk-pillar-card-bar {
          transform: scaleX(1);
        }
        .mk-pillar-icon {
          transition: transform 0.4s var(--motion-ease-luxury), background-color 0.4s ease;
        }
        .mk-pillar-card:hover .mk-pillar-icon {
          transform: scale(1.12);
          background-color: rgba(182, 154, 107, 0.24);
        }
      `}</style>
    </div>
  );
};

export default ModularKitchens;
