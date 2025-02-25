import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import drone from "../../Assets/Projects/drone.png";
import virtualrobot from "../../Assets/Projects/virtual.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Robotics</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drone}
              isBlog={false}
              title="Pi Drone"
              link="/drone"
              description="Built and programmed a small quad-rotor helicopter, using PID controllers for stable flight, localization with a camera, and Kalman Filters for height estimation and mapping."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualrobot}
              isBlog={false}
              title="Virtual Robotics"
              link="/virtualrobot"
              description="Designed and modeled virtual robots and environments for an education platform featuring block-based programming; simulated robot functionality using Unity C#, and created robot games for classroom engagement."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
