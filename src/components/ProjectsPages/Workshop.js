import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Workshop() {
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
          <strong>Design-Play Kit</strong>
        </h1>
        <h2 style={{ paddingBottom: 15 }} className="subheading">
          An Interactive Device for Engaging Non-Architects in Designing for Adaptive Reuse
        </h2>
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            23 Spring, Rhode Island School of Design. With <em>Architecture for All</em>.
        </p>

        <img src="/Assets/ProjectPages/workshop.JPG" className="img-fluid" style={{paddingBottom: 30}}/>

      <p className="project-description" style={{ paddingBottom: 15 }}>
          This is a collaborative design research project between Architecture for All, a student organization at Rhode Island School of Design that I founded, and ONE Neighborhood Builders, a housing nonprofit in Providence. In researching how to design for adaptive reuse, we organized a workshop at RISD with this interactive device to engage the public in the design process, making architectural design accessible.
        </p>
      
        <img src="/Assets/ProjectPages/Portfolio_Page_23.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_24.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_25.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_26.png" className="img-fluid" style={{paddingBottom: 15}}/>


      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default Workshop;
