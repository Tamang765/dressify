import React from 'react'
import kid from "../../media/New folder/boy.jpg";
import logo from "../../media/logo-removebg.jpg"
import "./kidsproduct.scss"
const Kidsproduct = () => {
  return (
    <div className='container-fluid kidsproduct d-flex justify-content-center mt-5'>
        <div className="row kids container d-flex">
            <div className="container d-flex gap-4  justify-content-center">
        <div className="kidsimg w-50">
            <img className='d-flex mt-9' src={kid} alt="" />
        </div>
        <div className="kidsproduct_details w-50 d-flex flex-column justify-content-center gap-3 items-center">
                <img src={logo} alt="" width={150}/>
            <span className="fw-semibold fs-1">Special Offer in Kids products</span>
            <p>Fashion is afrom od seld-expression and autonomy at a particular period and place</p>
            <button className='w-50 '>Discover More</button>
        </div>
        </div>
        </div>  
    </div>
  )
}

export default Kidsproduct