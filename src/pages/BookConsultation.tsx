import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import formImg from '../../form.png';

const luxuryEase = [0.16, 1, 0.3, 1];

interface FinishItem {
  name: string;
  category: string;
  finishType: string;
  code: string;
  color?: string;
  image?: string;
}

const categories = [
  'Membrane',
  'PU',
  'Laminate',
  'Alvic',
  'Other',
  'Nova Matte',
  'Lacquered Glass',
  'Acrylic Crystal',
  'Egger',
  'Acrylic'
];

const FINISHES_DATA: FinishItem[] = [
  // Membrane
  { name: 'Avenza', category: 'Membrane', finishType: 'Surface Finish: High Gloss', code: 'SKU Code: CMBL95H0045', color: '#FFF5DC' },
  { name: 'Olmo', category: 'Membrane', finishType: 'Surface Finish: Textured Wood', code: 'SKU Code: LMEM-OL90', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80' },
  { name: 'Beluga', category: 'Membrane', finishType: 'Surface Finish: High Gloss', code: 'SKU Code: CMBL95H0045', color: '#EFF0F2' },
  { name: 'Mentone', category: 'Membrane', finishType: 'Surface Finish: Premium Matte', code: 'SKU Code: LMEM-MN48', color: '#E2DDD5' },
  { name: 'Lucernario', category: 'Membrane', finishType: 'Surface Finish: Soft Matte', code: 'SKU Code: LMEM-LU12', color: '#D9ECEF' },
  { name: 'Crema', category: 'Membrane', finishType: 'Surface Finish: Smooth Matte', code: 'SKU Code: LMEM-CR34', color: '#F1EFEA' },
  { name: 'Assolato', category: 'Membrane', finishType: 'Surface Finish: Textured Veneer', code: 'SKU Code: LMEM-AS77', image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Maronne Sughero', category: 'Membrane', finishType: 'Surface Finish: Premium Texture', code: 'SKU Code: LMEM-MS66', color: '#8B5E3C' },

  // PU
  { name: 'Bianco Classico', category: 'PU', finishType: 'Surface Finish: Satin Lacquer', code: 'SKU Code: LPU-BC01', color: '#FFFFFF' },
  { name: 'Grigio Perla', category: 'PU', finishType: 'Surface Finish: Soft Matte', code: 'SKU Code: LPU-GP02', color: '#D1D5DB' },
  { name: 'Antracite', category: 'PU', finishType: 'Surface Finish: Matte PU', code: 'SKU Code: LPU-AN03', color: '#374151' },
  { name: 'Verde Salvia', category: 'PU', finishType: 'Surface Finish: Satin Lacquer', code: 'SKU Code: LPU-VS04', color: '#8FBC8F' },

  // Laminate
  { name: 'Rovere Tabacco', category: 'Laminate', finishType: 'Surface Finish: Synchro Wood', code: 'SKU Code: LLAM-RT09', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Cemento', category: 'Laminate', finishType: 'Surface Finish: Industrial Concrete', code: 'SKU Code: LLAM-CE11', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ardesia Slate', category: 'Laminate', finishType: 'Surface Finish: Natural Stone Texture', code: 'SKU Code: LLAM-AS01', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80' },
  { name: 'Corten Steel', category: 'Laminate', finishType: 'Surface Finish: Oxide Metallic', code: 'SKU Code: LLAM-CS02', color: '#A0522D' },

  // Alvic
  { name: 'Luxe Metallic', category: 'Alvic', finishType: 'Surface Finish: High Gloss Luxe', code: 'SKU Code: LALV-LM15', color: '#4B5563' },
  { name: 'Zenit Supermatte', category: 'Alvic', finishType: 'Surface Finish: Supermatt Anti-Fingerprint', code: 'SKU Code: LALV-ZS22', color: '#1F2937' },

  // Nova Matte
  { name: 'Basalt Matt', category: 'Nova Matte', finishType: 'Surface Finish: Nova Matte', code: 'SKU Code: LNOV-BM03', color: '#4B5462' },
  { name: 'Taupe Matt', category: 'Nova Matte', finishType: 'Surface Finish: Nova Matte', code: 'SKU Code: LNOV-TM04', color: '#B8B0A6' },

  // Lacquered Glass
  { name: 'Specchio Bronzo', category: 'Lacquered Glass', finishType: 'Surface Finish: Reflective Glass', code: 'SKU Code: LLAC-SB07', color: '#8C7A6B' },
  { name: 'Fumè Glass', category: 'Lacquered Glass', finishType: 'Surface Finish: Tinted Glass', code: 'SKU Code: LLAC-FG08', color: '#555555' },

  // Acrylic Crystal
  { name: 'Ice Crystal', category: 'Acrylic Crystal', finishType: 'Surface Finish: 3D Acrylic Glass', code: 'SKU Code: LACR-IC11', color: '#F0F8FF' },
  { name: 'Graphite Crystal', category: 'Acrylic Crystal', finishType: 'Surface Finish: 3D Acrylic Glass', code: 'SKU Code: LACR-GC12', color: '#2E3B4E' },

  // Egger
  { name: 'Denver Oak', category: 'Egger', finishType: 'Surface Finish: Feelwood', code: 'SKU Code: LEGG-DO05', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Fleetwood', category: 'Egger', finishType: 'Surface Finish: Linear Wood', code: 'SKU Code: LEGG-FW06', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },

  // Acrylic
  { name: 'Lucido Bianco', category: 'Acrylic', finishType: 'Surface Finish: High Gloss Acrylic', code: 'SKU Code: LACR-LB01', color: '#FAFAFA' },
  { name: 'Lucido Nero', category: 'Acrylic', finishType: 'Surface Finish: High Gloss Acrylic', code: 'SKU Code: LACR-LN02', color: '#0A0A0A' },

  // Other
  { name: 'Marmorised White', category: 'Other', finishType: 'Surface Finish: Quartz Stone Print', code: 'SKU Code: LOTH-MW99', color: '#EAEAEA' }
];

export const BookConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Membrane');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const filteredFinishes = FINISHES_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="page-book-consultation" style={{ backgroundColor: '#FFFFFF', color: '#181818' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        <section
          aria-label="Talk To Us Full Screen"
          className="consultation-full-screen"
          style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100vw',
            backgroundColor: '#181818',
            overflow: 'hidden',
          }}
        >
          {/* --- FULL-PAGE BACKGROUND IMAGE --- */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ scale: 1.03, opacity: 0 }}
              animate={{ scale: 1.00, opacity: 1 }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              style={{
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <img
                src={formImg}
                alt="LEOZ CUCINE Architectural Consultation"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </motion.div>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(24, 24, 24, 0.65) 0%, rgba(24, 24, 24, 0.35) 50%, rgba(24, 24, 24, 0.55) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* --- FORM CARD OVERLAY (RIGHT SIDE) --- */}
          <div
            style={{
              position: 'relative',
              minHeight: '100vh',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingLeft: 'clamp(24px, 5vw, 140px)',
              paddingRight: 'clamp(24px, 5vw, 100px)',
              paddingTop: 'clamp(120px, 12vh, 160px)',
              paddingBottom: 'clamp(120px, 12vh, 160px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              style={{
                maxWidth: '440px',
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 20px 40px rgba(24, 24, 24, 0.08)',
                border: '1px solid rgba(182, 154, 107, 0.2)',
              }}
            >
              {/* Form Title */}
              <h1
                style={{
                  fontFamily: "var(--font-family-serif)",
                  fontSize: 'clamp(28px, 3vw, 36px)',
                  fontWeight: 400,
                  color: '#181818',
                  marginBottom: '10px',
                  textAlign: 'left',
                }}
              >
                Book a showroom consultation
              </h1>

              {/* Subhead */}
              <p
                style={{
                  fontFamily: "var(--font-family-sans)",
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#5A6472',
                  marginBottom: '24px',
                  textAlign: 'left',
                  lineHeight: '1.5',
                }}
              >
                Share a few details, our team will call you back
              </p>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <span style={{ fontSize: '36px', color: '#B69A6B', display: 'block', marginBottom: '16px' }}>✦</span>
                  <h2 style={{ fontFamily: 'var(--font-family-serif)', fontSize: '24px', color: '#181818', marginBottom: '12px' }}>
                    Consultation Requested
                  </h2>
                  <p style={{ fontFamily: 'var(--font-family-sans)', fontSize: '14px', lineHeight: '1.6', color: '#5A6472' }}>
                    Thank you, {formData.name || 'valued client'}. Our senior design studio will reach out to schedule your private design session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Field 1: Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #B0ABA2',
                        borderRadius: '8px',
                        padding: '14px 16px',
                        color: '#181818',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Field 2: Mobile Number with Flag Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        position: 'absolute',
                        left: '14px',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    >
                      <span style={{ fontSize: '13px', color: '#181818', fontWeight: 600 }}>+91</span>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #B0ABA2',
                        borderRadius: '8px',
                        padding: '14px 16px 14px 62px',
                        color: '#181818',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Field 3: Email Id */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Id"
                      className="contact-form-input"
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #B0ABA2',
                        borderRadius: '8px',
                        padding: '14px 16px',
                        color: '#181818',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Submit Pill Button */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    style={{
                      marginTop: '8px',
                      width: '100%',
                      backgroundColor: '#B69A6B',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '16px',
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: '0 8px 20px rgba(182, 154, 107, 0.25)',
                      transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), background-color 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    SUBMIT
                  </button>

                  {/* Privacy Disclaimer */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '11px',
                      color: '#768192',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      marginTop: '12px',
                    }}
                  >
                    By submitting this form, you agree to our{' '}
                    <a href="/contact" target="_blank" rel="noopener noreferrer" style={{ color: '#B69A6B', textDecoration: 'underline' }}>privacy policy</a>
                    {' '}&amp;{' '}
                    <a href="/contact" target="_blank" rel="noopener noreferrer" style={{ color: '#B69A6B', textDecoration: 'underline' }}>terms and conditions</a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Responsive Layout */}
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
            .filter-pill-btn {
              transition: all 300ms var(--motion-ease-luxury) !important;
            }
            .filter-pill-btn.active {
              background-color: #181818 !important;
              border-color: #181818 !important;
              color: #FFFFFF !important;
            }
            .filter-pill-btn:not(.active):hover {
              border-color: #B69A6B !important;
              color: #B69A6B !important;
              transform: translateY(-1px) !important;
            }
            @media (max-width: 900px) {
              .consultation-full-screen {
                min-height: auto !important;
              }
              .consultation-full-screen > div:nth-child(2) {
                justify-content: center !important;
                padding-left: 20px !important;
                padding-right: 20px !important;
                padding-top: 130px !important;
                padding-bottom: 80px !important;
                min-height: auto !important;
              }
            }
            @media (max-width: 639px) {
              .finishes-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* ==========================================================================
           SECTION 2: REPERTOIRE OF FINISHES
           ========================================================================== */}
        <section
          aria-label="Our Repertoire of Finishes"
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
            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 300,
                  color: '#181818',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                }}
              >
                Showroom materials &amp; finishes
              </h2>
            </div>

            {/* Filter Pills Container */}
            <div
              className="finishes-filter-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '48px',
              }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-pill-btn ${isActive ? 'active' : ''}`}
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '13px',
                      fontWeight: 500,
                      padding: '10px 22px',
                      borderRadius: '9999px',
                      border: '1px solid',
                      borderColor: isActive ? '#181818' : 'rgba(24, 24, 24, 0.25)',
                      backgroundColor: isActive ? '#181818' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#181818',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Finishes Cards Grid */}
            <motion.div
              layout
              className="finishes-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '24px',
              }}
            >
              <AnimatePresence mode="popLayout">
                {filteredFinishes.map((finish) => (
                  <motion.div
                    layout
                    key={finish.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: luxuryEase }}
                    className="finish-card"
                    style={{
                      position: 'relative',
                      height: '380px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid rgba(24, 24, 24, 0.08)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                      backgroundColor: '#F7F5F1',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Background Surface (Color or Image) */}
                    {finish.image ? (
                      <img
                        src={finish.image}
                        alt={finish.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: finish.color || '#E5E7EB',
                        }}
                      />
                    )}

                    {/* Default State Finish Name overlay at the top left */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-family-serif)',
                          fontSize: '18px',
                          fontWeight: 400,
                          color: finish.image ? '#FFFFFF' : '#181818',
                          textShadow: finish.image ? '0 2px 4px rgba(0, 0, 0, 0.4)' : 'none',
                        }}
                      >
                        {finish.name}
                      </span>
                    </div>

                    {/* Hover Overlay displaying Name, Category, SKU Code */}
                    <motion.div
                      className="finish-hover-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3, ease: luxuryEase }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(24, 24, 24, 0.92)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '24px',
                        textAlign: 'center',
                        zIndex: 3,
                      }}
                    >
                      {/* Name */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-family-serif)',
                          fontSize: '24px',
                          fontWeight: 400,
                          color: '#B69A6B',
                          marginBottom: '16px',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {finish.name}
                      </h3>

                      {/* Category / Finish Type */}
                      <p
                        style={{
                          fontFamily: 'var(--font-family-sans)',
                          fontSize: '14px',
                          fontWeight: 300,
                          color: '#FFFFFF',
                          lineHeight: '1.6',
                          margin: '0 0 8px 0',
                          opacity: 0.9,
                        }}
                      >
                        {finish.finishType}
                      </p>

                      {/* Code */}
                      <p
                        style={{
                          fontFamily: 'var(--font-family-sans)',
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#B0ABA2',
                          letterSpacing: '0.05em',
                          margin: 0,
                        }}
                      >
                        {finish.code}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookConsultation;
