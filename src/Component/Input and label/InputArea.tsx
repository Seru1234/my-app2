import React from "react";
import './InputArea.css'
function InputArea(props:any)
{
    return(
        <div className="maininput">
            {/* <h1>This is input area</h1> */}
            <label>{props.label}</label>

            <input placeholder={props.placeholder} type={props.type}></input>
            
        </div>
    )
}
export default InputArea;