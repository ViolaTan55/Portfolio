import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import transformable from "../../Assets/Projects/transformable.png";
import drone from "../../Assets/Projects/drone.png";
import virtualrobot from "../../Assets/Projects/virtual.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Robotics
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transformable}
              isBlog={false}
              title="Transformable Surfaces"
              link="/transformable"
              description="Optimization algorithm that can transform any eligible surface into transformable scissor structures that expands and contracts."
              /*}
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"*/         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drone}
              isBlog={false}
              title="Pi Drone"
              link="/drone"
              description="A small quad-rotor helicopter that uses PID controllers for stable flight, localization with a camera, and Kalman Filters for state estimation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualrobot}
              isBlog={false}
              title="Virtual Robotics"
              link="/virtualrobot"
              description="Building virtual robots and environments for an education platform featuring block-based programming."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
