import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailContact, updateContact } from "../store/action";
import { useHistory, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ContactDetail = () => {
  let isShowTextField = false;
  const [firstName, setFirstName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const contact = useSelector((state) => state.contact);


  const renewContact = (event) => {
    console.log("update contact");
    event.preventDefault()
    dispatch(updateContact(id, firstName))
    history.push("/");
  }


  const handleTextField = () => {
    isShowTextField = true;
  };

  const showEditableTitle = () => {
        if (isShowTextField) {
          return (
            <Card.Title>
              <input type="text" defaultValue={contact.firstName}  onChange={(e) => setFirstName(e.target.value)} />
            </Card.Title>
          );
        }
  };

  const showCardTitle = () => {
      if(!isShowTextField) {
        return (
          <Card.Title onClick={handleTextField()}>
            {contact.firstName} {contact.lastName}{" "}
          </Card.Title>
        );
      }
  }

  useEffect(() => {
    dispatch(detailContact(id));
  }, [id, dispatch]);

  console.log(contact);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <Card style={{ width: "18rem", height: "20rem" }}>
          <Card.Img
            variant="top"
            src={contact.photo}
            style={{ width: "18rem", height: "10rem" }}
          />
          <Card.Body>
            {
              showCardTitle(),
              showEditableTitle()
            }
            <Card.Text>{contact.age} years old</Card.Text>
          </Card.Body>
          <Button
            variant="success"
            style={{ marginTop: "0.5cm", marginLeft: "0.25cm",}}
            onClick={(e) => renewContact(e)}
          >
            Update
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ContactDetail;
