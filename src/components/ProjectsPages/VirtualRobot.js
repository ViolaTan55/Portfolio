import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import page1 from "../../Assets/../Assets/Robotics/1.png"
import page2 from "../../Assets/../Assets/Robotics/2.png"
import page3 from "../../Assets/../Assets/Robotics/3.png"
import page4 from "../../Assets/../Assets/Robotics/4.png"
import page5 from "../../Assets/../Assets/Robotics/5.png"
import page6 from "../../Assets/../Assets/Robotics/6.png"

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

        <img src={page1} className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src={page3} className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src={page4} className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src={page5} className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>
        <img src={page6} className="img-fluid" style={{width:"80%", paddingBottom: 15}}/>

      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default VirtualRobot;
