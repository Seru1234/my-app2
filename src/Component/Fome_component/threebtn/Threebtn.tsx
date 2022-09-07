import React, { Component } from 'react'
import './threebtn.css'

export default class Threebtn extends Component {
  render() {
    return (
      <div>
        <div className="three-btn">
                    <p className="static">static</p>
                    <p className="relative">relative</p>
                    <p className="absulate">absuluate</p>
                  </div>
      </div>
    )
  }
}
