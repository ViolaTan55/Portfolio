import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import rhinoAI from "../../Assets/Projects/rhinoai3.png";
import visualizer from "../../Assets/Projects/visualizer.png";

import tenantpower from "../../Assets/Projects/tenantpower.png";
import cnn from "../../Assets/Projects/cnn.png";
import workshop from "../../Assets/Projects/workshop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Human-Computer Interaction
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rhinoAI}
              isBlog={false}
              title="RhinoAI"
              link="/rhinoai"
              description="Integrating LLMs with Rhino to provide procedural instructions and demonstrations, making 3D modeling accessible to novice users."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualizer}
              isBlog={false}
              title="3D Encoder Visualizer"
              link="/visualizer"
              description="An intuitive and interactive way to understand the inner workings of 3D generative models by visualizing cross-attention in its 3D encoder."
            />
          </Col>

          


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenantpower}
              isBlog={false}
              title="Tenant Power"
              link="/tenantpower"
              description="Identifying corporate landlord networks in Massachusetts and developing interactive data visualizations for tenants."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workshop}
              isBlog={false}
              title="Design-Play Kit"
              link="/designplaykit"
              description="Building an interactive installation for a public event to engage people outside of architecture to join the reimagination of abandoned sites."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="Park Event Categorization"
              link="/parkcnn"
              description="Training a CNN classifier using the NYCParks dataset and applying it on social media imagery to help urban planners understand park usage."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
