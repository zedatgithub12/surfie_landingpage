import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

import { GiBinoculars } from "react-icons/gi";
import { RiParentLine } from "react-icons/ri";
import { FcMindMap } from "react-icons/fc";
import {  Row } from "react-bootstrap";

function Teamcarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Row>

      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item >


          <Card className=" text-white text-center border-0  shadow-sm m-2 mb-4 p-3 ">
            <Card.Body className="primary-fill">
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border bg-primary m-auto ">
                <GiBinoculars size={40} color="#10a698" className="m-auto" />
              </div>
              <Card.Title>Total Overlook</Card.Title>
              <Card.Text>
                Easy understanding of your child’s digital lifestyle,
                making it easier to start an open conversation about online behaviors.
              </Card.Text>
            </Card.Body>
          </Card>


        </Carousel.Item>

        <Carousel.Item>


          <Card className=" text-white text-center border-0  shadow-sm m-2 mb-4 p-3">
            <Card.Body className="primary-fill">
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border bg-primary m-auto ">
                <RiParentLine size={40} color="#10a698" className="m-auto" />
              </div>
              <Card.Title>Parenting Style</Card.Title>
              <Card.Text>
                Define age-appropriate boundaries,
                monitor digital use, or just simply get alerts.
              </Card.Text>
            </Card.Body>
          </Card>


        </Carousel.Item>
        <Carousel.Item >


          <Card className="text-white text-center border-0  shadow-sm m-2 mb-4 p-3">
            <Card.Body className="primary-fill">
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border bg-primary m-auto ">
                <FcMindMap size={40} color="#10a698" className="m-auto" />
              </div>
              <Card.Title>Peace of Mind</Card.Title>
              <Card.Text>
                Know you child’s current activity at a glance,
                get immediate alerts and prevent screen addiction.
              </Card.Text>
            </Card.Body>
          </Card>


        </Carousel.Item>
      </Carousel>
    </Row>
  );
}
export default Teamcarousel;