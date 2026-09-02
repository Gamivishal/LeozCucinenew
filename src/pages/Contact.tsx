import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Phone, Mail, MapPin, Clock, Headphones, MessageSquare, CheckCircle } from 'lucide-react';

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

const staggerContainer = containerVariants;
const staggerItem = itemVariants;

const imageRevealVariants = {
  hidden: { opacity: 0, scale: 1.03, clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: luxuryEase, delay: 0.1 }
  }
};

export const Contact: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Kitchen',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useDocumentMeta(
    'Contact Leoz Cucine | Kitchens & Wardrobes',
    'Reach out to LEOZ Cucine for consultations, project enquiries, or general questions — our team serves clients across Ahmedabad and throughout Gujarat.'
  );

  // Parallax transform calculation for Hero image
  const parallaxY = Math.min(scrollY * 0.15, 120);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-contact" style={{ backgroundColor: 'var(--color-surface-dark)', color: 'var(--color-text-primary)' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        {/* ==========================================================================
           SECTION 1: HERO
           ========================================================================== */}
        <section
          id="hero"
          aria-label="Contact Us Split Hero"
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
          {/* --- LEFT COLUMN: FULL-HEIGHT EDGE-TO-EDGE LIFESTYLE IMAGE (~50%) --- */}
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
                src={images.contactHero}
                alt="LEOZ CUCINE Flagship Interior Studio"
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
                  background: 'linear-gradient(180deg, rgba(7, 17, 31, 0.15) 0%, transparent 60%, rgba(7, 17, 31, 0.3) 100%)',
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
              padding: 'clamp(140px, 14vh, 200px) clamp(32px, 5vw, 80px)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{
                maxWidth: '480px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <motion.span variants={itemVariants} className="section-label" style={{ marginBottom: '16px' }}>
                CONTACT
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="page-title"
                style={{ marginBottom: '20px' }}
              >
                Let's Talk About Your Kitchen or Wardrobe
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="hero-description"
                style={{ margin: '0 auto', textAlign: 'center', color: 'var(--color-body)' }}
              >
                Reach out to LEOZ Cucine for consultations, project enquiries, or general questions — our team serves clients across Ahmedabad and throughout Gujarat.
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
           SECTION 2: CONTACT INFORMATION & ENQUIRY FORM (TWO-COLUMN LAYOUT)
           ========================================================================== */}
        <section
          aria-label="Contact Information & Enquiry Form"
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
              className="contact-main-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(40px, 6vw, 100px)',
                alignItems: 'start',
              }}
            >
              {/* LEFT SIDE: CONTACT INFORMATION */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
              >
                <motion.span variants={staggerItem} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                  VISIT US
                </motion.span>
                <motion.h2
                  variants={staggerItem}
                  className="section-title"
                  style={{ color: '#FFFFFF', marginBottom: '36px' }}
                >
                  Visit Leoz Cucine.
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {/* Email */}
                  <motion.div variants={staggerItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(182, 154, 107, 0.1)', color: '#B69A6B' }}>
                      <Mail size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-family-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', margin: '0 0 6px 0' }}>
                        Email
                      </h4>
                      <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '15px', fontWeight: 300, color: '#FFFFFF', margin: 0, lineHeight: '1.6' }}>
                        Info@leozcucine.com
                      </p>
                    </div>
                  </motion.div>

                  {/* Sales & Inquiry */}
                  <motion.div variants={staggerItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(182, 154, 107, 0.1)', color: '#B69A6B' }}>
                      <Phone size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-family-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', margin: '0 0 6px 0' }}>
                        Sales &amp; Inquiry
                      </h4>
                      <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '15px', fontWeight: 300, color: '#FFFFFF', margin: 0, lineHeight: '1.6' }}>
                        93131 51559
                      </p>
                    </div>
                  </motion.div>

                  {/* Customer Care */}
                  <motion.div variants={staggerItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(182, 154, 107, 0.1)', color: '#B69A6B' }}>
                      <Headphones size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-family-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', margin: '0 0 6px 0' }}>
                        Customer Care
                      </h4>
                      <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '15px', fontWeight: 300, color: '#FFFFFF', margin: 0, lineHeight: '1.6' }}>
                        8758 551552
                      </p>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div variants={staggerItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(182, 154, 107, 0.1)', color: '#B69A6B' }}>
                      <MapPin size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-family-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', margin: '0 0 6px 0' }}>
                        Head Office / Showroom (Ahmedabad)
                      </h4>
                      <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '15px', fontWeight: 300, color: '#FFFFFF', margin: 0, lineHeight: '1.6' }}>
                        Sankalp Square 3B, 509, Sindhu Bhavan Marg, beside Taj Sky line, PRL Colony, Thaltej, Ahmedabad, Gujarat 380059
                      </p>
                    </div>
                  </motion.div>

                  {/* Working Hours */}
                  <motion.div variants={staggerItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(182, 154, 107, 0.1)', color: '#B69A6B' }}>
                      <Clock size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-family-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', margin: '0 0 6px 0' }}>
                        Business Hours
                      </h4>
                      <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '15px', fontWeight: 300, color: '#FFFFFF', margin: 0, lineHeight: '1.6' }}>
                        Monday – Saturday: 10:00 AM – 7:00 PM<br />Sunday: By appointment only
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT SIDE: PREMIUM ENQUIRY FORM */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: luxuryEase }}
                style={{
                  backgroundColor: '#202020',
                  padding: 'clamp(32px, 4vw, 48px)',
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
                      Thank you for contacting Leoz Cucine. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <span className="section-label" style={{ display: 'block' }}>ENQUIRY FORM</span>
                    <h3 style={{ fontFamily: 'var(--font-family-serif)', fontSize: '24px', fontWeight: 500, color: '#FFFFFF', marginBottom: '8px' }}>
                      Send Us a Message
                    </h3>

                    {/* Name */}
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

                    {/* Phone & Email Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                          Mobile No.
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
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
                          Email Address
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
                    </div>

                    {/* Project Type */}
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
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
                          cursor: 'pointer',
                        }}
                      >
                        <option value="Kitchen">Kitchen</option>
                        <option value="Wardrobe">Wardrobe</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-family-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B69A6B', marginBottom: '8px' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements..."
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

                    {/* Submit Button */}
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
          </div>
        </section>

        {/* EXTRA SECTION (not part of current spec) — disabled, kept for reference. Remove `false &&` to re-enable. */}
        {false && (
        <>
        {/* ==========================================================================
           SECTION 3: WHATSAPP CONTACT
           ========================================================================== */}
        <section
          aria-label="WhatsApp Contact"
          style={{
            paddingTop: '60px',
            paddingBottom: '60px',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#202020',
            color: '#FFFFFF',
            borderTop: '1px solid rgba(182, 154, 107, 0.15)',
            borderBottom: '1px solid rgba(182, 154, 107, 0.15)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <motion.h2
                variants={staggerItem}
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 300,
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Need a Quick Response?
              </motion.h2>

              <motion.p
                variants={staggerItem}
                style={{
                  fontFamily: 'var(--font-family-sans)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: '#B0ABA2',
                  margin: '0 0 12px 0',
                  maxWidth: '520px',
                }}
              >
                Chat with our team directly on WhatsApp: [Phone Number]
              </motion.p>

              <motion.div variants={staggerItem}>
                {/* TODO: wire to the real business WhatsApp number once available */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="whatsapp-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#181818',
                    color: '#FFFFFF',
                    border: '1px solid rgba(182, 154, 107, 0.3)',
                    padding: '16px 36px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <MessageSquare size={18} color="#25D366" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        </>
        )}

        {/* ==========================================================================
           SECTION 4: GOOGLE MAP
           ========================================================================== */}
        <section
          aria-label="Google Map Showroom Location"
          style={{
            paddingTop: 'var(--space-section-padding-desktop)',
            paddingBottom: 'var(--space-section-padding-desktop)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#181818',
          }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              style={{
                width: '100%',
                height: '450px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(182, 154, 107, 0.25)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                backgroundColor: '#2a2a2a',
              }}
            >
              <iframe
                title="LEOZ CUCINE Showroom Location"
                src="https://www.google.com/maps?q=Sankalp+Square+3B%2C+509%2C+Sindhu+Bhavan+Marg%2C+Thaltej%2C+Ahmedabad%2C+Gujarat+380059&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sankalp+Square+3B%2C+509%2C+Sindhu+Bhavan+Marg%2C+Thaltej%2C+Ahmedabad%2C+Gujarat+380059"
                target="_blank"
                rel="noopener noreferrer"
                className="small-description"
                style={{ color: 'var(--color-accent, #B69A6B)', fontWeight: 600 }}
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 5: PREFER TO TALK DIRECTLY CTA
           ========================================================================== */}
        <section
          aria-label="Prefer to Talk Directly"
          style={{
            paddingTop: '60px',
            paddingBottom: '60px',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            backgroundColor: '#202020',
            color: '#FFFFFF',
            borderTop: '1px solid rgba(182, 154, 107, 0.15)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <motion.h2
                variants={staggerItem}
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 300,
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                Prefer to Talk Directly?
              </motion.h2>

              <motion.div variants={staggerItem}>
                <a
                  href="tel:+919313151559"
                  className="btn btn-light"
                >
                  Call Us / Talk to Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ==========================================================================
         SECTION 6: FOOTER
         ========================================================================== */}
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
        .whatsapp-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          background-color: #202020 !important;
          border-color: rgba(182, 154, 107, 0.6) !important;
        }
        .whatsapp-btn:active {
          transform: translateY(0px) scale(0.96) !important;
        }
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
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
