import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { images } from '../assets/images';
import { ChevronLeft, ChevronRight, ShieldCheck, Award, Factory, Globe } from 'lucide-react';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  fadeInUp,
  staggerContainer,
  staggerItem
} from '../styles/animations';

const luxuryEase = [0.16, 1, 0.3, 1];

/* ==========================================================================
   1. HERO — static image, dark overlay, short copy (Redesigne.md §10)
   ========================================================================== */
const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Leoz Cucine Hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={images.hero}
        alt="Leoz Cucine premium kitchen"
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
          background: 'rgba(24, 24, 24, 0.35)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: luxuryEase }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '760px',
        }}
      >
        <span className="section-label text-white" style={{ display: 'block', marginBottom: '20px' }}>
          KITCHENS &amp; WARDROBES
        </span>
        <h1 className="hero-title text-white" style={{ marginBottom: '20px' }}>
          Designed for the Way You Live.
        </h1>
        <p className="hero-description text-light" style={{ margin: '0 auto 32px' }}>
          Premium kitchens and wardrobes, thoughtfully designed for modern homes.
        </p>

        <div
          className="hero-cta-container"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="/modular-kitchens"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/modular-kitchens');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-light"
          >
            Explore Kitchens
          </a>
          <a
            href="/modular-wardrobes"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/modular-wardrobes');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-outline"
            style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
          >
            Explore Wardrobes
          </a>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .hero-cta-container {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .hero-cta-container a {
            width: 100% !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   2. BRAND INTRO SECTION (SECONDARY BACKGROUND SOFT IVORY #F7F5F1)
   ========================================================================== */
const BrandIntroSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Brand Introduction"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-light)',
        color: 'var(--color-text-dark)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        style={{
          maxWidth: '960px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.span variants={staggerItem} className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
          LEOZ CUCINE
        </motion.span>

        <motion.h2
          variants={staggerItem}
          className="section-title"
          style={{ marginBottom: '20px' }}
        >
          Designed Around Your Space.
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="description"
          style={{ margin: '0 auto clamp(60px, 8vw, 100px) auto' }}
        >
          We create kitchens and wardrobes with clean design, thoughtful planning and refined finishes.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: 'clamp(380px, 55vh, 680px)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow-subtle)',
          border: '1px solid var(--color-border-gold)',
        }}
      >
        <ParallaxImage yOffset={30}>
          <img
            src="/PHILOSOPHY.png"
            alt="LEOZ CUCINE Joinery Detail Craftsmanship"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </ParallaxImage>
      </motion.div>

      <a
        href="/about"
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState({}, '', '/about');
          window.dispatchEvent(new Event('popstate'));
        }}
        className="small-description"
        style={{ marginTop: '32px', color: 'var(--color-accent)', fontWeight: 600 }}
      >
        Discover Our Story →
      </a>
    </section>
  );
};

/* Helper component for live animated numbers counter */
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState('0');
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numStr = numericMatch[0].replace(/,/g, '');
    const targetNum = parseInt(numStr, 10);
    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    let animationFrameId: number;
    const duration = 2000; // 2 seconds count up
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Soft luxury ease-out curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(easeProgress * targetNum);

      const formattedNum = currentNum.toLocaleString('en-US');
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

/* ==========================================================================
   2.5 HIGHLIGHTS STRIP SECTION (DARK NAVY #181818)
   ========================================================================== */
const HighlightsBarSection: React.FC = () => {
  const highlights = [
    { icon: Award, value: "Trusted", label: "By Homeowners" },
    { icon: Factory, value: "In-House", label: "Manufacturing" },
    { icon: ShieldCheck, value: "German-Grade", label: "Hardware Standards" },
    { icon: Globe, value: "Pan-India", label: "Presence" }
  ];

  return (
    <section
      aria-label="Highlights Bar"
      style={{
        backgroundColor: '#181818',
        color: '#FFFFFF',
        padding: '36px 5vw',
        borderTop: '1px solid rgba(182, 154, 107, 0.25)',
        borderBottom: '1px solid rgba(182, 154, 107, 0.25)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(182, 154, 107, 0.12)',
                  border: '1px solid rgba(182, 154, 107, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B69A6B',
                  flexShrink: 0,
                }}
              >
                <item.icon size={21} strokeWidth={1.5} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-family-serif)',
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    fontWeight: 300,
                    color: '#B69A6B',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <AnimatedCounter value={item.value} />
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#B0ABA2',
                    lineHeight: '1.2',
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section[aria-label="Highlights Bar"] > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   3. HOME — KITCHENS + WARDROBES (Redesigne.md §12/§13)
   ========================================================================== */
interface CategoryTeaserProps {
  label: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
  image: string;
  alt: string;
}

const CategoryTeaser: React.FC<CategoryTeaserProps> = ({ label, title, description, linkText, link, image, alt }) => {
  const navigate = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', link);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section
      aria-label={label}
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
        <motion.a
          href={link}
          onClick={navigate}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="category-card"
          style={{
            position: 'relative',
            height: 'clamp(460px, 65vh, 720px)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            cursor: 'pointer',
            backgroundColor: 'var(--color-surface-card)',
            border: '1px solid var(--color-border-gold)',
            boxShadow: 'var(--shadow-subtle)',
            display: 'block',
          }}
        >
          <ParallaxImage yOffset={30}>
            <img
              src={image}
              alt={alt}
              loading="lazy"
              className="category-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform var(--motion-duration-slow) var(--motion-ease-luxury)',
              }}
            />
          </ParallaxImage>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(24, 24, 24, 0.1) 0%, rgba(24, 24, 24, 0.85) 100%)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(28px, 4vw, 54px)',
              color: 'var(--color-text-primary)',
            }}
          >
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{label}</span>
            <h2 className="section-title text-white" style={{ marginBottom: '12px' }}>{title}</h2>
            <p className="description" style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>{description}</p>
            <span className="small-description" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{linkText}</span>
          </div>
        </motion.a>
      </div>

      <style>{`
        .category-card:hover .category-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};

const CategoriesSection: React.FC = () => {
  return (
    <>
      <CategoryTeaser
        label="KITCHENS"
        title="Beautifully Planned. Effortlessly Functional."
        description="Kitchens designed around the way you cook, gather and live."
        linkText="Explore Kitchens →"
        link="/modular-kitchens"
        image={images.kitchenCategory}
        alt="Leoz Cucine modular kitchen"
      />
      <CategoryTeaser
        label="WARDROBES"
        title="Storage, Beautifully Considered."
        description="Personalised wardrobes created around your space and everyday needs."
        linkText="Explore Wardrobes →"
        link="/modular-wardrobes"
        image={images.wardrobeCategory}
        alt="Leoz Cucine modular wardrobe"
      />
    </>
  );
};

/* ==========================================================================
   3.5 COLLECTIONS SECTION (Redesigne.md §14)
   ========================================================================== */
const CollectionsSection: React.FC = () => {
  const collections = [
    { title: 'Contemporary Kitchens', desc: 'Clean forms, refined finishes and intelligent storage.', image: images.materials.woodVeneer },
    { title: 'Island Kitchens', desc: 'A central space made for cooking and conversation.', image: images.layouts.island },
    { title: 'Sliding Wardrobes', desc: 'Elegant storage designed to make better use of space.', image: images.wardrobeTypes.sliding },
    { title: 'Walk-In Wardrobes', desc: 'A personal dressing space designed around you.', image: images.wardrobeTypes.walkIn },
  ];

  return (
    <section
      aria-label="Our Collections"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-light)',
        color: 'var(--color-heading)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>OUR COLLECTIONS</span>
          <h2 className="section-title">Spaces Made Personal.</h2>
        </div>

        <div
          className="home-collections-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(24px, 3vw, 40px)',
          }}
        >
          {collections.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
              style={{
                position: 'relative',
                height: '360px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(24, 24, 24, 0.05) 0%, rgba(24, 24, 24, 0.75) 100%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
                <h3 className="sub-title text-white" style={{ marginBottom: '6px' }}>{item.title}</h3>
                <p className="small-description text-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   4. FEATURED PROJECTS SECTION (SOFT WARM STONE #F7F5F1)
   ========================================================================== */
const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = React.useState<'ALL' | 'KITCHENS' | 'WARDROBES'>('ALL');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const projects = images.projects;

  const filteredProjects = React.useMemo(() => {
    return projects.filter((p) => {
      if (filter === 'KITCHENS') return p.category === 'LUXURY KITCHEN';
      if (filter === 'WARDROBES') return p.category === 'LUXURY WARDROBE';
      return true;
    });
  }, [projects, filter]);

  // Reset slider index when filter changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto scroll timer interval (3.5 seconds per slide when not hovered)
  React.useEffect(() => {
    if (isPaused || filteredProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length]);

  // Scroll smoothly to current active card
  React.useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardEl = container.children[currentIndex] as HTMLElement;
      if (cardEl) {
        const offsetLeft = cardEl.offsetLeft - container.offsetLeft;
        container.scrollTo({ left: offsetLeft, behavior: 'smooth' });
      }
    }
  }, [currentIndex, filteredProjects]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-stone)',
        color: 'var(--color-text-dark)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(40px, 5vw, 60px)',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              SELECTED PROJECTS
            </span>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Spaces That Speak for Themselves.
            </h2>
            <p className="description" style={{ margin: 0 }}>
              A selection of kitchens and wardrobes designed for modern homes.
            </p>
          </div>

          {/* Filter Pills & Controls */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {(['ALL', 'KITCHENS', 'WARDROBES'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  style={{
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    border: filter === tab ? '1px solid #B69A6B' : '1px solid rgba(24, 24, 24, 0.15)',
                    backgroundColor: filter === tab ? '#B69A6B' : 'transparent',
                    color: filter === tab ? '#FFFFFF' : '#181818',
                    cursor: 'pointer',
                    transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {tab === 'ALL' ? 'All Works' : tab === 'KITCHENS' ? 'Kitchens' : 'Wardrobes'}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="editorial-nav-btn"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(182, 154, 107, 0.5)',
                  backgroundColor: 'transparent',
                  color: '#181818',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="editorial-nav-btn"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(182, 154, 107, 0.5)',
                  backgroundColor: 'transparent',
                  color: '#181818',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-Scrolling Carousel Track */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
        >
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '32px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              paddingBottom: '20px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={(e) => {
                  if (project.link) {
                    e.preventDefault();
                    window.history.pushState({}, '', project.link);
                    window.dispatchEvent(new Event('popstate'));
                  }
                }}
                className="project-card"
                style={{
                  flex: '0 0 clamp(300px, 32vw, 420px)',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-gold)',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    backgroundColor: '#F7F5F1',
                  }}
                >
                  <ParallaxImage yOffset={20}>
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="project-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform var(--motion-duration-slow) var(--motion-ease-luxury)',
                      }}
                    />
                  </ParallaxImage>
                </div>

                <div style={{ padding: '20px' }}>
                  <h3 className="sub-title" style={{ fontSize: '22px', marginBottom: '4px' }}>
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                      margin: 0,
                    }}
                  >
                    {project.category === 'LUXURY KITCHEN' ? 'KITCHEN' : 'WARDROBE'}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/projects');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-outline"
          >
            View All Projects
          </a>
        </div>

        {/* Bottom Pagination Dots & Auto-Scroll Status */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '36px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  height: '4px',
                  width: idx === currentIndex ? '32px' : '10px',
                  borderRadius: '2px',
                  backgroundColor: idx === currentIndex ? '#B69A6B' : 'rgba(24, 24, 24, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-family-sans)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8A8A8A',
              }}
            >
              {isPaused ? 'Paused on Hover' : 'Auto Scrolling'}
            </span>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isPaused ? '#E53E3E' : '#B69A6B',
                transition: 'background-color 300ms ease',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(24, 24, 24, 0.12) !important;
        }
        .project-card:hover .project-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};

/* ==========================================================================
   4.5 OUR PROCESS SECTION (Redesigne.md §17)
   ========================================================================== */
const ProcessSection: React.FC = () => {
  const steps = [
    { step: '01', title: 'Consult', desc: 'Understand your space and requirements.' },
    { step: '02', title: 'Design', desc: 'Plan the layout, finishes and details.' },
    { step: '03', title: 'Create', desc: 'Bring the approved design to life.' },
    { step: '04', title: 'Install', desc: 'Complete every detail with care.' },
  ];

  return (
    <section
      aria-label="Our Process"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-light)',
        color: 'var(--color-heading)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>OUR PROCESS</span>
          <h2 className="section-title">From Idea to Installation.</h2>
        </div>

        <div
          className="home-process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(24px, 3vw, 40px)',
          }}
        >
          {steps.map((item, idx) => (
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
              <h3 className="sub-title" style={{ marginBottom: '8px' }}>{item.title}</h3>
              <p className="small-description">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   5. WHY LEOZ SECTION (DARK DEEP NAVY #181818 / CARDS #202020)
   ========================================================================== */
const WhyLeozSection: React.FC = () => {
  const pillars = [
    { title: 'Personalised Design', description: 'Made specifically for your space.' },
    { title: 'Thoughtful Storage', description: 'Every detail has a purpose.' },
    { title: 'Refined Finishes', description: 'Materials selected with care.' },
    { title: 'Professional Installation', description: 'Completed with attention to detail.' },
  ];

  return (
    <section
      aria-label="Why Leoz Cucine"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        paddingLeft: '6vw',
        paddingRight: '6vw',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-text-primary)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 7vw, 90px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>WHY LEOZ CUCINE</span>
          <h2 className="section-title text-white">Details Make the Difference.</h2>
        </div>

        <div
          className="home-pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(24px, 3vw, 40px)',
          }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
              style={{ textAlign: 'center' }}
            >
              <h3 className="sub-title text-white" style={{ fontSize: '20px', marginBottom: '10px' }}>{pillar.title}</h3>
              <p className="small-description" style={{ color: 'var(--color-text-secondary)' }}>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   5.5 CLIENTS LOGO MARQUEE STRIP (SOFT LIGHT BG #F7F5F1)
   ========================================================================== */
const ClientsStripSection: React.FC = () => {
  const clients = [
    "Residences", "Apartments", "Villas", "Corporate Offices", "Hospitality", "Showrooms"
  ];
  return (
    <section
      aria-label="Our Trusted Clients"
      style={{
        backgroundColor: '#F7F5F1',
        padding: '52px 0',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(182, 154, 107, 0.2)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto 24px auto', textAlign: 'center', padding: '0 6vw' }}>
        <span
          style={{
            fontFamily: 'var(--font-family-sans)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#B69A6B',
            display: 'block',
          }}
        >
          DELIVERED ACROSS
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px 64px', padding: '0 6vw' }}
      >
        {clients.map((client) => (
          <motion.div
            key={client}
            variants={staggerItem}
            style={{
              fontFamily: 'var(--font-family-serif)',
              fontSize: 'clamp(18px, 1.8vw, 24px)',
              fontWeight: 300,
              color: '#8A8A8A',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}
          >
            {client}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

/* ==========================================================================
   6. TESTIMONIALS SECTION (HORIZONTAL SCROLLING)
   ========================================================================== */
const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const testimonials = [
    {
      quote: "The alignment of the kitchen panels is exact to the millimeter, and the soft-close drawers feel solid and heavy. The in-house installation team was highly professional.",
      role: "Architectural Client",
      location: "Mumbai Penthouse",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Our custom walk-in wardrobe works perfectly. The integrated internal LED lights and drawers make organizing everything much simpler.",
      role: "Private Residence",
      location: "New Delhi Villa",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "As an architect, I value technical drawing accuracy. Leoz Cucine manufactures exactly what is specified in the CAD drawings, using high-grade marine plywood and Blum hardware.",
      role: "Lead Interior Architect",
      location: "Bengaluru Estate",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The custom fluted walnut finish and the layout organization transformed our kitchen. It's now the most functional part of our house.",
      role: "Homeowner",
      location: "Hyderabad Suite",
      image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Reliable manufacturing, highly durable matte finishes, and clear timelines. They made the entire design and installation process straightforward.",
      role: "Design Principal",
      location: "Ahmedabad Studio",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeT = testimonials[activeIndex];

  return (
    <section
      aria-label="Client & Architect Testimonials"
      style={{
        paddingTop: 'var(--space-section-padding-desktop)',
        paddingBottom: 'var(--space-section-padding-desktop)',
        backgroundColor: '#F7F5F1',
        color: '#181818',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '6vw', paddingRight: '6vw' }}>
        <div
          className="testimonials-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'clamp(40px, 6vw, 100px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Testimonial Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '32px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-family-sans)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold)',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                CLIENT FEEDBACK
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  fontSize: 'clamp(28px, 3.2vw, 44px)',
                  fontWeight: 300,
                  lineHeight: '1.15',
                  color: '#181818',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                From our clients and architects
              </h2>
            </div>

            <div style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-serif)',
                      fontSize: '64px',
                      lineHeight: '0.8',
                      color: 'rgba(182, 154, 107, 0.4)',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    “
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-serif)',
                      fontSize: 'clamp(18px, 1.8vw, 24px)',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      lineHeight: '1.6',
                      color: '#181818',
                      marginBottom: '28px',
                    }}
                  >
                    {activeT.quote}
                  </p>

                  <div>
                    <cite
                      style={{
                        fontStyle: 'normal',
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent-gold)',
                        display: 'block',
                      }}
                    >
                      — {activeT.role}
                    </cite>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-sans)',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#8A8A8A',
                        marginTop: '4px',
                        display: 'block',
                      }}
                    >
                      {activeT.location}
                    </span>
                  </div>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Navigation & Counter Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginTop: '40px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={scrollLeft}
                  aria-label="Previous testimonial"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '1px solid rgba(182, 154, 107, 0.4)',
                    backgroundColor: 'transparent',
                    color: '#181818',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 300ms ease',
                  }}
                  className="editorial-nav-btn"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="Next testimonial"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '1px solid rgba(182, 154, 107, 0.4)',
                    backgroundColor: 'transparent',
                    color: '#181818',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 300ms ease',
                  }}
                  className="editorial-nav-btn"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-family-sans)',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#8A8A8A',
                  letterSpacing: '0.1em',
                }}
              >
                <strong style={{ color: '#181818', fontWeight: 600 }}>0{activeIndex + 1}</strong>
                {' '}/{' '}
                0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(182, 154, 107, 0.25)',
            }}
          >
            <img
              src="/Testimonials Feature.png"
              alt="Client &amp; Architect Voices"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Embedded hover styling */}
        <style>{`
          .editorial-nav-btn {
            transition: all 300ms var(--motion-ease-luxury) !important;
          }
          .editorial-nav-btn:hover {
            background-color: #181818 !important;
            color: #FFFFFF !important;
            border-color: #181818 !important;
            transform: scale(1.05) !important;
          }
          .editorial-nav-btn:active {
            transform: scale(0.95) !important;
          }
          @media (max-width: 1023px) {
            .testimonials-split-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

/* ==========================================================================
   7. CONSULTATION CTA SECTION (DARK DEEP NAVY #181818)
   ========================================================================== */
const ConsultationSection: React.FC = () => {
  return (
    <section
      id="consultation"
      aria-label="Talk To Us"
      style={{
        position: 'relative',
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-text-primary)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 0.45, scale: 1.00 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.0, ease: luxuryEase }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images.consultationBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          willChange: 'transform, opacity',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(24,24,24,0.3) 0%, rgba(24,24,24,0.9) 100%)',
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
          maxWidth: '900px',
          padding: '80px 6vw',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.h2
          variants={staggerItem}
          className="section-title text-white"
          style={{ marginBottom: '16px' }}
        >
          Have a Space in Mind?
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="description text-light"
          style={{ margin: '0 auto', marginBottom: 'clamp(28px, 4vw, 44px)' }}
        >
          Let's design a kitchen or wardrobe that feels completely yours.
        </motion.p>

        <motion.div variants={staggerItem}>
          <a
            href="/talk-to-us"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/talk-to-us');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="btn btn-light"
          >
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ==========================================================================
   MAIN HOME PAGE COMPONENT
   ========================================================================== */
export const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useDocumentMeta(
    'Leoz Cucine | Premium Kitchens & Wardrobes',
    'Premium kitchens and wardrobes, thoughtfully designed for modern homes.'
  );

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="page-home">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Header />
      <main id="main-content">
        <HeroSection />
        <BrandIntroSection />
        <CategoriesSection />
        <CollectionsSection />
        <WhyLeozSection />
        <HighlightsBarSection />
        <ProjectsSection />
        <ProcessSection />
        <ClientsStripSection />
        <TestimonialsSection />
        <ConsultationSection />
      </main>
      <Footer />
      <style>{`
        @media (max-width: 767px) {
          .home-pillars-grid, .home-collections-grid, .home-process-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .home-pillars-grid, .home-collections-grid, .home-process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

