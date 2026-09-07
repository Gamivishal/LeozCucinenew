import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import formImg from '../../form.png';

const luxuryEase = [0.16, 1, 0.3, 1];

export const BookConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page-book-consultation" style={{ backgroundColor: '#FFFFFF', color: '#181818' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        <section
          aria-label="Talk To Us Split Screen"
          className="consultation-split-screen"
          style={{
            position: 'relative',
            minHeight: 'calc(100vh - 75px)',
            width: '100vw',
            backgroundColor: '#FFFFFF',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            overflow: 'hidden',
          }}
        >
          {/* --- FORM SIDE (LEFT SIDE) --- */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(40px, 6vw, 100px)',
              backgroundColor: '#F7F5F1',
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

                  {/* Field 4: Message */}
                  <div>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows={4}
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
                        resize: 'vertical',
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

          {/* --- IMAGE SIDE (RIGHT SIDE) --- */}
          <div
            className="consultation-image-side"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1.00, opacity: 1 }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              style={{
                width: '100%',
                height: '100%',
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
            @media (max-width: 900px) {
              .consultation-split-screen {
                grid-template-columns: 1fr !important;
                min-height: auto !important;
              }
              .consultation-image-side {
                order: -1 !important; /* Image on top on mobile */
                height: 40vh !important;
                min-height: 300px !important;
              }
            }
          `}</style>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BookConsultation;
