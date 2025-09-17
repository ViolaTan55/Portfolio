import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function RhinoAI() {
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
          <strong>RhinoAI</strong>
        </h1>
        <h2 style={{ paddingBottom: 15 }} className="subheading">
          An LLM-Based 3D Modeling Assistant for Procedural Instructions and Demonstrations
        </h2>
        <p className="subsubheading">
            24 Fall, Harvard University. With Melo Chen, Kida Huang.
        </p>

        <div style={{ maxWidth: "1100px", width: "100%", paddingBottom: "15px" }}>
          <iframe
            width="100%" // Make iframe responsive
            height="612" // Adjust height proportionally (e.g., 16:9 aspect ratio)
            src="https://www.youtube.com/embed/BNiEUu-vCYA"
            title="Demo_RhinoAI"
            frameBorder="0" // Use camelCase for React
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" // Use camelCase for React
            allowFullScreen // Use camelCase for React
            style={{ border: "none" }} // Remove iframe border
          ></iframe>
        </div>
 
        <div style={{ maxWidth: "1100px", width: "100%", paddingBottom: "15px" }}>
          <iframe
            width="100%" // Make iframe responsive
            height="612" // Adjust height proportionally (e.g., 16:9 aspect ratio)
            src="https://www.youtube.com/embed/xZswJpuQbdg"
            title="Demo_RhinoAI"
            frameBorder="0" // Use camelCase for React
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" // Use camelCase for React
            allowFullScreen // Use camelCase for React
            style={{ border: "none" }} // Remove iframe border
          ></iframe>
        </div>
     
      <p className="project-description" style={{ paddingBottom: 15 }}>
          RhinoAI presents a novel framework designed to integrate LLM capabilities into Rhino to assist novice users in 3D modeling through providing both detailed, step-by-step instructions, and procedurally modeled sample results. Through its unique multi-agent architecture, the system bridges the gap between natural language inputs and complex 3D modeling workflows. This approach democratizes 3D modeling, transforming it from a technical challenge into a creative and accessible experience.
        </p>
      
        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_1.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        The research stems from the broader question of aligning human and machine representations. Specifically, we aim to explore the potential of large language models (LLMs) in understanding and generating 3D geometry in the context of 3D modeling software.
        </p>

        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_2.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        Designed primarily for novice users, RhinoAI aims to guide learners in understanding and mastering the intricacies of 3D modeling. Simultaneously, the system appeals to professionals seeking efficiency in automating repetitive tasks or exploring new workflows. 
        </p>

        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_3.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <p className="project-description" style={{ paddingBottom: 15 }}>
        By providing step-by-step guidance, real-time Q&A support, and procedurally generated results, the platform caters to a diverse user base, from architects and designers to engineers and students venturing into digital design.
        </p>

        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_4.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        During our experimentation stage, we conducted small experiments to test the LLM’s understanding of 3D geometry through Rhino metadata. We found that the LLM is able to carry out commands like: "make one of the boxes longer", or, "make the longer box red".
        </p>

        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_5.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        Our framework integrates multiple agents in the architecture to facilitate both teaching and task completion through iterative and dynamic instruction generation. OpenAI’s GPT-4 models are used to generate two types of content: (1) verbal description of how the user can achieve their task of modeling a certain target; (2) Rhino Python code that, progressively, directly models the desired target so that the user can compare outputs. This process leverages GPT-4’s visual reasoning capabilities, its programming capabilities, Rhino’s geometry representation, a custom memory-keeping workflow, and a custom iterative debugging setup.
        </p>

        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_6.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        Our methodology emphasizes the limitations of communication between LLM and 3D modeling software by developing a domain-specific spatial tracking and object detection method uniquely dedicated to Rhinoceros. This framework enables precise object localization and type detection within the Rhino environment, allowing the LLM to maintain a clear and continuous understanding of each object’s spatial geometric characteristics and generation sequence, and to generate accurate and contextually aware Rhino Python scripts. This method not only improves the model’s compatibility with reproducing complex 3D modeling workflows but also provides a concise tracking system that can reconstruct the complete modeling process in steps.

        </p>

        <img src="/Assets/ProjectPages/RhinoAI/RhinoAI_Page_7.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

      </Col>
      </Row>
      
      
      </Container>
    </div>
  );
}

export default RhinoAI;
