import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



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

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
