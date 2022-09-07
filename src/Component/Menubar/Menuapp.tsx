import React from "react";
// import "./menuapp.css";
import { Route, Routes } from "react-router-dom";

import FindWork from "./FindWork";
import Inspiration from "./Inspiration";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";

const Menu = () => {
  
  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Inspiration />}></Route>
        <Route path="FindWork" element={<FindWork />}></Route>

        {/* <Route path='learn Design' element={<Learn Designk/>}></Route> */}

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default Menu;
