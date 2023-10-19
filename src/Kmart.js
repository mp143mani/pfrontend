import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
// import env from "./Backendurl";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CSS/veg.css";
import thakkali from "../src/assets/veg/thakkali.jfif";
import kathari from "../src/assets/veg/kathari.jpg";
import beens from "../src/assets/veg/beens.jpg";
import caret from "../src/assets/veg/images1.jfif";
import Button from "react-bootstrap/Button";

export default function Kmart() {
  const navigate = useNavigate();

  let Move = async (totalPrice) => {
    navigate("/payment");
  };
  const totalPrice = 5;
  const Array = [
    { img: thakkali, title: "Tomato", cost: "RS:15" },
    { img: caret, title: " Carrot", cost: "RS:8" },
    { img: beens, title: "Beans", cost: "RS:13" },
    { img: kathari, title: "Eggplant", cost: "RS:40" },
  ];
  return (
    <>
      <div>
        {["xl"].map((expand) => (
          <Navbar key={expand} bg="dark" expand={expand} className="">
            <Navbar.Brand href="#">
              <span id="color">Kmart</span>
            </Navbar.Brand>
          </Navbar>
        ))}
      </div>
      <div className="set ">
        <div className="set1 ">
          <Row xs={1} md={2} className="g-4 ">
            {Array.map((element) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    style={{ height: "30rem" }}
                    src={element.img}
                  />
                  <Card.Body>
                    <section>{element.title}</section>
                    <Card.Text>{element.cost}</Card.Text>
                    <Button onClick={() => Move(totalPrice)}>Buy</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
