import React from 'react'

const Framein = (props:any) => {
  return (
    <div>
      <div className="framin">
                  <div className="frame1">
                    <p>{props.p}</p>
                    <span>{props.span}</span>
                    <img
                      width="30px"
                      src={props.src}
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
  )
}

export default Framein;
