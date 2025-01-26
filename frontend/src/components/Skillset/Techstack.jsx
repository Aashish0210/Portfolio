import React from "react";
import { Row, Col } from "react-bootstrap"; // Keep Row import
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiDjango, 
  SiFlask, 
  SiStreamlit, 
  SiSqlite
} from "react-icons/si";
import { motion } from "framer-motion"; // for motion
import { fadeIn } from "../variants";

const Techstack = () => {
  return (
    <motion.div 
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <Row> {/* Wrap Row with motion.div to add motion to it */}
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango title="Django" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask title="Flask" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiStreamlit title="Streamlit" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSqlite title="SQLite3" />
        </Col>
      </Row>
    </motion.div>
  );
};

export default Techstack;
