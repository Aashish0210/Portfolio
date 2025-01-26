import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";
import {motion} from 'framer-motion';//for motion
import { fadeIn } from '../variants';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <motion.div
    variants={fadeIn('up,left', 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}>
    <footer className="footer">
      <Container fluid>
        <Row className="footer-main">
          {/* About Section */}
          <Col md="4" className="footer-section">
            <h5>About Me</h5>
            <p>
              I am dedicated to create impactful solutions and provide
              high-quality services to help my clients succeed in their
              ventures.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md="4" className="footer-section">
            <h5>Contact</h5>
            <ul className="contact-list">
              <li>
                <FaPhone /> +977-9869210025
              </li>
              <li>
                <FaEnvelope /> aashishpradhan608@gmail.com
              </li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md="4" className="footer-section">
            <h5>Find me on</h5>
            <p>
              Please don't hesitate to reach out 
              and <span className="yellow">connect</span> with me.
            </p>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Aashish0210"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Aashish0210"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Aashish Pradhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/blessz_0210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center">
            <p>© {year} All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </motion.div>
  );
};

export default Footer;
