import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Award, Factory, Compass, GraduationCap, ShieldCheck, CheckCircle } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: luxuryEase } },
};

/* Hero image sits on the LEFT, so it enters from the RIGHT (opposite side) */
const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.03, x: 70, clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: luxuryEase, delay: 0.1 },
  },
};

/* Hero text sits on the RIGHT, so it enters from the LEFT (opposite side) */
const heroTextItemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: luxuryEase } },
};

const whyPartnerCards = [
  {
    icon: Award,
    title: 'Established Brand',
    description: '20+ years of experience and a growing reputation across Gujarat, with an established global export-import presence.',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing Support',
    description: 'Franchise partners are backed by our own 20,000 sq. ft. factory, not third-party vendors.',
  },
  {
    icon: Compass,
    title: 'Design Standards',
    description: 'German design precision that differentiates you in the local market.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Support',
    description: 'Guidance across sales, design consultation, and installation standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty-Backed Products',
    description: 'Sell with confidence, backed by our warranty commitment.',
  },
];

export const FranchiseOpportunities: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax transform calculation for Hero image
  const parallaxY = Math.min(scrollY * 0.15, 120);

  useDocumentMeta(
    'Franchise Enquiry | Leoz Cucine',
    'Partner with LEOZ Cucine — a premium, German-precision kitchen and wardrobe brand backed by 20+ years of manufacturing expertise.'
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('franchise-enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-franchise-opportunities" style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-heading)' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        {/* HERO — 50/50 split (left: full-height image, right: content), matching Modular Kitchens */}
        <section
          id="hero"
          aria-label="Franchise Enquiry Hero"
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
          {/* --- LEFT COLUMN: FULL-HEIGHT EDGE-TO-EDGE IMAGE --- */}
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
              <img loading="lazy"
                src={images.franchiseHero}
                alt="Bring LEOZ Cucine to your city"
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

          {/* --- RIGHT COLUMN: EDITORIAL TYPOGRAPHY --- */}
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
              variants={staggerContainer}
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
                FRANCHISE ENQUIRY
              </motion.span>

              <h1 className="page-title" style={{ marginBottom: '20px' }}>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>Bring LEOZ Cucine</motion.span>
                <motion.span variants={heroTextItemVariants} style={{ display: 'inline-block' }}>to Your City</motion.span>
              </h1>

              <motion.p
                variants={heroTextItemVariants}
                className="hero-description"
                style={{ margin: '0 auto', textAlign: 'center', color: 'var(--color-body)', marginBottom: '32px' }}
              >
                Partner with a premium, German-precision kitchen and wardrobe brand backed by 20+ years of manufacturing expertise.
              </motion.p>

              <motion.div variants={heroTextItemVariants}>
                <a href="#franchise-enquiry-form" onClick={scrollToForm} className="btn btn-primary">
                  Enquire About Franchise Opportunities
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY PARTNER WITH LEOZ CUCINE */}
        <section
          aria-label="Why Partner With Leoz Cucine"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: 'var(--color-light)',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
              <span className="section-label section-label-on-light" style={{ display: 'block', marginBottom: '16px' }}>
                PARTNERSHIP
              </span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Why Partner With LEOZ Cucine
              </motion.h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="why-partner-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'clamp(28px, 3vw, 40px)',
              }}
            >
              {whyPartnerCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={staggerItem}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '18px',
                      padding: 'clamp(28px, 3vw, 36px)',
                      backgroundColor: 'var(--color-surface-stone, #F7F5F1)',
                      border: '1px solid var(--color-border-gold)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(182, 154, 107, 0.12)',
                        color: 'var(--color-accent-gold, #B69A6B)',
                      }}
                    >
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="sub-title" style={{ margin: 0 }}>
                      {card.title}
                    </h3>
                    <p className="description" style={{ margin: 0 }}>
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section
          id="franchise-enquiry-form"
          aria-label="Franchise Enquiry Form"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#181818',
            color: '#FFFFFF',
          }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: luxuryEase }}
              style={{
                backgroundColor: '#202020',
                padding: 'clamp(32px, 5vw, 56px)',
                borderRadius: '16px',
                border: '1px solid rgba(182, 154, 107, 0.2)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              }}
            >
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle size={54} color="#B69A6B" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontFamily: 'var(--font-family-serif)', fontSize: '28px', color: '#FFFFFF', marginBottom: '12px' }}>
                    Enquiry Received
                  </h3>
                  <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '15px', color: '#B0ABA2', fontWeight: 300, lineHeight: '1.6' }}>
                    Thank you for your interest in a LEOZ Cucine franchise. Our partnership team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <span className="section-label" style={{ display: 'block' }}>GET IN TOUCH</span>
                  <h3 style={{ fontFamily: 'var(--font-family-serif)', fontSize: '24px', fontWeight: 500, color: '#FFFFFF', marginBottom: '8px' }}>
                    Enquire About Franchise Opportunities
                  </h3>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        height: '52px',
                        padding: '0 18px',
                        backgroundColor: '#181818',
                        border: '1px solid rgba(182, 154, 107, 0.25)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        height: '52px',
                        padding: '0 18px',
                        backgroundColor: '#181818',
                        border: '1px solid rgba(182, 154, 107, 0.25)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        height: '52px',
                        padding: '0 18px',
                        backgroundColor: '#181818',
                        border: '1px solid rgba(182, 154, 107, 0.25)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        backgroundColor: '#181818',
                        border: '1px solid rgba(182, 154, 107, 0.25)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    style={{
                      height: '54px',
                      backgroundColor: '#B69A6B',
                      color: '#181818',
                      border: 'none',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      marginTop: '10px',
                      boxShadow: '0 10px 30px rgba(182, 154, 107, 0.3)',
                      transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .contact-form-input {
          transition: border-color 300ms var(--motion-ease-luxury), box-shadow 300ms var(--motion-ease-luxury) !important;
        }
        .contact-form-input:focus {
          border-color: #B69A6B !important;
          box-shadow: 0 0 0 2px rgba(182, 154, 107, 0.15) !important;
        }
        .contact-submit-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          background-color: #C4AD82 !important;
          box-shadow: 0 10px 25px -5px rgba(182, 154, 107, 0.25) !important;
        }
        .contact-submit-btn:active {
          transform: translateY(0px) scale(0.96) !important;
        }
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
          .why-partner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FranchiseOpportunities;
