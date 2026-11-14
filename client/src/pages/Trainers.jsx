import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

function Trainers() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const trainers = [
    {
      name: 'Rajesh Kumar',
      specialization: 'Strength & Conditioning',
      experience: '10 years',
      bio: 'Certified fitness expert specializing in muscle building and strength training. Former national-level athlete with passion for helping others achieve their goals.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80'
    },
    {
      name: 'Priya Sharma',
      specialization: 'Yoga & Flexibility',
      experience: '8 years',
      bio: 'Yoga certified instructor helping members achieve balance and flexibility. Trained in Rishikesh with expertise in Hatha, Vinyasa, and Power Yoga.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80'
    },
    {
      name: 'Amit Verma',
      specialization: 'Weight Loss',
      experience: '6 years',
      bio: 'Specialist in fat loss and body transformation programs. Certified nutritionist with focus on sustainable lifestyle changes.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80'
    },
    {
      name: 'Vikram Singh',
      specialization: 'Bodybuilding',
      experience: '12 years',
      bio: 'Former competitive bodybuilder with extensive knowledge of hypertrophy training. Has helped numerous members win competitions.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
    },
    {
      name: 'Divya Nair',
      specialization: 'Pilates & Core',
      experience: '7 years',
      bio: 'Pilates instructor focused on core strength and posture correction. Trained in classical Pilates with modern rehabilitation techniques.',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80'
    }
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
            Our Trainers
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Meet the experts who will guide your fitness journey
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section">
        <Container>
          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                className="trainer-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                <div className="trainer-info">
                  <h4 className="trainer-name">{trainer.name}</h4>
                  <p className="trainer-specialization">{trainer.specialization}</p>
                  <p className="trainer-experience">{trainer.experience} experience</p>
                  <p className="mt-3" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    {trainer.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Our Trainers */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Why Our Trainers?
            </motion.h2>
          </div>
          
          <Row>
            {[
              'Certified professionals with recognized credentials',
              'Years of practical experience in fitness industry',
              'Personalized approach to every member',
              'Continuous education in latest fitness trends',
              'Passionate about helping you achieve your goals',
              'Supportive and motivating training style'
            ].map((reason, index) => (
              <Col md={6} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="mb-3"
                >
                  <p className="mb-2">
                    <span className="text-gold me-2">✓</span>
                    {reason}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-gold mb-4">Ready to Train with the Best?</h2>
            <p className="mb-5" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
              Join Just Fitness and get personalized training from our expert team. 
              Your first consultation is free!
            </p>
            <a href="/join" className="btn btn-primary btn-lg">
              Start Your Journey
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Trainers;
