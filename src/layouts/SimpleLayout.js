import React from "react";
import Navigation from "../pages/Navigation/Navigation";
import Footer from "../pages/Footer/Footer";

const SimpleLayout = ({ children, size, setShow }) => {
  return (
    <>
      <div className="simple">
        <Navigation size={size} setShow={setShow} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SimpleLayout;
