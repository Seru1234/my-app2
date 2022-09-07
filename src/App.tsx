import React from "react";
// import logo from "./logo.svg";
import './App.css';
// import Leftpart from "./Screen/Fome_main/Left-part/Leftpart";
import Rightarea from "./Screen/Fome_main/Right_partfome/Rightarea";
// import Form from "./Screen/MainFome1/Form/Form";
import Navabar from "./Screen/Navabar/Navbar_index";



function App() {


return(
    <div>
        <div>
            <Navabar/>
        </div>
        <Rightarea/>
    </div>
)
}

export default App;
