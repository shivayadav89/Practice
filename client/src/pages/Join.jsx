import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    planInterest: '',
    goal: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Send message via WhatsApp
    const whatsappNumber = '918957819107';
    const message = encodeURIComponent(
      `Hi Just Fitness! I want to join the gym:\n\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Plan Interest: ${formData.planInterest}\n` +
      `Fitness Goal: ${formData.goal}`
    );
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', mobile: '', email: '', planInterest: '', goal: '' });
  };

  const plans = [
    'Monthly',
    'Half Yearly',
    'Yearly'
  ];

  const goals = [
    'Weight Loss',
    'Muscle Building',
    'General Fitness',
    'Strength Training',
    'Flexibility',
    'Sports Performance',
    'Other'
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
            Join Just Fitness
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Start your transformation journey today
          </motion.p>
        </div>
      </section>

      {/* Join Form */}
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="card">
                  <h2 className="text-gold text-center mb-4">Enquiry Form</h2>
                  <p className="text-center mb-4">
                    Fill out this form and our team will contact you with personalized recommendations.
                  </p>
                  
                  {submitted && (
                    <Alert variant="success" className="mb-4">
                      <Alert.Heading>Thank you for your interest!</Alert.Heading>
                      <p>
                        WhatsApp has been opened with your enquiry details. Please send the message 
                        to complete your membership enquiry. Our team will contact you within 24 hours.
                      </p>
                    </Alert>
                  )}

                  {error && (
                    <Alert variant="danger" className="mb-4">
                      {error}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Mobile Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            pattern="[0-9]{10}"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email (optional)"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Plan Interest *</Form.Label>
                      <Form.Select
                        name="planInterest"
                        value={formData.planInterest}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a plan</option>
                        {plans.map(plan => (
                          <option key={plan} value={plan}>{plan}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Your Fitness Goal *</Form.Label>
                      <Form.Select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your goal</option>
                        {goals.map(goal => (
                          <option key={goal} value={goal}>{goal}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </Form>

                  <p className="text-center mt-4 text-muted" style={{ fontSize: '0.9rem' }}>
                    By submitting this form, you agree to be contacted by Just Fitness 
                    regarding membership options and promotions.
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Why Join Just Fitness?
            </motion.h2>
          </div>
          
          <Row>
            {[
              'Free fitness assessment with trainer',
              'Personalized workout plan',
              'Nutrition guidance included',
              'No hidden fees or contracts',
              'Flexible timing options',
              'Access to all facilities'
            ].map((benefit, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div
                  className="card text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="mb-0">
                    <span className="text-gold me-2">✓</span>
                    {benefit}
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
            <h2 className="text-gold mb-4">Questions?</h2>
            <p className="mb-5" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
              Our team is here to help. Call us or visit our facility for a free tour.
            </p>
            <a href="tel:+919876543210" className="btn btn-primary btn-lg me-3">
              Call Us
            </a>
            <a href="/contact" className="btn btn-outline btn-lg">
              Visit Us
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Join;
