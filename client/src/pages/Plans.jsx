import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

function Plans() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const plans = [
    {
      name: 'Monthly',
      duration: '1 Month',
      price: '₹2,000',
      popular: false,
      features: [
        'Gym Access',
        'Locker Facility',
        'Basic Trainer Guidance',
        'Free Wi-Fi',
        'Drinking Water'
      ]
    },
    {
      name: 'Half Yearly',
      duration: '6 Months',
      price: '₹10,000',
      popular: true,
      features: [
        'Gym Access',
        'Locker Facility',
        'Personal Trainer (8 sessions)',
        'Diet Plan',
        'Group Classes Access',
        'Nutrition Consulting',
        'Priority Booking'
      ]
    },
    {
      name: 'Yearly',
      duration: '12 Months',
      price: '₹18,000',
      popular: false,
      features: [
        'All Half Yearly Benefits',
        'Unlimited Personal Training',
        'Advanced Nutrition Consulting',
        'Spa & Sauna Access',
        'Guest Pass (2/month)',
        'Exclusive Merchandise',
        'Birthday Special Offers'
      ]
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
            Membership Plans
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Choose the perfect plan for your fitness journey
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <Container>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`plan-card ${plan.popular ? 'popular' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="plan-name">{plan.name}</h3>
                <p className="text-muted mb-2">{plan.duration}</p>
                <div className="plan-price">
                  {plan.price}
                  <span>/total</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href="/join" className="btn btn-primary">
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Comparison */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Plan Comparison
            </motion.h2>
          </div>
          
          <div className="table-responsive">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Monthly</th>
                  <th>Half Yearly</th>
                  <th>Yearly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gym Access</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Locker Facility</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Personal Training</td>
                  <td>-</td>
                  <td>8 sessions</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Diet Plan</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Group Classes</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Nutrition Consulting</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Spa Access</td>
                  <td>-</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Guest Pass</td>
                  <td>-</td>
                  <td>-</td>
                  <td>2/month</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            <h2 className="text-gold mb-4">Still Confused?</h2>
            <p className="mb-5" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
              Our team is here to help you choose the right plan. Contact us for a 
              free consultation and personalized recommendation.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Plans;
