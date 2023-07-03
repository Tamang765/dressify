import React from "react";
import logo from "../../media/logo.jpg";
import facebook from "../../media/icons/facebook.svg";
import youtube from "../../media/icons/youtube.svg";
import telegram from "../../media/icons/tele.svg";
import twitter from "../../media/icons/twitter.svg";
import {CiLocationOn } from "react-icons/ci"
import {HiOutlineMail } from "react-icons/hi"
import {AiOutlinePhone } from "react-icons/ai"
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row m-auto gap-6">
          <div className="social-icons col-lg-3 col-md-4 col-sm-6">
            <img src={logo} alt="" width={200} />
            
                      <div className="d-flex flex-column pt-4 gap-3">
                          <small className="d-flex align-items-center gap-2"><CiLocationOn  size={20}/>Lalitpur, Nepal  </small>
                          <small className="d-flex align-items-center gap-2"><HiOutlineMail size={20}/>info@gmail.com </small>
                          <small className="d-flex align-items-center gap-2"><AiOutlinePhone size={20}/>+9876541245 </small>
                      </div>


            </div>
 
          {/* <div className="col-lg-3 col-md-3 col-sm-6">
            <h4 className="fs-6">Getting Started</h4>
            <ul className="guides d-flex flex-column pt-4 gap-3 list-unstyled">
              <span className="text-muted">Release Notes</span>
              <li className="text-muted">Upgrade Guide</li>
              <li className="text-muted">Browser SUpport</li>
              <li className="text-muted">Dark Mode</li>
            </ul>
          </div> */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h4 className="fs-6">Category</h4>
            <ul className="Explore-footer d-flex flex-column pt-4 gap-3 list-unstyled">
              <li className="text-muted">Men</li>
              <li className="text-muted">Women </li>
              <li className="text-muted">Sports</li>
              <li className="text-muted">Accessories</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h4 className="fs-6">Resource</h4>
            <ul className="Explore-footer d-flex flex-column pt-4 gap-3 list-unstyled">
              <li className="text-muted">Best Preactices</li>
              <li className="text-muted">Support</li>
              <li className="text-muted">Developers</li>
              <li className="text-muted">Learn Design</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
          <h4 className="fs-6">Follow Us</h4>
          <div className="icons d-flex flex-column gap-3 pt-4">
              <div className="facebook icon d-flex align-items-center  gap-2">
            <img src={facebook} alt="" width={20} /> <span className="text-muted">Facebook</span>    
              </div>
              <div className="youtube icon d-flex  align-items-center gap-2">
                <img src={youtube} alt="" width={20} /> <span className="text-muted">Youtube</span>
              </div>
              <div className="telegram icon d-flex  align-items-center gap-2">
                <img src={telegram} alt="" width={20} /> <span className="text-muted">Telegram</span>
              </div>
              <div className="twitter icon d-flex align-items-center  gap-2">
                <img src={twitter} alt="" width={20} /> <span className="text-muted">Twitter</span>
              </div>
          </div>
                  </div>
                  </div>
              <div className="m-auto py-5 d-flex justify-content-center">All right reserved to <Link href="https://apptechnologies.com">@app technologies</Link></div>
      </div>
    </div>
  );
};

export default Footer;
