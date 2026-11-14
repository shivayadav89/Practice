import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaExpand } from 'react-icons/fa';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80'
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Gallery
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Take a visual tour of our world-class facility
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <Container>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <FaExpand size={24} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Modal */}
      <Modal
        show={selectedImage !== null}
        onHide={() => setSelectedImage(null)}
        centered
        size="lg"
        className="gallery-modal"
      >
        <Modal.Body className="p-0">
          <img 
            src={selectedImage} 
            alt="Selected" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Gallery;
