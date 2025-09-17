import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Human-Computer <strong className="purple">Interaction </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Assets/Projects/rhinoai3.png"
              isBlog={false}
              title="RhinoAI"
              link="/rhinoai"
              description="RhinoAI redefines the landscape of 3D modeling by seamlessly integrating large language models (LLMs) with Rhinoceros 3D, offering an intuitive, dynamic, and accessible framework for novice and professional users alike."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Assets/Projects/visualizer.png"
              isBlog={false}
              title="3D Encoder Visualizer"
              link="/visualizer"
              description="Through making the invisible visible, this project aims to provide a intuitive and interactive way to understand the inner workings of 3D generative models by visualizing its 3D encoder step-by-step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Assets/Projects/transformable.png"
              isBlog={false}
              title="Transformable Seifert Surfaces"
              link="/transformable"
              description="Through finding points on a given surface where normal vectors intersect, this algorithm can transform any given surface into transformable scissor structures that expands and contracts."
              /*}
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"*/         
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Assets/Projects/tenantpower.png"
              isBlog={false}
              title="Tenant Power"
              link="/tenantpower"
              description="Identified corporate landlord networks in Massachusetts and developed interactive data visualizations for tenants, activists and nonprofits."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Assets/Projects/workshop.png"
              isBlog={false}
              title="Design-Play Kit"
              link="/designplaykit"
              description="Develop a prototype converting abandoned retail stores into affordable housing sites, while incorporating digital tools in a public event to engage people outside of architecture to join the reimagination of these abandoned sites."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Assets/Projects/cnn.png"
              isBlog={false}
              title="Park Event Categorization"
              link="/parkcnn"
              description="Trained a CNN classifier using the NYCParks dataset with Keras and tensorflow backened. The classifier sucessfully predicted the various types of park events, and was then applied onto scraped social media imagery to help urban planners understand park usage."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
