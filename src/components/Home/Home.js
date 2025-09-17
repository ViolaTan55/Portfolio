import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/Projects/tenantpower.png"
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Viola_Tan_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">Hi! I'm Viola
              </h1>

              <div style={{ paddingTop: 30, textAlign: "left" }}>
                <Type />
              </div>

              <p className="home-about-body">
              I want to combine design and technology like machine learning for social good.
              <br />
              <br />
              I care about <b className="purple">accessibility</b>, so I visualize <b className="purple">data</b> and <b className="purple">machine learning models.</b> I also make <b className="purple">3D modeling</b> and <b className="purple">architectural design</b> processes more learnable.
              
            </p>
            <br />
            <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <p style={{paddingTop: 30,opacity: 0.5}}>website forked from Soumyajit4419</p>
            </Col>

            <Col md={5} style={{ paddingTop: 120 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
    </section>
  );
}

export default Home;
