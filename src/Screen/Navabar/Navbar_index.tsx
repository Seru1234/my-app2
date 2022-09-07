import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Menu from "../../Component/Menubar/Menuapp";
import './Navindex.css'


function Navabar()
{
    return(
        <div>
<React.StrictMode>
    <BrowserRouter>
<Menu/>
    </BrowserRouter>
</React.StrictMode>
        </div>
    )
}

export default Navabar;