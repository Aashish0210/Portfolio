import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../../assets/projects/women.json";
import animationData2 from "../../assets/projects/hi.json";
import {motion} from 'framer-motion';//for motion
import { fadeIn } from '../variants';

const About = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutSectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add("show"); // Add class to trigger animation
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{ paddingTop: "50px" }} // Minimized upper gap
    >
      <Container>
        <Row>
        <Col
            md={6}
            className="home-about-description scroll-up"
            ref={aboutSectionRef}
          >
           <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            
              <motion.p 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="home-about-body">
              Hi, I am <span className="yellow"> Aashish </span> and I'm from{" "}
              <span className="yellow">Kathmandu, Nepal.</span>
              <br />
              <br />
              Recently, I am pursuing a Bachelor's degree in Computer Application.
              <br />
              <br />
              I have good knowledge of <b className="yellow">Python, Django, React and Streamlit.</b> I have also
              worked with other programming languages like <b className="yellow">Java, JavaScript and C.</b>
              </motion.p>
              <div>
               <Lottie animationData={animationData} />
             
            </div>
          </Col>
          <Col md={6} className="myAvtar">
            <div>
              <Lottie animationData={animationData2} />
            </div>
            
            <motion.p
  variants={fadeIn('up', 0.4)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="home-about-body1"
>
  I am passionate about <b className="yellow">Machine Learning</b> and have worked on projects in this
  field. As a <b className="yellow">Full-Stack Developer</b>, I enjoy tackling challenges and building
  modern web technologies.
  <br />
  <br />
  I have expertise in tools like <b className="yellow">Python</b> and modern JavaScript libraries such as{" "}
  <b className="yellow">React.js</b>.
  <br />
  <br />
  Additionally, I am deeply interested in exploring <b className="yellow">Artificial Intelligence</b> and
  creating innovative products.
</motion.p>

          </Col>
         
        </Row>
      </Container>
    </Container>
  );
};

export default About;
