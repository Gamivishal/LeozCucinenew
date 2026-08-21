import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

/* Easing curve token matching Modular Kitchens and Wardrobes pages */
const luxuryEase = [0.16, 1, 0.3, 1];

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

const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.03, clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: luxuryEase, delay: 0.1 }
  }
};

export const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useDocumentMeta(
    'About Leoz Cucine | Kitchens & Wardrobes',
    'Leoz Cucine creates thoughtfully designed kitchens and wardrobes for contemporary homes.'
  );

  // Parallax transform calculation for Hero image
  const parallaxY = Math.min(scrollY * 0.15, 120);

  return (
    <div className="page-about" style={{ backgroundColor: 'var(--color-surface-dark)', color: 'var(--color-text-primary)' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        {/* ==========================================================================
           SECTION 1: HERO
           ========================================================================== */}
        <section
          id="hero"
          aria-label="About LEOZ CUCINE Split Hero"
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
          {/* --- LEFT COLUMN: FULL-HEIGHT EDGE-TO-EDGE ARCHITECTURAL IMAGE (~50%) --- */}
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
                src={images.aboutHero}
                alt="LEOZ CUCINE Architectural Heritage & Craftsmanship"
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

          {/* --- RIGHT COLUMN: EDITORIAL TYPOGRAPHY MATCHING MASTER KITCHENS TEMPLATE --- */}
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
                ABOUT LEOZ CUCINE
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="page-title"
                style={{ marginBottom: '20px' }}
              >
                Good Design Begins with Understanding the Space.
              </motion.h1>
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
           SECTION 2: BRAND STORY & PHILOSOPHY
           ========================================================================== */}
        <section
          aria-label="Brand Story & Philosophy"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#181818',
            color: '#FFFFFF',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div
              className="about-craftsmanship-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(40px, 6vw, 100px)',
                alignItems: 'center',
              }}
            >
              {/* Large Premium Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: luxuryEase }}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(182, 154, 107, 0.2)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                }}
              >
                <ParallaxImage yOffset={30}>
                  <img
                    src={images.modularKitchenHero}
                    alt="LEOZ CUCINE Brand Story"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </ParallaxImage>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={containerVariants}
              >
                <motion.span variants={itemVariants} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                  OUR STORY
                </motion.span>

                <motion.h2
                  variants={itemVariants}
                  className="section-title text-white"
                  style={{ marginBottom: '20px' }}
                >
                  Kitchens &amp; Wardrobes, Made Personal.
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="description"
                  style={{ color: '#B0ABA2', marginBottom: '16px' }}
                >
                  Leoz Cucine creates thoughtfully designed kitchens and wardrobes for contemporary homes.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="description"
                  style={{ color: '#B0ABA2' }}
                >
                  Our approach is simple — understand the space, plan it well and finish every detail with care.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.5: OUR PHILOSOPHY
           ========================================================================== */}
        <section
          aria-label="Our Philosophy"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#F7F5F1',
            color: '#181818',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={containerVariants}
            >
              <motion.span variants={itemVariants} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                OUR PHILOSOPHY
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="section-title"
                style={{ marginBottom: '20px' }}
              >
                Less Noise. Better Design.
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="description"
                style={{ margin: '0 auto' }}
              >
                Clean forms, useful storage and carefully selected materials create spaces that remain relevant for years.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2.6: OUR APPROACH
           ========================================================================== */}
        <section
          aria-label="Our Approach"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#FFFFFF',
            color: '#181818',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 8vw, 110px)' }}>
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                OUR APPROACH
              </span>
              <h2 className="section-title">Designed with Purpose.</h2>
            </div>

            <div
              className="about-approach-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(24px, 3vw, 40px)',
              }}
            >
              {[
                { title: 'Understand', desc: "Your space and requirements come first." },
                { title: 'Plan', desc: 'Every layout is carefully considered.' },
                { title: 'Select', desc: 'Materials and finishes are chosen together.' },
                { title: 'Deliver', desc: 'Every detail is completed with care.' },
              ].map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                  style={{ textAlign: 'center' }}
                >
                  <h3 className="sub-title" style={{ marginBottom: '10px' }}>{step.title}</h3>
                  <p className="small-description" style={{ margin: '0 auto' }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 3: MEET THE DIRECTOR Note
           ========================================================================== */}
        <section
          aria-label="Director Note"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#FFFFFF',
            color: '#181818',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div
              className="about-founder-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'center',
              }}
            >
              {/* Director photograph pending — do not substitute stock imagery for a real person */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: luxuryEase }}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-light)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="small-description" style={{ color: 'var(--color-body)' }}>
                  [Director Photograph]
                </span>
              </motion.div>

              {/* Minimal Founder Message (Max 80 words) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={containerVariants}
              >
                <motion.h2
                  variants={itemVariants}
                  style={{
                    fontFamily: 'var(--font-family-serif)',
                    fontSize: 'clamp(30px, 3.2vw, 44px)',
                    fontWeight: 300,
                    color: '#181818',
                    marginBottom: '20px',
                  }}
                >
                  Meet the Director
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  style={{
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: 'clamp(15px, 1.2vw, 17px)',
                    fontWeight: 300,
                    lineHeight: '1.75',
                    color: '#595959',
                    marginBottom: '24px',
                  }}
                >
                  Mayur Vadhiya leads production and quality at Leoz Cucine, overseeing every kitchen and wardrobe from design through installation.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-family-serif)',
                      fontSize: '20px',
                      fontWeight: 400,
                      color: '#181818',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Mayur Vadhiya
                  </h4>
                  <span
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#B69A6B',
                    }}
                  >
                    Director, Modular Kitchens &amp; Wardrobes
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* ==========================================================================
         SECTION 7: FOOTER
         ========================================================================== */}
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
          .about-craftsmanship-grid, .about-founder-grid, .about-approach-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-approach-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
