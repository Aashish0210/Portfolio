import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import { motion } from "framer-motion"; // for motion
import { fadeIn } from "../components/variants";


const Contact = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}>

    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
    </motion.div>
  )
}

export default Contact