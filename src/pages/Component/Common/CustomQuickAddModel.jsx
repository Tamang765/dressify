import { useState } from "react";
import { Carousel, Col, Container, Modal, Row } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import ProductDetail from "./ProductDetail";
import Slider from "react-slick";
import left from "../../../media/lefty.svg";
import right from "../../../media/next.svg";
import "./CustomModel.scss";
import { MdZoomInMap } from "react-icons/md";


const CustomQuickAddModel = ({ item,fabitem }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const openFunc = (item) => {
    setShowQuickAdd(true);
    setModalData(item);
  };
  const opener = (item) => {
    setShowModal(true);
    setModalData(item);
  };
  const handleClose = () => setShowQuickAdd(false);
  return (
    <>
      <button className="d-flex gap-2 py-2 px-3" onClick={() => openFunc(item|| fabitem)}>
        <BsCartCheck size={15}/> Quick Add
      </button>
      <button className="d-flex gap-2 py-2 px-3" onClick={() => opener(item || fabitem)}>
        <MdZoomInMap size={15} /> Quick View
      </button>
      <Modal size="md" show={showQuickAdd} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {" "}
          <strong className="">{modalData.product_head}</strong>
        </Modal.Header>
        <Modal.Body className="p-0 px-4">
          <ProductDetail modalProduct={modalData} />
        </Modal.Body>
      </Modal>  
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Body className="p-0">
          <Row>
            <Col xs={12} md={8} lg={6}>
              <Carousel interval={null}>
                {modalData.variation?.map((img) => (
                  <Carousel.Item>
                    <div className="slider-image-container" key={img.id} style={{height:"80vh"}}>
                      <img src={img.img} alt="" className="slider-image h-100 " style={{objectFit:"cover"}} />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col xs={6} md={4} lg={6} className="py-3">
              <Modal.Header closeButton style={{padding:"1px 24px 10px 0"}}>
                {" "}
                <div  className="fw-semibold fs-4">{modalData.product_head}</div>
              </Modal.Header>
              <ProductDetail modalProduct={modalData} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomQuickAddModel;
