import React from 'react'

const Labelinput = () => {
  return (
    <div>
      <div className="fome">
              <div className="name">
                <label>Your name</label>
                <input type="text" placeholder="enter your name" />
              </div>

              <div className="email">
                <label>E-mail at phone number</label>
                <input type="text" placeholder="type your email" />
              </div>

              <div className="password">
                <label>E-mail at phone number</label>
                <input type="password" placeholder="type your password" />
              </div>

              {/* //  <!-- cheack box --> */}
              <div className="checkbox">
                <input type="checkbox" />
                <label>By creating an account mean your</label>
              </div>

              {/* //  <!-- Button  --> */}
              <div className="btn">
                <button>Register</button>
              </div>
            </div>

    </div>
  )
}

export default Labelinput;
