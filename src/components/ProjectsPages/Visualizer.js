import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";


import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Visualizer() {
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
          <strong>Formal Encodings</strong>
        </h1>
        <h2 style={{ paddingBottom: 15 }} className="subheading">
        Mapping the Encoding Process of Geometry in 3D Generative Models
        </h2>
        <p className="subsubheading"  style={{ paddingBottom: 30 }}>
            24 Fall, Harvard University. With Zheng Fang.
        </p>

        <video width="100%" height="auto" controls style={{ paddingBottom: 30 }}>
          <source src="/Assets/ProjectPages/Visualizer/visualizer_demo.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        {/* <div style={{ maxWidth: "1100px", width: "100%", paddingBottom: "15px" }}>
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
        </div> */}
     
      <p className="project-description" style={{ paddingBottom: 15 }}>
      Richard Sennett’s concept of "artificial resistance" reminds us that by relegating machines to specialists, we sacrifice a form of craftsmanship once embedded in design. The execution of design no longer requires manual work.  Instead of using these tools without engaging intellectually, we want to recenter the human attention towards the hidden computational procedures and how, in understanding the algorithms, we can begin to fine-tune and steer designs in intended directions.
        </p>
      
        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_01.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        We present a visualization framework aimed at interpreting the encoding process of geometry in 3D generative models.  Due to the ML technique’s black box nature, designers are limited to engaging with the systems solely through their input and output. This limits designers capacity to meaningfully engage with the process. This project addresses this gap by visualizing the encoding process to help designers iterate with purpose and explore semantic relationships between different 3D geometries. 
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_02.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        Specifically, we want to visualize the Shap-E model, a state-of-the-art 3D generation model by OpenAI. The model contains two parts: a 3D encoder and a diffusion model. We visualize the 3D encoder, which encodes 3d models to a high-dimensional latent vector used to train a multi-layer perceptron.
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_03.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <p className="project-description" style={{ paddingBottom: 15 }}>
        The encoder produces latent embeddings that are used to train an implicit multi-layer perceptron that maps x,y,z coordinates to RGB values and so on. We aim to visualize this process step-by-step. First, the input data is taken through downsampling and convolution; then, they conduct cross-attention and self-attention, which produces the latent embeddings.
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_04.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        The 3D encoder takes two input: during data preprocessing, a 3d model is converted into both a point cloud model, which contains information about the geometry, and 20 random views, which contains the texture.
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_05.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        First, the model computes a convolution, which downsamples the 16k points in the point cloud to 1k points, encoding more information into each point. For example, the information about its neighbors. This feature intensity map shows how much information each point captured. Points on the edge of the pot, for example, captured more information because the surface is rapidly changing there.
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_06.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        After downsampling and convolution, the model conducts cross-attention and self-attention -- each point in the 3d model pays attention to the 20 views, and also to other points in the model to determine which ones are relevant.
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_07.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        For example, a point on the bottom of the pot maybe pays more attention to views that features the bottom of the pot.
        </p>
        
        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_08.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

        <p className="project-description" style={{ paddingBottom: 15 }}>
        We also visualized the latent embedding space, allowing users to tap into the latent space and explore the semantic relationships between different 3D geometries through interpolation.
        </p>

        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_09.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>
        <img src="/Assets/ProjectPages/Visualizer/Visualizer_Page_10.png" className="img-fluid" style={{maxWidth: "1100px", paddingBottom: 15}}/>

      </Col>
      </Row>
      
      
      </Container>
    </div>
  );
}

export default Visualizer;
