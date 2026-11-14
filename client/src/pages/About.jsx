import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBullseye, FaHeart, FaAward, FaClock } from 'react-icons/fa';

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            About Just Fitness
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Discover our story, mission, and what makes us different
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src="/images/about-gym.png"
                  alt="Gym Story"
                  className="img-fluid rounded"
                  style={{ borderRadius: '16px', boxShadow: '0 8px 32px rgba(212, 175, 55, 0.2)' }}
                />
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-gold">Our Story</h2>
                <p>
                  Founded in 2016, Just Fitness started with a simple vision: to create a fitness 
                  facility that combines world-class equipment with a welcoming, supportive community. 
                  What began as a small gym has grown into one of the region's premier fitness destinations.
                </p>
                <p>
                  Over the years, we've helped thousands of members achieve their fitness goals – 
                  from losing weight and building muscle to improving overall health and wellness. 
                  Our success is measured by the success of our members.
                </p>
                <p>
                  Today, Just Fitness stands as a testament to what happens when passion meets 
                  professionalism. We continue to evolve, always staying ahead of fitness trends 
                  while maintaining our core values of excellence, integrity, and community.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section section-dark">
        <Container>
          <Row>
            <Col md={6}>
              <motion.div
                className="card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="text-gold mb-3">
                  <FaBullseye size={48} />
                </div>
                <h3 className="text-gold">Our Mission</h3>
                <p>
                  To empower individuals to achieve their fitness goals through world-class 
                  facilities, expert guidance, and a supportive community. We believe fitness 
                  should be accessible, enjoyable, and sustainable for everyone.
                </p>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                className="card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="text-gold mb-3">
                  <FaAward size={48} />
                </div>
                <h3 className="text-gold">Our Vision</h3>
                <p>
                  To be the leading fitness destination known for excellence, innovation, and 
                  transformative results. We aim to inspire a healthier community by setting 
                  the standard for premium fitness experiences.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="section">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Values
            </motion.h2>
          </div>
          
          <Row>
            {[
              { icon: <FaHeart size={40} />, title: 'Passion', desc: 'We are passionate about fitness and dedicated to helping you succeed.' },
              { icon: <FaAward size={40} />, title: 'Excellence', desc: 'We maintain the highest standards in equipment, training, and service.' },
              { icon: <FaClock size={40} />, title: 'Consistency', desc: 'We believe in showing up every day and putting in the work.' },
              { icon: <FaBullseye size={40} />, title: 'Results', desc: 'We focus on delivering real, measurable results for our members.' }
            ].map((value, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  className="card text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-gold mb-3">{value.icon}</div>
                  <h4 className="text-gold">{value.title}</h4>
                  <p>{value.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Why Choose Just Fitness?
            </motion.h2>
          </div>
          
          <Row>
            {[
              'State-of-the-art equipment from top brands',
              'Certified and experienced trainers',
              'Clean, hygienic, and safe environment',
              'Flexible membership plans',
              'Personalized training programs',
              'Group classes for all fitness levels',
              'Nutrition counseling and diet plans',
              'Ample parking and convenient location'
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
    </>
  );
}

export default About;
