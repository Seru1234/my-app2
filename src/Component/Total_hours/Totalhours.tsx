import React from 'react'
import './totalhours.css'

const Totalhours = (props:any) => {
  return (
    <div className='total-hours'>
     <p> {props.p}<br/><span>{props.span}</span></p>
     <div>
      <img width="35px" style={{marginLeft: "30px",marginTop:"10px"}} src={props.src} />
     </div>
    </div>
  )
}

export default Totalhours;
