import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <p className="home-about-body">
              I want to combine design and technology like machine learning for social good.
              <br />
              <br />
              I care about <b className="purple">accessibility</b>, so I visualize <b className="purple">data</b> and <b className="purple">machine learning models.</b> I also make <b className="purple">3D modeling</b> and <b className="purple">architectural design</b> processes more learnable.
              
            </p>
            <br />
            <Button
            variant="primary"
            href="/Assets/Viola_Tan_Resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="/Assets/avatar.svg" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>Find Me On</h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ViolaTan55"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/viola-tan-2350391a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:viola_tan@gsd.harvard.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
