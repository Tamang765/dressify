import React from "react";
import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Slider from "react-slick";
import left from "../../../media/lefty.svg";
import right from "../../../media/next.svg";
import "./CustomModel.scss";
import ProductDetail from "./ProductDetail";
import { MdZoomOutMap } from "react-icons/md";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="next-button p-0"
      onClick={onClick}
      style={{ display: "flex", transform: "translate(20.8rem,-21.8vh)" }}
    >
      <span>
        <img src={right} alt="" srcset="" />
      </span>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className="prev-button p-0" onClick={onClick}>
      <span>
        <img src={left} alt="" />
      </span>
    </button>
  );
}

const CustomModel = ({ item }) => {
  const [showModal, setShowModal] = useState(false)
  const [modaldata, setModalData] = useState({})
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const openFunc = (item) => {
    setShowModal(true)
    setModalData(item)
  }

 
  return (
    <>
  
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          {" "}
          <strong className="fs-3 ">{modaldata.product_head}</strong>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8} lg={6}>
                <Slider {...settings}>
                  {modaldata.variation?.map((img) => (
                    <div className="slider-image-container" key={img.id}>
                      <img src={img.img} alt="" className="slider-image" />
                    </div>
                  ))}
                </Slider>
              </Col>
              <Col xs={6} md={4} lg={6}>
                <ProductDetail modalProduct={modaldata} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default CustomModel;