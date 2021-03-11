import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  return (
    <Card style={{ width: "18rem", height: "20rem" }}>
      <Card.Img
        variant="top"
        src={props.photo}
        style={{ width: "18rem", height: "10rem" }}
      />
      <Card.Body>
        <Link to={`contact/${props.id}`}>
          <Card.Title>
            {props.firstName} {props.lastName}
          </Card.Title>
          <Card.Text>{props.age} years old</Card.Text>
        </Link>
          <Button
            variant="danger"
            onClick={() => props.onClick()}
            style={{ marginTop: "0.5cm", marginLeft: "0.25cm"}}
          >
            Delete
          </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
