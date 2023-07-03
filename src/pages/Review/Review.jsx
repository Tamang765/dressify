import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Reviews from '../../Data/Reviews'
import Allreviews from '../Product-details/Modal/Allreviews';
import Newarrivals from '../NewArrivals/Newarrivals';
import Kidsproduct from "../KidsProduct/Kidsproduct"
import "./Review.scss"
const Review = () => {
  return (
      <div className='container-fluid review py-4'>
          <div className="container">
           <strong className='fs-4 d-flex align-items-center gap-2 py-3' ><AiFillStar className='fs-1'  />123 . Reviews</strong>   
              <div className='reviews d-flex flex-wrap justify-content-between'>
                  {Reviews.slice(0,4).map((item, index) => (
                            <div className=' reviews-by  d-flex flex-column gap-4 '>
                               <div className="reviewer-details d-flex justify-content-between">
                               <div className="updates-by d-flex gap-2">
                                <img src={ item.img} alt="" />
                                 <div className="reviewer d-flex flex-column">
                                   <strong className="name">{item.replier}</strong>
                                   <small className="date">
                                     {item.date} <span />
                                     <span>6 min read</span>
                                   </small>
                                 </div>
                               </div>
                               <div className="rating d-flex fs-4">
                                    <AiFillStar color='orange'/>
                                    <AiFillStar color='orange'/>
                                    <AiFillStar color='orange'/>
                                    <AiFillStar color='orange'/>
                                    <AiFillStar color='orange'/>
                               </div>
                      </div>
                      <p>{ item.review}</p>
                          </div>
              ))
}
      <Allreviews/>
        </div>
        <hr />
        <Newarrivals title="Customers also purchased" />
        <Kidsproduct />
      </div>
        <br />
        <br />
        <br />
        <hr />
      
    </div>
  )
}

export default Review