import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function VirtualRobot() {
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
          <strong>Virtual Robotics</strong>
        </h1>
        
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            21 Summer, Vanderbilt University. Research in the Institute for Software Integrated Systems.
        </p>

        <p style={{paddingBottom: 30 }} className="project-description">
        I designed and modeled virtual robots and environments for an education platform called NetsBlox, which features block-based programming to advance computer science education in high schools. I created the digital twin of a real-world IoT device, simulating sensor functionalities using Unity C#, and created robot games for classroom engagement.
        </p>

        <img src="/Assets/Robotics/1.png" className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src="/Assets/Robotics/3.png" className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src="/Assets/Robotics/4.png" className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src="/Assets/Robotics/5.png" className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src="/Assets/Robotics/6.png" className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>

      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default VirtualRobot;
