import React from 'react'
import { Card } from 'react-bootstrap'
import ServicesData from '../../Data/ServicesData'
import "./Services.scss"
const Services = () => {
  return (
      <><div className='container services row  w-100 d-flex  gap-4 justify-content-center'>
          {ServicesData.map((item, index) => (
              <div className='servicesDesc row'>
                  <div>
                      <img src={item.component} alt="" />
                  </div>
                  <strong>{item.service}</strong>
                  <br />
                  <span>{item.serviceInfo}</span>
              </div>
          ))}

      </div>

      </>
  )
}

export default Services