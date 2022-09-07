import React, { Component } from 'react'
export class Leftpart extends Component {
  render() {
    return (
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
              <div className="three-btn">
                <p className="static">static</p>
                <p className="relative">relative</p>
                <p className="absulate">absuluate</p>
              </div>
            </div>

            {/* // <!-- frame in area --> */}
            <div className="framin">
              <div className="frame1">
                <p>Bright</p>
                <span>1,240</span>
                <img
                  width="30px"
                  src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-brightness-vector-icon-png-image_3725382.jpg"
                  alt=""
                />
              </div>
              <div className="frame2">
                <p>Total Hours</p>
                <span>$1,240</span>
                <img
                  width="30px"
                  src="https://i.pinimg.com/originals/a8/a7/b2/a8a7b2f15d5a34424b27eb5804e3af8a.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    )
  }
}

export default Leftpart
