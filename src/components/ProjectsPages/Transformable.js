import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import page1 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_01.png"
import page2 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_02.png"
import page3 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_03.png"
import page4 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_04.png"
import page5 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_05.png"
import page6 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_06.png"
import page7 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_07.png"
import page8 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_08.png"
import page9 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_09.png"
import page10 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_10.png"
import page11 from "../../Assets/../Assets/ProjectPages/Transformable/Transformable_Page_11.png"
import video from "../../Assets/../Assets/ProjectPages/Transformable/Transform.mp4"
import gif from "../../Assets/../Assets/ProjectPages/Transformable/2find1.gif"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Transformable() {
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
          <strong>Transformable Seifert Surfaces</strong>
        </h1>
        <h2 style={{ paddingBottom: 15 }} className="subheading">
          Turning High-Dimensional Surfaces to Transformable Scissor Structures
        </h2>
        <p className="subsubheading" style={{ paddingBottom: 15 }}>
            24 Fall, Harvard University. With Zheng Fang.
        </p>

        <img src={gif} className="img-fluid" style={{width:"80%", maxWidth: "1100px", paddingBottom: 30}}/>
     
      <p className="project-description" style={{ textAlign: "center" }}>
          This Grasshopper algorithm turns any given eligible surface into a transformable scissor structure. Specifically, we demonstrate its ability through transforming a Hopf Link, a kind of Seifert Surface, into a scissor structure.
        </p>
      
        <img src={page1} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        The project is motivated by the idea of transforming high-dimensional surfaces into transformable scissor structures, since current studies on scissor structures are mainly focused on translational surfaces.
        </p>

        <img src={page2} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        A Seifert Surface is an orientable surface whose boundary is defined by a knot or a link.
        </p>

        <img src={page3} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        For example, a Hopf Link is a surface defined by two rings. A Hopf Link is visually very similar to a mobius strip, but the mobius strip is nonorientable, meaning there is only one side of its surface, which disqualifies it for being transformable.
        </p>

        <img src={page4} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        First, we generate the Hopf Link by defining the two rings and lofting it. In Grasshopper, we are able to access the surface normal vector at any given point on this surface.
        </p>

        <img src={page5} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        Our goal is to find points on the surface that have pair-wise intersecting surface normals, which are the foundations for scissor structures.
        </p>

        <img src={page6} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        Because the Hopf Link is symmetrical along two axes, we mainly only need to work with one fourth of the surface. We start from one of the vertices to demonstrate how to find points on the surface that have intersecting surface normals with this point.
        </p>

        <img src={gif} className="img-fluid" style={{width:"80%", maxWidth: "1100px", paddingTop: 30,paddingBottom: 30}}/>
        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        Then, we anchor the algorithm at another starting point to find all points on the surface that have intersecting surface normals with this point. Through a Bisection Search algorithm, we are able to arrive at a common solution, a point on the surface that has intersecting surface normals with both starting points.
        </p>

        <img src={page7} className="img-fluid" style={{width:"80%", maxWidth: "1100px", paddingTop: 15, paddingBottom:30}}/>
        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        We repeat this process until the entire surface has been searched, arriving at a grid system. The grid system is then used to generate the scissor structures.
        </p>

        <img src={page8} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <p className="project-description" style={{ paddingBottom: 15,textAlign: "center" }}>
        At the lower part of this quarter, the surface becomes flat and difficult for our original grid-finding algorithm. However, there is an array of points that have almost parallel surface normals. We use this property to derive points along the lower edge of the surface that have intersecting surface normals with this array of points.
        </p>
        <img src={page9} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <img src={page10} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <img src={page11} className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

      </Col>
      </Row>

      </Container>
    </div>
  );
}

export default Transformable;
