import React, { useState } from 'react'
import "./Custom.scss"
const Custom = () => {
    const [show, setShow] = useState(false);
    const shower = (i) => { 
        setShow(i)
    }
    return (
      <>
          <button onClick={()=>shower(true)} className={ `${show?"no":""}`}>Add</button>
      <div className="model">
          <div className={ `${show?"show":"no"}`} onClick={()=>shower(false)} >
              Lorem ipsum dolor sit amet.0
          </div>
    </div>
      </>
  )
}

export default Custom