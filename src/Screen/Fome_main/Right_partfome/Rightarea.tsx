import React, { Component } from "react";
import Framein from "../../../Component/Fome_component/Frame_in_area/Framein";
import Labelinput from "../../../Component/Fome_component/inputs and Labels/Labelinput";
import Threebtn from "../../../Component/Fome_component/threebtn/Threebtn";
import "./rightarae.css";
// import Leftpart  from'../Left-part/Leftpart'
//
export class Rightarea extends Component {
  render() {
    return (
      <div className="cantainer">
        {/* // <!-- left Area --> */}
        <div className="left-part">
          <div className="logo">
            <img
              width="60px"
              src="https://www.romaisd.com/cms/lib/TX02215271/Centricity/Domain/1393/Clever.png"
              alt=""
            />
          </div>

          {/* // <!-- blue circle --> */}
          <div className="blue-cicle">
            <div className="frame">
              <div className="logos">
                <div className="logo1">Statistics</div>
                <div className="logo2">Showing more</div>
              </div>
              <div className="progresmain">
                <div className="progress">
                  <div className="circular">
                    <div className="inner"></div>
                    <div className="outer"></div>
                    <div className="numb">0%</div>
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

                  {/* // <!-- three btn --> */}
                  <Threebtn />
                </div>

                {/* // <!-- frame in area --> */}

                <Framein 
                p="Bright"
                span="1,200"
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-brightness-vector-icon-png-image_3725382.jpg"
                />
              {/* <div className="frame2">
                <Framein 
                p="Total Hours"
                span="$1,240"
                src="https://i.pinimg.com/originals/a8/a7/b2/a8a7b2f15d5a34424b27eb5804e3af8a.png"
                />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* // <!-- Right area --> */}
        <div className="right-part">
          <div className="mainform">
            <div className="text">
              <h3>Create your account</h3>
              <p>its free and easy</p>
            </div>

            {/* <!-- Fome Area --> */}
            
            <Labelinput
            />

          </div>
        </div>
      </div>
    );
  }
}

export default Rightarea;
