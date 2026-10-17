import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <Col lg="4" md="6" style={{ fontFamily: "Inter" }}>
      <Card className="ProjectCard site-card">
        <Card.Img
          src={`${process.env.PUBLIC_URL}/imgs/${props.image}`}
          className="ProjectImg site-card-img"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <a
            href={props.link}
            target="_blank"
            className="lgbdanger text-center w-100 p-2.5 text-base hover:text-white"
          >
            {props.title}
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}
