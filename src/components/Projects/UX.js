import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import suits from "../../Assets/Projects/suits.png";
import gossip from "../../Assets/Projects/gossip.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          User Experience
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suits}
              isBlog={false}
              title="NASA Spacesuit Interface"
              link="/suits"
              description="Developing an AR spacesuit user interface for the NASA SUITS Challenge, assisting astronauts to access critical information during extravehicular activities."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gossip}
              isBlog={false}
              title="Gossip App"
              link="/gossip"
              description="Facilitating healthy gossipping through addressing pain points identified during user research."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
