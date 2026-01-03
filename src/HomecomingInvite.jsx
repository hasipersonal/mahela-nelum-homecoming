/* src/HomecomingInvite.jsx */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Homecoming.css';

// Import your foreground image here
import foregroundCoupleImg from './assets/images/couple-foreground.png';

const HomecomingInvite = () => {
  return (
    <div className="invite-container text-center">
      {/* The main content layer that sits on top of the background */}
      <Container className="content-layer">
        
        {/* Top Section: Time and Location Header */}
        <Row className="pt-4 align-items-start header-detail">
          <Col xs={6} className="text-start">
            <h4>06:30 PM</h4>
            <p><i className="bi bi-geo-alt text-danger me-1"></i>Our Home</p>
          </Col>
          <Col xs={6} className="text-end">
            <h4>Galgamuwa</h4>
            <p>Sri Lanka</p>
          </Col>
        </Row>

        <div className="title-section">
          <p className="date-title text-uppercase mb-2">24 January 2026</p>
          <h1 className="main-title text-uppercase">HOMECOMING</h1>
          <h2 className="script-subtitle">Celebration</h2>
        </div>

        <div className="names-badge-container">
          <div className="names-badge">
            <h2>Mahela</h2>
            <span>&</span>
            <h2>Nelum</h2>
          </div>
        </div>

        <Row className="justify-content-center mt-5 text-shadow-sm gap-3">
            <Col md={5} lg={4} className="schedule-box px-4">
                <h5>06:30 PM | Welcome</h5>
                <p>
                Join us for welcome drinks and appetizers in the main foyer as we kick off the evening's celebration.
                </p>
            </Col>
            <Col md={5} lg={4} className="schedule-box px-4">
                <h5>08:00 PM | Dinner</h5>
                <p>
                    A celebratory dinner buffet will be served in the banquet hall, followed by music and dancing.
                </p>
            </Col>
        </Row>

      </Container>

      <div className="foreground-image-container">
           <img src={foregroundCoupleImg} alt="Happy Couple" />
      </div>
    </div>
  );
};

export default HomecomingInvite;