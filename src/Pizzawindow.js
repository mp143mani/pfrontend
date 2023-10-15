import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import env from './enviroinment'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CSS/Pizzawindow.css';
import tomatopizza from './assets/wp6905765-dominos-pizza-wallpapers.jpg';
import onionpizza from './assets/wp6905795-dominos-pizza-wallpapers.jpg';
import paneerpizza from './assets/wp6905748-dominos-pizza-wallpapers.jpg';
import cheesepizza from './assets/wp6905725-dominos-pizza-wallpapers.jpg';
import Button from "react-bootstrap/Button";


export default function Pizzawindow() {
  const navigate = useNavigate();

  let Move = async (totalPrice) => {
    navigate("/payment");
  };
  const totalPrice = 5;
  const Array =[
                 {img:onionpizza,
                    title:"Onion pizaa",
                    cost: "$5"},
                 {img:cheesepizza,
                    title:"Cheese pizaa",
                    cost: "$5"},
                 {img:tomatopizza,
                    title:"Tomato pizaa",
                    cost: "$5"},
                 {img:paneerpizza,
                    title:"Paneer pizaa",
                     cost: "$5"}
                    ]
  return (
    < >
    <div >
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className=""> 
            <Navbar.Brand href="#" ><span id="color">Pizza Mania</span></Navbar.Brand>
        </Navbar>
      ))}
 </div>
     <div className="set " >
     <div className="set1 " >
      <Row xs={1} md={2} className="g-4 " >
      {Array.map((element) => (
        <Col >
          <Card >
            <Card.Img variant="top" style={{ height:"30rem"}} src={element.img} />
            <Card.Body>
              <section>{element.title}</section>
              <Card.Text>
                {element.cost}
              </Card.Text>
              <Button onClick={()=>Move(totalPrice)}>Buy</Button>
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
