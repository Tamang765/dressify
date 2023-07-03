import React, { useState } from 'react'
import "./NavigateDate.scss"
import Today from '../Dashboard/Today/Today';
import Weekly from '../Dashboard/Week/Weekly';
const NavigateDate = () => {
    const [toggleTab, settoggleTab] = useState(1);
    const Toggler = (id) => { 
        settoggleTab(id)
    }
    return (
      <div className='navigatedate mt-4'>
          <div className="tabs d-flex gap-2 mb-4">
                <div className={ toggleTab ===1 ?"btn active-tab":"btn tab"} onClick={()=>Toggler(1)}>Today</div>
                <div className={ toggleTab ===2 ?"btn active-tab":"btn tab"} onClick={()=>Toggler(2)}>Week</div>
                <div className={ toggleTab ===3 ?"btn active-tab":"btn tab"} onClick={()=>Toggler(3)}>Month</div>
                <div className={ toggleTab ===4 ?"btn active-tab":"btn tab"} onClick={()=>Toggler(4)}>Year</div>
            </div>
            <div className="content">
                <div className={ toggleTab ===1 ?"content-area active-area":"content-area" }><Today/></div>
                <div className={ toggleTab ===2 ?"content-area active-area":"content-area" }><Weekly/></div>
                <div className={ toggleTab ===3 ?"content-area active-area":"content-area" }></div>
                <div className={ toggleTab ===4 ?"content-area active-area":"content-area" }></div>
        </div>
    </div>
  )
}

export default NavigateDate