import React, { useState } from "react";
import {Form, Button,} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addContact } from "../store/action";

const AddPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = () => {
    console.log(firstName, lastName, age, photo, "<><><><><><>");
    const payload = {
      firstName,
      lastName,
      age,
      photo,
    };
    dispatch(addContact(payload));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row justify-content center">
        <div className="mt-5" style={{ width: "300px" }}>
          <div>
            <h3>Add New Contact</h3>
          </div>
          <Form>
            <Form.Group>
              <Form.Label> First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Photo Profile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setPhoto(e.target.value)}
                value={photo}
              />
            </Form.Group>
            <Button
              style={{ width: "100%" }}
              variant="primary"
              onClick={() => onSubmit()}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
