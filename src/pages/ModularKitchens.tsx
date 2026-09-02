import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
                Modular Kitchens, Designed Around Your Life
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="hero-description"
                style={{ margin: '0 auto', textAlign: 'center', color: 'var(--color-body)', marginBottom: '32px' }}
              >
                Experience German Precision – Premium Modular Kitchens from Design to Installation.
              </motion.p>

              <motion.div variants={itemVariants}>
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
                  A Kitchen Should Work as Beautifully as It Looks
                </motion.h2>

                <p className="description" style={{ marginBottom: 0 }}>
                  At LEOZ Cucine, every modular kitchen is designed for the way you cook, store, and gather — then finished to a standard that feels considered in every detail, from cabinet edges to hardware.
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

              <motion.h2 variants={staggerItem} className="section-title text-white" style={{ marginBottom: '20px' }}>
                German Precision, Indian Sensibility
              </motion.h2>

              <motion.p variants={staggerItem} className="description" style={{ margin: '0 auto 40px', color: 'var(--color-text-secondary)' }}>
                Our kitchens blend German-grade hardware with Indian sensibilities, offering a smart fusion of:
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="mk-fusion-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  textAlign: 'left',
                  marginBottom: '40px',
                }}
              >
                {[
                  'Ergonomic Flow',
                  'Ample Storage',
                  'Easy Maintenance',
                  'Moisture-resistant carcass and finishes',
                  'Customizable layouts',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
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
                  </div>
                ))}
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
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>KITCHEN COLLECTIONS</span>
              <h2 className="section-title">Find Your Kitchen Style.</h2>
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
              ].map((style, idx) => (
                <motion.div
                  key={style.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
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
              ))}
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
            <h2 className="section-title text-white" style={{ marginBottom: '40px' }}>Built for Performance. Finished for Life.</h2>

            <div
              className="mk-fusion-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                textAlign: 'left',
              }}
            >
              {[
                'High-grade marine plywood and engineered wood carcasses',
                'Premium laminate, acrylic, and PU finish options',
                'German-grade hardware for smooth, long-lasting function',
                "Anti-scratch, moisture-resistant surfaces suited to Gujarat's climate",
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
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
                </div>
              ))}
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
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>WHY LEOZ KITCHENS</span>
              <h2 className="section-title">Why Our Kitchens Stand Apart.</h2>
            </div>

            <div
              className="mk-standapart-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'clamp(24px, 3vw, 40px)',
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                    style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
                  >
                    <div
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
              <h2 className="section-title text-white">From Consultation to Installation.</h2>
            </div>

            <div
              className="mk-process-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {[
                { step: '01', title: 'Site Visit & Measurement', desc: 'We visit your space and take precise measurements.' },
                { step: '02', title: 'Custom Layout & 3D Design', desc: 'A layout and 3D design tailored to your space.' },
                { step: '03', title: 'Material & Finish Selection', desc: 'Choose the materials and finishes that suit you.' },
                { step: '04', title: 'In-House Manufacturing', desc: 'Your kitchen is built at our own factory.' },
                { step: '05', title: 'Professional Installation', desc: 'Installed by our own in-house team.' },
                { step: '06', title: 'Post-Installation Quality Check', desc: 'A final check to ensure everything is right.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    {item.step}
                  </span>
                  <h3 className="sub-title text-white" style={{ marginBottom: '8px' }}>{item.title}</h3>
                  <p className="small-description" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  q: 'How long does a modular kitchen installation take?',
                  a: '[Client Confirmation Required: standard timeline from final design approval to installation]',
                },
                {
                  q: 'Do you offer customization for non-standard kitchen spaces?',
                  a: 'Yes, all our kitchens are custom-designed to fit your specific layout and dimensions.',
                },
                {
                  q: 'What warranty do you offer on kitchens?',
                  a: '[Client Confirmation Required: kitchen warranty duration and coverage terms]',
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
            <motion.h2
              variants={staggerItem}
              className="section-title text-white"
              style={{ marginBottom: '20px' }}
            >
              Ready to Design Your Kitchen?
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
          .mk-intro-grid, .mk-fusion-grid, .mk-styles-grid, .mk-standapart-grid, .mk-process-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .mk-styles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ModularKitchens;
