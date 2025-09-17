import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function SUITS() {
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
          <strong>NASA Spacesuit Interface</strong>
        </h1>
        
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            21 Winter - 22 Summer, Brown + RISD Team in NASA SUITS Challenge
        </p>

        <p style={{ paddingBottom: 15 }} className="project-description">
        We developed an AR spacesuit user interface for the NASA SUITS Challenge, assisting astronauts to access critical information during extravehicular activities and minimizing their cognitive load. I was a UX designer and researcher on the team, and was part of the core leadership team as the lead developer.
        </p>

        <div className="text-center" style={{ paddingBottom: 30 }}>
          <a
            href="https://www.figma.com/proto/xv0UT813yhMMyYM1Fe7MI6/SUITS-FIGMA?node-id=12935-44008&node-type=frame&t=zDjuFCch9pVb42gL-0&scaling=min-zoom&content-scaling=fixed&page-id=12935%3A43751&starting-point-node-id=12935%3A44008&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundImage: `url(/Assets/ProjectPages/SUITS/suits.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "80px 120px",
              fontSize: "22px",
              fontWeight: "700",
              color: "white",
              textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
              borderRadius: "15px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              minWidth: "300px",
              minHeight: "120px",
              textDecoration: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
            }}
          >
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "white"
            }}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="white"
                style={{ marginRight: "12px" }}
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              View Live Demo
            </div>
          </a>
        </div>

        <div className="suits-objectives">
          <h3 className="suits-title" style={{ marginBottom: 40 }}>Lunar Mission Objectives</h3>

          <Row>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Navigation</h3>
              <ul className="suits-list">
                <li>Long-range: point A to point B</li>
                <li>Short-range: obstacle avoidance</li>
              </ul>
            </Col>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Geological Sampling</h3>
              <ul className="suits-list">
                <li>Taking samples</li>
                <li>Documentations</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Staying Alive: Vitals</h3>
              <ul className="suits-list">
                <li>Vitals and suit status</li>
              </ul>
            </Col>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Staying Alive: Rescue</h3>
              <ul className="suits-list">
                <li>Emergency navigation and communication</li>
              </ul>
            </Col>
          </Row>
        </div>

        <h3 className="suits-title" style={{ marginBottom: 10 }}>User Research & Interviews</h3>
        <p style={{ color: "#666", textAlign: "left", marginBottom: 0 }}>We started our research by reading the Apollo Mission Reports and getting hold of what happens during a lunar surface extravehicular activity. Then, we interviewed real astronauts to learn about their pain points.</p>
        <img src="/Assets/ProjectPages/SUITS/research.svg" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <div className="suits-objectives">
          <h3 className="suits-title" style={{ marginBottom: 40 }}>Pain Points & Journey Maps</h3>

          <Row>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Physical Challenges</h3>
              <p className="suits-text">Perform demanding tasks while clothed in exhaustingly heavy space suits</p>
            </Col>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Cognitive Challenges</h3>
              <p className="suits-text">Perform complicated tasks quickly and without error while exploring unfamiliar and uncharted locations</p>
            </Col>
          </Row>
        </div>

        {/* <h3 className="suits-title">User Journey Maps</h3> */}
        <img src="/Assets/ProjectPages/SUITS/storyboard.png" className="img-fluid" style={{maxWidth: "900px", paddingBottom: 15}}/>

        <h3 className="suits-title" style={{ marginTop: 40, marginBottom: 10 }}>Translating Objectives + Pain Points into Features</h3>
        <p style={{ color: "#666", textAlign: "left", marginBottom: 24 }}>Based on requirements and user insights, we brainstormed features such as creating visual guides away from obstacles.</p>
        <img src="/Assets/ProjectPages/SUITS/features.svg" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <h3 className="suits-title" style={{ marginTop: 40, marginBottom: 24 }}>Sketching the Interface</h3>
        <img src="/Assets/ProjectPages/SUITS/sketch2.png" className="img-fluid" style={{maxWidth: "900px", paddingBottom: 15}}/>

        <h3 className="suits-title" style={{ marginTop: 40, marginBottom: 10 }}>User Flow Diagrams</h3>
        <p style={{ color: "#666", textAlign: "left", marginBottom: 40 }}>Below is the user flow diagram for Lunar Navigation, one of the UI's 4 core functions.</p>
        <img src="/Assets/ProjectPages/SUITS/userflow.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <h3 className="suits-title" style={{ marginTop: 40, marginBottom: 10 }}>User Testing</h3>
        <p style={{ color: "#666", textAlign: "left", marginBottom: 0 }}>We conducted 5-6 rounds of user testing at different stages, using metrics like user response time, movement tracking, and qualitative feedback. We learned to implement early on so that we could test AR-specific metrics such as reachability of UI in space.</p>
        <img src="/Assets/ProjectPages/SUITS/testing.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 0}}/>

        <h3 className="suits-title" style={{ marginTop: 0, marginBottom: 24 }}>From Testing Insights to Final Design</h3>
        <img src="/Assets/ProjectPages/SUITS/results.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <h3 className="suits-title" style={{ marginTop: 40, marginBottom: 40 }}>Validation from NASA</h3>
        <Row className="d-flex justify-content-center">
            <Col md={5}>
            <img src="/Assets/ProjectPages/SUITS/nasa.png" className="img-fluid" style={{maxWidth: "500px", paddingBottom: 15}}/>
            </Col>
            <Col md={6} style={{textAlign: "left", paddingLeft: 100, paddingTop: 30}}>
              <h3 className="suits-section-title">Intuitive, fast learning curve</h3>
              <ul className="suits-list" style={{marginBottom: 40, marginTop: 24}}>
                <li>Liked the collapsible layout</li>
                <li>Vitals screen looks clear</li>
              </ul>
              <h3 className="suits-section-title">Had just the right tools needed</h3>
              <ul className="suits-list">
                <li>Three-dimensional navigation guide is very helpful</li>
              </ul>
              </Col>
          </Row>
        

      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default SUITS;
