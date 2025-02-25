import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import page from "../../Assets/../Assets/Robotics/drone_page.png"


function Drone() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" 
      style={{ paddingLeft: 100, paddingRight: 100 }}>
      <Row className="d-flex justify-content-center">
      <Col style={{ maxWidth: "1100px"}}>

      
        <h1 style={{ paddingBottom: 15 }} className="heading">
          <strong>Pi Drone</strong>
        </h1>
        
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            21 Summer, Brown University. Research in the Humans To Robots Lab.
        </p>

        <p style={{ paddingBottom: 15 }} className="project-description">
        In CS1951R, I built and programmed a small quad-rotor helicopter, using PID controllers for stable flight, localization with a camera, and Kalman Filters for height estimation and mapping. Later, I joined Prof. Tellex's lab to develop the software stack for a new version of the drone, updating the hardware with better sensors. I also led training, outreach, and technical support for high school teachers on Python and ROS.

        </p>

        <img src={page} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>


      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default Drone;
