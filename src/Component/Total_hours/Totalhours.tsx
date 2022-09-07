import React from 'react'
import './totalhours.css'

const Totalhours = (props:any) => {
  return (
    <div className='total-hours'>
      <div>
     <p> {props.p}<br/><span>{props.span}</span></p>
     </div>
     <div>
      <img width="35px" style={{marginLeft: "30px",marginTop:"10px"}} src={props.src} />
     </div>

     <div className='per'>
     <p >{props.per}</p><br/><span>{props.name}</span>
     </div>
     </div>
    
  )
}

export default Totalhours;
