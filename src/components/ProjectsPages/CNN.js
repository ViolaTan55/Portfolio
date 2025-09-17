import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function CNN() {
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
          <strong>Park Event Categorization</strong>
        </h1>
        <h2 style={{ paddingBottom: 15 }} className="subheading">
          Urban Sensing + Machine Learning
        </h2>
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            23 Summer, Individual Work.
        </p>

        <img src="/Assets/ProjectPages/cnn.png" className="img-fluid" style={{paddingBottom: 30}}/>

      <p className="project-description" style={{ paddingBottom: 15 }}>
      Understanding park events and their categorization offers pivotal insights into urban parks and their integral roles in cities. The objective of this study is to explore the efficacy of Convolutional Neural Networks (CNNs) in categorizing park events through images. Utilizing image and event category data from the New York City Parks Events Listing database, we trained a CNN model with the aim of enhancing the efficiency of park event categorization.
        </p>
      
        <img src="/Assets/ProjectPages/Portfolio_Page_15.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_16.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_17.png" className="img-fluid" style={{paddingBottom: 15}}/>


      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default CNN;
