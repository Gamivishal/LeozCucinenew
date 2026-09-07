import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Award, Factory, Compass, GraduationCap, ShieldCheck, CheckCircle } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: luxuryEase } },
};

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* HERO */}
        <section
          aria-label="Franchise Enquiry Hero"
          style={{
            position: 'relative',
            minHeight: '70vh',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
          }}
        >
          <img
            src={images.franchiseHero}
            alt="Bring LEOZ Cucine to your city"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(24, 24, 24, 0.55)',
            }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{
              position: 'relative',
              padding: 'clamp(48px, 6vw, 90px) 6vw',
              maxWidth: '900px',
            }}
          >
            <span className="section-label text-white" style={{ display: 'block', marginBottom: '16px' }}>
              FRANCHISE ENQUIRY
            </span>
            <h1 className="page-title text-white" style={{ marginBottom: '16px' }}>
              Bring LEOZ Cucine to Your City
            </h1>
            <p className="hero-description text-light" style={{ marginBottom: '32px' }}>
              Partner with a premium, German-precision kitchen and wardrobe brand backed by 20+ years of manufacturing expertise.
            </p>
            <a href="#franchise-enquiry-form" onClick={scrollToForm} className="btn btn-primary">
              Enquire About Franchise Opportunities
            </a>
          </motion.div>
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
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                PARTNERSHIP
              </span>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
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
                      placeholder="Your full name"
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
                      placeholder="+91 Mobile"
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
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="yourname@domain.com"
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
                      placeholder="Tell us about your city, background, and franchise interest..."
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
