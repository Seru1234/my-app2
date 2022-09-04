import React from 'react'
import './progress.css';
const Progress = () => {


  // const numb:any = document.querySelector(".numb");
  //           let counter = 0;
  //           setInterval(()=>{
  //             if(counter === 100){
  //               clearInterval();
  //             }else{
  //               counter+=1;
  //               numb.textContent = counter + "%";
  //             }
  //           }, 80);
  return (
    <div className="circular">
            <div className="inner"></div>
            <div className="outer"></div>
            <div className="numb">
               0%
            </div>
            <div className="circle">
               <div className="dot">
                  <span></span>
               </div>
               <div className="bar left">
                  <div className="progress"></div>
               </div>
               <div className="bar right">
                  <div className="progress"></div>
               </div>
            </div>
         </div>
  )
}

export default Progress;
