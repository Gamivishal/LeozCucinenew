import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { GalleryCard } from '../components/ui/GalleryCard';
import { images } from '../assets/images';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const luxuryEase = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: luxuryEase } },
};

type FilterTab = 'ALL' | 'KITCHENS' | 'WARDROBES';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterTab>('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentMeta(
    'Kitchen & Wardrobe Projects | Leoz Cucine',
    'A selection of kitchens and wardrobe projects designed for modern homes.'
  );

  const filteredProjects = images.projects.filter((project) => {
    if (filter === 'ALL') return true;
    if (filter === 'KITCHENS') return project.category === 'LUXURY KITCHEN';
    return project.category === 'LUXURY WARDROBE';
  });

  const handleCardClick = (link: string) => {
    window.history.pushState({}, '', link);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="page-projects" style={{ backgroundColor: 'var(--color-light)', color: 'var(--color-heading)' }}>
      <Header />

      <main id="main-content" style={{ paddingTop: '75px' }}>
        {/* HERO */}
        <section
          aria-label="Projects Hero"
          style={{
            position: 'relative',
            minHeight: '60vh',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
          }}
        >
          <img
            src={images.projects[0].image}
            alt="Leoz Cucine kitchen and wardrobe projects"
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
              background: 'rgba(24, 24, 24, 0.45)',
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
              OUR PROJECTS
            </span>
            <h1 className="page-title text-white" style={{ marginBottom: '16px' }}>
              Designed. Detailed. Delivered.
            </h1>
            <p className="hero-description text-light">
              A selection of kitchens and wardrobes created for modern homes.
            </p>
          </motion.div>
        </section>

        {/* FILTER BAR */}
        <section aria-label="Project Filters" style={{ padding: '48px 6vw 0' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {(['ALL', 'KITCHENS', 'WARDROBES'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className="btn"
                style={{
                  background: filter === tab ? 'var(--color-heading)' : 'transparent',
                  color: filter === tab ? '#FFFFFF' : 'var(--color-heading)',
                  border: '1px solid var(--color-heading)',
                  minHeight: '40px',
                  padding: '8px 20px',
                }}
              >
                {tab === 'ALL' ? 'All' : tab === 'KITCHENS' ? 'Kitchens' : 'Wardrobes'}
              </button>
            ))}
          </div>
        </section>

        {/* PROJECT GRID */}
        <section aria-label="Project Grid" style={{ padding: '32px 6vw var(--space-section-padding-desktop)' }}>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <GalleryCard
                  image={project.image}
                  name={project.title}
                  finish={project.category === 'LUXURY KITCHEN' ? 'KITCHEN' : 'WARDROBE'}
                  aspectRatio="4/5"
                  onClick={() => handleCardClick(project.link)}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1023px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 639px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
