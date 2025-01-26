import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Toolstack = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    style={{ justifyContent: "center", paddingBottom: "50px" }}
  >
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  </motion.div>
  );
}

export default Toolstack;
