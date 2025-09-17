import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';

function ProjectCards(props) {
  return (
    <Link to={props.link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="project-card-view" style={{ position: 'relative', minHeight: '400px' }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body style={{ paddingBottom: props.keywords ? '50px' : '20px' }}>
          <Card.Title>{props.title}</Card.Title>
          
          <Card.Text style={{ textAlign: "center", marginBottom:"28px" }}>
            {props.description}
          </Card.Text>

          {props.keywords && (
            <div style={{ 
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              right: '15px',
              textAlign: "center", 
              fontSize: "0.85rem",
              color: "#6c757d",
              fontWeight: "300",
              backgroundColor: 'white',
              padding: '8px 12px',
              borderRadius: '20px',
              border: '1px solid #e9ecef',
            }}>
              {props.keywords}
            </div>
          )}

          {/* <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button> */}
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {/* {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button> 
          )}*/}
        </Card.Body>
      </Card>
    </Link>
  );
}
export default ProjectCards;
