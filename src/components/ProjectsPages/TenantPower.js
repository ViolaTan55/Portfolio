import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function TenantPower() {
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
          <strong>Tenant Power</strong>
        </h1>
        <h2 style={{ paddingBottom: 15 }} className="subheading">
          Data Analysis and Visualization for Housing Justice
        </h2>
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            22 Summer - 24 Spring, MIT.
        </p>

        <img src="/Assets/ProjectPages/tenant.png" className="img-fluid" style={{paddingBottom: 30}}/>

      <p className="project-description" style={{ paddingBottom: 15 }}>
      In Massachusetts and across the United States, housing is increasingly owned by large, corporate landlords who tend to file more eviction notices on their tenants than small, individual landlords. These corporate landlords create limited liability companies to conceal their real identities and minimize their liability, while making housing precarious for tenants. This project approaches limited liability company deduplication through the analysis of property tax assessment data, and business filing records in Massachusetts.
        </p>
      
        <img src="/Assets/ProjectPages/Portfolio_Page_04.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_05.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_06.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_07.png" className="img-fluid" style={{paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Portfolio_Page_08.png" className="img-fluid" style={{paddingBottom: 15}}/>

      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default TenantPower;
