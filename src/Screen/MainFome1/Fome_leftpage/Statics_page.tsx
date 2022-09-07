import React from "react";
import Progress from "../../../Component/Progressbar/Progress";
import Totalhours from "../../../Component/Total_hours/Totalhours";
import "./Page.css";
function Staticpage() {
  return (
    <div className="staticpage">
      <div className="logo">
        <img
          width="30px" 
          src="data:image/jpeg;base64,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"
        alt=""></img>
        <p>cleaver</p>
      </div>
      
        <div className="blue-circle">
          <div className="progresses">
            <div>
            <Progress />
            </div>


            <div className="total_hour">
              <div className="total_hour1"><Totalhours

              p="Total House"
              span="1,240"
                 src="https://i.pinimg.com/originals/a8/a7/b2/a8a7b2f15d5a34424b27eb5804e3af8a.png" alt=""
              
              />
              </div>

              <div className="total_hour2">
                <Totalhours
               p="Bright"
               span="$2,500"
               
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-brightness-vector-icon-png-image_3725382.jpg"
                
                per="+50%"
               name="write this page"
                />                
                </div>
           
            
            </div>
            
            
            
            </div>
        </div>
      </div>
    
  );
}

export default Staticpage;
