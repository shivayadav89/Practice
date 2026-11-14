import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

function Facilities() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const facilities = [
    {
      name: 'Cardio Zone',
      description: 'State-of-the-art treadmills, ellipticals, stationary bikes, and rowing machines from top brands. All equipped with heart rate monitors and entertainment systems.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80'
    },
    {
      name: 'Strength Training',
      description: 'Comprehensive free weights area with dumbbells up to 150lbs, Olympic barbells, squat racks, and premium machines for all muscle groups.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80'
    },
    {
      name: 'Group Classes',
      description: 'Spacious studio for yoga, Zumba, HIIT, spinning, and more. Professional sound system and mirrored walls for optimal experience.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80'
    },
    {
      name: 'Personal Training',
      description: 'Private training zones equipped with everything needed for one-on-one sessions. Personalized attention for maximum results.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80'
    },
    {
      name: 'Locker Rooms',
      description: 'Clean, secure lockers with digital locks. Spacious showers with premium amenities, hair dryers, and grooming stations.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80'
    },
    {
      name: 'Nutrition Corner',
      description: 'Healthy snacks, protein shakes, supplements, and hydration station. Nutrition counseling available for personalized diet plans.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80'
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
            Our Facilities
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            World-class amenities designed for your comfort and performance
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section">
        <Container>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="facility-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <img src={facility.image} alt={facility.name} className="facility-image" />
                <div className="facility-info">
                  <h4 className="facility-name">{facility.name}</h4>
                  <p>{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Amenities */}
      <section className="section section-dark">
        <Container>
          <div className="section-title">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Additional Amenities
            </motion.h2>
          </div>
          
          <Row>
            {[
              'Free parking with 24/7 security',
              'High-speed Wi-Fi throughout',
              'Climate-controlled environment',
              'Drinking water stations',
              'Towel service included',
              'Massage therapy available',
              'Sauna and steam room',
              'Pro shop for supplements and gear'
            ].map((amenity, index) => (
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
                    {amenity}
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
            <h2 className="text-gold mb-4">Experience Our Facilities</h2>
            <p className="mb-5" style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
              Book a free tour and see why Just Fitness is the perfect place for your fitness journey.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Book a Tour
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default Facilities;
