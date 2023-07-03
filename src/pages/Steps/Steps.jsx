import React from "react";
import { Card } from "react-bootstrap";
import Stepdata from "../../Data/Stepdata";
import step1 from "../../media/steps/step1.jpg";
import "./Steps.scss";
const Steps = () => {
  return (
    <div className=" steps d-flex container-fluid py-4">
      <hr />
      <div className="container d-flex justify-content-center flex-wrap">
        {Stepdata.map((item, index) => {
          return (
            <div>
              <Card style={{ width: "13rem" }}>
                <Card.Body>
                  <div>
                  <img src={item.step} alt="" />
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
           <small>{item.button} </small>
                  </div>
                  <br />
                  <strong>{item.step_heading}</strong>
                  <small className="text-muted">{item.steps_details}</small>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Steps;
