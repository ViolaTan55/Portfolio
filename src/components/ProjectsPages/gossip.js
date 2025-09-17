import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";



function Gossip() {
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
          <strong>Gossip App</strong>
        </h1>
        
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            25 Spring, MIT
        </p>

        <p style={{ paddingBottom: 15 }} className="project-description">
        I created a gossip app to facilitate healthy gossiping. During user research, I found out some pain points during gossiping. For example, once a rumor is spread, the subject of the rumor finds it very hard to defend themselves to everyone who has heard the rumor. Also people are not sure what content to gossip about because they are unsure of other people's boundaries and don't want to violate them. Therefore, I designed a gossip app that allows users to easily claim rumors in groups which will mark a message as rumor for everyone to see. The app also allows users to set up personal boundaries and group boundaries, which are used to inform chats in specific groups that users set up.
        </p>

        <div className="text-center" style={{ 
          paddingBottom: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px"
        }}>
          <a
            href="https://violatan55.github.io/chatapp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundImage: `url(/Assets/ProjectPages/gossip/demo.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "80px 120px",
              fontSize: "22px",
              fontWeight: "700",
              
              textShadow: "2px 2px 3px rgba(83, 83, 83, 0.2)",
              borderRadius: "15px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              minWidth: "300px",
              minHeight: "220px",
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
              color: "#111827",
              opacity: 0.9
            }}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="#111827"
                style={{ 
                  marginRight: "12px",
                  backgroundColor: "transparent",
                  borderRadius: "0"
                }}
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              View Live App
            </div>
          </a>
        </div>

        <div className="suits-objectives">
          <h3 className="suits-title" style={{ marginBottom: 10 }}>Interview Insights</h3>
          <p style={{ color: "#666", textAlign: "left", marginBottom: 40 }}>Interested in creating an app for healthy gossiping, I interviewed 5 people about their gossiping experiences.</p>
          <Row>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Guessing the Impact</h3>
              <p className="suits-text">Usually people assess whether it is okay to spread a gossip through guessing whether the subject would be okay with this being talked about, based on their understanding of the subject.</p>
            </Col>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Personal Boundaries</h3>
              <p className="suits-text">Some people have clear boundaries of what's okay for other people to talk about; it feels safer if everyone is open about it so people can gossip stuff without violating others' boundaries.</p>
            </Col>
          </Row>

          <Row>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Clarifying a Rumor</h3>
              <p className="suits-text">It feels upsetting and unsafe to be the subject of gossip; if a rumor is spread, it is very hard to clarify the truth to everyone and make them believe you.</p>
            </Col>
            <Col md={5} className="suits-section">
              <h3 className="suits-section-title">Anonymity</h3>
              <p className="suits-text">Removing names is a mechanism to reduce or mitigate harm.</p>
            </Col>
          </Row>
        </div>

        <div className="suits-objectives">
          <h3 className="suits-title" style={{ marginBottom: 10 }}>Features</h3>
          <p style={{ color: "#666", textAlign: "left", marginBottom: 24 }}>Inspired by interview insights.</p>
          <Row>
            <Col md={5} className="suits-section" style={{backgroundColor: "white"}}>
              <h3 className="suits-section-title">▶  Boundaries/Consent Tags</h3>
              <p className="suits-text">Before sharing gossip, if a subject is detected, the app prompts the sharer with a reminder about the subject’s consent preferences. This ensures that people respect personal limits, reducing accidental harm while still allowing gossip in a controlled way.</p>
              <img src="/Assets/ProjectPages/gossip/paper1.png" className="img-fluid" style={{maxWidth: "420px", paddingBottom: 15, paddingLeft: 15, paddingTop: 15}}/>
            </Col>
            <Col md={5} className="suits-section" style={{backgroundColor: "white"}}>
            <h3 className="suits-section-title">▶  Verify or Claim Rumors</h3>
              <p className="suits-text">If a rumor spreads about someone, they can post a response that gets automatically shown to everyone who interacted with the gossip. This gives people an easy way to correct misinformation at scale, preventing rumors from spreading uncontested.</p>
              <img src="/Assets/ProjectPages/gossip/paper2.png" className="img-fluid" style={{maxWidth: "400px", paddingBottom: 15, paddingTop: 15}}/>
            </Col>
            
          </Row>
        </div>

        <h3 className="suits-title" style={{ marginBottom: 10 }}>Paper Prototype Testing</h3>
          <p style={{ color: "#666", textAlign: "left", marginBottom: 24 }}>I tested the paper prototype with 4 users and identified hurdles in flows, lack of signifiers, and confusing wordings.</p>

        <Row style={{ marginBottom: 40 }}>
          <Col md={3}>
            <img src="/Assets/ProjectPages/gossip/testing1.png" className="img-fluid" style={{maxWidth: "100%", height: "300px", objectFit: "cover"}}/>
          </Col>
          <Col md={3}>
            <img src="/Assets/ProjectPages/gossip/testing2.png" className="img-fluid" style={{maxWidth: "100%", height: "300px", objectFit: "cover"}}/>
          </Col>
          <Col md={3}>
            <img src="/Assets/ProjectPages/gossip/testing3.png" className="img-fluid" style={{maxWidth: "100%", height: "300px", objectFit: "cover"}}/>
          </Col>
          <Col md={3}>
            <img src="/Assets/ProjectPages/gossip/testing4.png" className="img-fluid" style={{maxWidth: "100%", height: "300px", objectFit: "cover"}}/>
          </Col>
        </Row>

        <h3 className="suits-title" style={{ marginBottom: 10 }}>Figma Prototype Testing</h3>
        <p style={{ color: "#666", textAlign: "left", marginBottom: 40 }}>Addressing the pain points from previous testing, I created a figma prototype and conducted another round of testing with 5 users.</p>

        <div className="text-center" style={{ 
          paddingBottom: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px"
        }}>
          <a
            href="https://www.figma.com/proto/je3hAk49qUsZcn7cBFUZIY/Gossip-App?node-id=8-461&starting-point-node-id=1%3A2&t=V686GQqz7MmeG96R-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundImage: `url(/Assets/ProjectPages/gossip/figma.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "80px 120px",
              fontSize: "22px",
              fontWeight: "700",
              
              textShadow: "2px 2px 3px rgba(83, 83, 83, 0.2)",
              borderRadius: "15px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              minWidth: "300px",
              minHeight: "220px",
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
              color: "#111827",
              opacity: 0.9
            }}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="#111827"
                style={{ 
                  marginRight: "12px",
                  backgroundColor: "transparent",
                  borderRadius: "0"
                }}
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              View Figma Prototype
            </div>
          </a>
        </div>
        
        <Row className="text-center" style={{ marginBottom: 40, marginTop:20 }}>
          <Col md={6}>
            <img src="/Assets/ProjectPages/gossip/testing5.png" className="img-fluid" style={{maxWidth: "100%", height: "300px", objectFit: "cover"}}/>
            <p style={{ color: "#666", textAlign: "center", marginTop: 15, marginBottom: 40 }}>User Testing</p>
          </Col>
          <Col md={6}>
            <img src="/Assets/ProjectPages/gossip/notes.png" className="img-fluid" style={{maxWidth: "100%", height: "300px", objectFit: "cover"}}/>
            <p style={{ color: "#666", textAlign: "center", marginTop: 15,marginBottom: 40 }}>Raw Notes</p>
          </Col>
        </Row>

        <h3 className="suits-title" style={{ marginBottom: 10 }}>Final Design</h3>
        <p style={{ color: "#666", textAlign: "left", marginBottom: 40 }}>Addressing the pain points from the figma user testing, I developed the app with JS. It's now live and can be used by graffiti users.</p>

        <div className="text-center" style={{ 
          paddingBottom: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px"
        }}>
          <a
            href="https://violatan55.github.io/chatapp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundImage: `url(/Assets/ProjectPages/gossip/demo.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "80px 120px",
              fontSize: "22px",
              fontWeight: "700",
              
              textShadow: "2px 2px 3px rgba(83, 83, 83, 0.2)",
              borderRadius: "15px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              minWidth: "300px",
              minHeight: "220px",
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
              color: "#111827",
              opacity: 0.9
            }}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="#111827"
                style={{ 
                  marginRight: "12px",
                  backgroundColor: "transparent",
                  borderRadius: "0"
                }}
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              View Live App
            </div>
          </a>
        </div>
        

      </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default Gossip;
