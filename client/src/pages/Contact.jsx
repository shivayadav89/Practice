import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
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
      `Hi Just Fitness! I have an enquiry:\n\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email || 'Not provided'}\n\n` +
      `Message: ${formData.message}`
    );
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', mobile: '', message: '' });
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
            Contact Us
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Get in touch with us for any queries or to join our fitness family
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={5}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-gold mb-4">Get In Touch</h2>
                
                <div className="mb-4">
                  <p className="mb-3">
                    <FaMapMarkerAlt className="text-gold me-3" size={20} />
                    123 Fitness Street, Gym District, City
                  </p>
                  <p className="mb-3">
                    <FaPhone className="text-gold me-3" size={20} />
                    <a href="tel:+918957819107">+91 89578 19107</a>
                  </p>
                  <p className="mb-3">
                    <FaEnvelope className="text-gold me-3" size={20} />
                    <a href="mailto:info@justfitness.com">info@justfitness.com</a>
                  </p>
                </div>

                <h4 className="text-gold mb-3">Business Hours</h4>
                <div className="mb-4">
                  <p className="mb-2"><FaClock className="text-gold me-2" size={16} /> Monday - Friday: 6:00 AM - 10:00 PM</p>
                  <p className="mb-2"><FaClock className="text-gold me-2" size={16} /> Saturday: 7:00 AM - 8:00 PM</p>
                  <p className="mb-2"><FaClock className="text-gold me-2" size={16} /> Sunday: <span className="text-danger">Closed</span></p>
                </div>

                {/* Google Map Embed */}
                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '250px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.986510026471!2d73.16340887499453!3d19.239419681999156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7941a6f19a68b%3A0x5ea37c266acf96c6!2sJust%20fitness%20club!5e0!3m2!1sen!2sin!4v1794493974774!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Just Fitness Location"
                  ></iframe>
                </div>
              </motion.div>
            </Col>

            <Col lg={7}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-gold mb-4">Send Us a Message</h2>
                
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Thank you for contacting us! WhatsApp has been opened with your message. Please send it to complete your enquiry.
                  </Alert>
                )}

                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      minLength={2}
                    />
                  </Form.Group>

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
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </Form.Group>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
