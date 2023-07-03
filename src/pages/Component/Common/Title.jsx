import React from 'react'

const Title = ({firstword, lastword}) => {
  return (
      <>
          <div className="d-flex py-lg-4">
              <h2 className='fw-4' style={{paddingBottom:"2rem"}}>{firstword}   <small style={{opacity:"0.7", color:"grey"}}>{lastword}</small></h2>
          </div>
    </>
  )
}

export default Title