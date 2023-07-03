import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import ProductDescData from "../../Data/ProductDescData";
import "./ProductDesc.scss"
const ProductDesc = () => {
  return (
    <div className="productdesc container mt-2 d-flex flex-column gap-2">
      {ProductDescData.map((item, index) => (
        <Accordion defaultActiveKey={[0]} alwaysOpen>
          <Accordion.Item eventKey={item.id}>
            <AccordionHeader>{item.heading}</AccordionHeader>
            <AccordionBody>
              {item.body ? <div className="description-body">{item.body}</div> : null}
              {item.list ? (
                <ul>
                  {item.list.map((value, i) => (
                    <>
                      <li key={i}>
                        <div>{value.a}</div>
                      </li>
                      <li>
                        <div>{value.b}</div>
                      </li>
                    </>
                  ))}
                </ul>
              ) : null}
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default ProductDesc;
