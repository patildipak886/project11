import React from "react";
import { Card } from "react-bootstrap";

import img2 from "./images/phonecall.jpg";
import img3 from "./images/Location.jpg";
import img4 from "./images/email.jpg";
import background from "./images/img.jpg";
import img_50 from "./images/img_50.jpg";

function Contact() {
  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${img_50})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      
      >
        <div className="  text-center p-5 ">
          <h2 className="text-black font-weight-bold">Contact Us</h2>
          <p className="font-weight-bolder form-control-lg text-info">
            Customer complaints help businesses to improve and develop. They
            serve as an important source of information about the weak points of
            your company. Bitrix24 will help you manage complaints and turn them
            into leads.
          </p>
        </div>
        <div className="row">
          <div className="col-2 "></div>
          <div className="col-2 mt-2">
            <Card>
              <Card.Img
                className="mb-1"
                style={{ height: "200px" }}
                variant="top"
                src={img2}
              />
              <Card.Body>
                <Card.Title className="text-center font-weight-bold">
                  Call Us
                </Card.Title>
                <Card.Text className="text-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91-7350788312
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91-7038601011
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-2 mt-4">
            <Card>
              <Card.Img
                className="mb-1"
                style={{ height: "200px" }}
                variant="top"
                src={img3}
              />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Office Location
                </Card.Title>
                <Card.Text>
                  h
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-2 mt-4 mb-4">
            <Card>
              <Card.Img
                className="mb-1"
                style={{ height: "200px" }}
                variant="top"
                src={img3}
              />
              <Card.Body className=" justify-content-center">
                <Card.Title className="font-weight-bold">
                  Office Location
                </Card.Title>
                <Card.Text>
                 g
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-2 mt-2">
            <Card>
              <Card.Img
                className="mb-1"
                style={{ height: "200px" }}
                variant="top"
                src={img4}
              />
              <Card.Body>
                <Card.Title className="text-center font-weight-bold">
                  Email
                </Card.Title>
                <Card.Text>projectteam24@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
