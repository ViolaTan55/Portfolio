import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "/Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import ProjectCard from "../Projects/ProjectCards";

function Home() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <style>
        {`
          .home-section {
            padding-top: 100px !important;
            padding-bottom: 0px !important;
          }
          .home-content {
            padding: 1rem 0 0.5rem !important;
          }
          .home-header {
            padding-top: 20px !important;
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading-name">Hi! I'm Viola
                </h1>

                <div style={{ paddingTop: 20, textAlign: "left" }}>
                  <Type />
                </div>

                <p className="home-about-body">
                I am a Master's student at Harvard studying human-computer interaction.
                <br />
                <br />
                {/* I care about <b className="purple">accessibility</b>, so I visualize <b className="purple">data</b> and <b className="purple">machine learning models.</b> I also make <b className="purple">3D modeling</b> and <b className="purple">architectural design</b> processes more learnable. */}
                I have previously worked at <strong>Abaka.AI</strong> (product management), <strong>MIT</strong> (research), <strong>City of Boston</strong> (data analysis), and <strong>Zahner</strong> (machine learning).
              </p>
              <br />
            {/* <Button
            variant="primary"
            href="/Assets/Viola_Tan_Resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
          {/* <p style={{paddingTop: 0,opacity: 0.5}}>website forked from Soumyajit4419</p> */}
              </Col>

              <Col md={5} style={{ paddingTop: 30 }}>
                <img
                  src="/Assets/Projects/tenantpower.png"
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "300px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

       <Container fluid className="project-section" style={{ paddingTop: "20px",paddingBottom: "20px", backgroundColor: "#f8f9fa" }}>
        <Container>
          {/* <h3  style={{ fontSize: "1.5rem", paddingBottom:"0",marginBottom:"0" }}>
            Featured Projects
          </h3> */}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/suits.png"
                isBlog={false}
                title="NASA Spacesuit Interface"
                link="/suits"
                keywords="UX • AR"
                description="Developing an AR spacesuit user interface for the NASA SUITS Challenge, assisting astronauts to access critical information during extravehicular activities."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/gossip.png"
                isBlog={false}
                title="Gossip App"
                link="/gossip"
                keywords="UX • Frontend • Web App"
                description="Facilitating healthy gossipping through addressing pain points identified during user research."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/rhinoai3.png"
                isBlog={false}
                title="RhinoAI"
                link="/rhinoai"
                keywords="HCI • LLM • 3D Modeling"
                description="Integrating LLMs with Rhino to provide procedural instructions and demonstrations, making 3D modeling accessible to novice users."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/visualizer.png"
                isBlog={false}
                title="3D Encoder Visualizer"
                link="/visualizer"
                keywords="HCI • ML • Visualization"
                description="An intuitive and interactive way to understand the inner workings of 3D generative models by visualizing cross-attention in its 3D encoder."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/tenantpower.png"
                isBlog={false}
                title="Tenant Power"
                link="/tenantpower"
                keywords="Data Analysis • Visualization"
                description="Identifying corporate landlord networks in Massachusetts and developing interactive data visualizations for tenants."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/workshop.png"
                isBlog={false}
                title="Design-Play Kit"
                link="/designplaykit"
                keywords="HCI • Interactive Installation"
                description="Building an interactive installation for a public event to engage people outside of architecture to join the reimagination of abandoned sites."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/cnn.png"
                isBlog={false}
                title="Park Event Categorization"
                link="/parkcnn"
                keywords="ML • Visualization"
                description="Training a CNN classifier using the NYCParks dataset and applying it on social media imagery to help urban planners understand park usage."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/Assets/Projects/transformable.png"
                isBlog={false}
                title="Transformable Surfaces"
                link="/transformable"
                keywords="Optimization • 3D Geometry"
                description="Optimization algorithm that can transform any eligible surface into transformable scissor structures that expands and contracts."
              />
            </Col>
            
          </Row>
    
        </Container>
      </Container>

      
    </div>
  );
}

export default Home;
