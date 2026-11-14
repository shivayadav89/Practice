import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDumbbell, FaUsers, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            TRANSFORM YOUR BODY,<br />TRANSFORM YOUR LIFE
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Experience the ultimate fitness journey with world-class equipment, 
            expert trainers, and a premium environment designed for your success.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link to="/join" className="btn btn-primary btn-lg">
              Join Now
            </Link>
            <Link to="/plans" className="btn btn-outline btn-lg">
              View Plans
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark">
        <Container>
          <div className="stats">
            <motion.div
              className="stat-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="stat-number">
                500+
              </div>
              <div className="stat-label">Happy Members</div>
            </motion.div>
            <motion.div
              className="stat-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="stat-number">
                15+
              </div>
              <div className="stat-label">Expert Trainers</div>
            </motion.div>
            <motion.div
              className="stat-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="stat-number">
                8+
              </div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            <motion.div
              className="stat-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="stat-number">
                25+
              </div>
              <div className="stat-label">Programs</div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Snippet */}
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
                <h2 className="text-gold">About Just Fitness</h2>
                <p>
                  At Just Fitness, we believe that fitness is not just about working out – 
                  it's about transforming your lifestyle. Our state-of-the-art facility combines 
                  cutting-edge equipment with personalized training programs to help you achieve 
                  your goals, whether you're a beginner or a fitness enthusiast.
                </p>
                <p>
                  With over 8 years of experience, our certified trainers create customized 
                  workout plans tailored to your needs. From strength training to yoga, 
                  from weight loss to muscle building – we have programs for everyone.
                </p>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
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
                <img
                  src="/images/about-gym.png"
                  alt="Gym Interior"
                  className="img-fluid rounded"
                  style={{ borderRadius: '16px', boxShadow: '0 8px 32px rgba(212, 175, 55, 0.2)' }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Facilities Preview */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Facilities
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              World-class amenities designed for your comfort and performance
            </motion.p>
          </div>
          
          <Row>
            {[
              { icon: <FaDumbbell size={40} />, title: 'Cardio Zone', desc: 'State-of-the-art treadmills and ellipticals' },
              { icon: <FaTrophy size={40} />, title: 'Strength Training', desc: 'Free weights and machines' },
              { icon: <FaUsers size={40} />, title: 'Group Classes', desc: 'Yoga, Zumba, HIIT, and more' },
              { icon: <FaCalendarAlt size={40} />, title: 'Personal Training', desc: 'One-on-one expert guidance' }
            ].map((facility, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  className="card text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-gold mb-3">{facility.icon}</div>
                  <h4 className="text-gold">{facility.title}</h4>
                  <p>{facility.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <Link to="/facilities" className="btn btn-primary">
              View All Facilities
            </Link>
          </div>
        </Container>
      </section>

      {/* Plans Preview */}
      <section className="section">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Membership Plans
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Choose the perfect plan for your fitness journey
            </motion.p>
          </div>
          
          <Row className="justify-content-center">
            {[
              { name: 'Monthly', price: '₹2,000', features: ['Gym Access', 'Locker Facility', 'Basic Guidance'] },
              { name: 'Half Yearly', price: '₹10,000', features: ['Gym Access', 'Locker Facility', '8 PT Sessions', 'Diet Plan', 'Group Classes'], popular: true },
              { name: 'Yearly', price: '₹18,000', features: ['All Benefits', 'Unlimited PT', 'Nutrition', 'Spa Access'] }
            ].map((plan, index) => (
              <Col md={4} key={index}>
                <motion.div
                  className={`plan-card ${plan.popular ? 'popular' : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">{plan.price}<span>/mo</span></div>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/plans" className="btn btn-primary">
                    Choose Plan
                  </Link>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Trainers Preview */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Meet Our Trainers
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Expert guidance from certified professionals
            </motion.p>
          </div>
          
          <Row>
            {[
              { name: 'Rajesh Kumar', spec: 'Strength & Conditioning', exp: '10 years', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80' },
              { name: 'Priya Sharma', spec: 'Yoga & Flexibility', exp: '8 years', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80' },
              { name: 'Amit Verma', spec: 'Weight Loss', exp: '6 years', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80' }
            ].map((trainer, index) => (
              <Col md={4} key={index}>
                <motion.div
                  className="trainer-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={trainer.img} alt={trainer.name} className="trainer-image" />
                  <div className="trainer-info">
                    <h4 className="trainer-name">{trainer.name}</h4>
                    <p className="trainer-specialization">{trainer.spec}</p>
                    <p className="trainer-experience">{trainer.exp} experience</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <Link to="/trainers" className="btn btn-primary">
              View All Trainers
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section">
        <Container>
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-gold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-5" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
              Join Just Fitness today and transform your body and mind with our premium 
              fitness experience. Your goals are within reach.
            </p>
            <Link to="/join" className="btn btn-primary btn-lg">
              Join Now
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Home;
