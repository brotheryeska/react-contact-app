import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand onClick={() => history.push("/")}>Contact App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
        <Nav.Link onClick={() => history.push("/addContact")}>
          Add Contact
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Navigation;
