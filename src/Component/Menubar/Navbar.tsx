import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  FaAmericanSignLanguageInterpreting,
  FaCartPlus,
  FaCcDiscover,
  FaCentos,
  FaCodepen,
  FaCreativeCommons,
  FaCreativeCommonsShare,
  FaCreativeCommonsZero,
  FaFirefoxBrowser,
  FaFont,
  FaGratipay,
  FaHireAHelper,
  FaHive,
  FaSearchDollar,
  FaShopify,
  FaUniregistry,
  FaYoutube,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdDownloadDone,
  MdGraphicEq,
  MdSearch,
  MdWeb,
} from "react-icons/md";
import { SiFreelancer, SiMicrosoftteams, SiOpenvpn } from "react-icons/si";
import { TbTemplate } from "react-icons/tb";

var Navbar = () => {
  function myFunction(x: any) {
    x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <nav className="navbar">
      <div className="left-logo1">
        <span>drifffle</span>
        </div>
      <div className="topnav" id="myTopnav">
      
        <div className="dropdown">
          
          <button className="dropbtn">
          
            <NavLink to="/">Inspiration</NavLink>

            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/">
              <FaCentos className="react-icon" color="blue" size="2rem" />
              Explore Design Work
            </NavLink>

            <NavLink to="/">
              <FaGratipay className="react-icon" color="orange" size="2rem" />
              Explore Design Work
            </NavLink>

            <NavLink to="/">
              <FaCreativeCommonsShare
                className="react-icon"
                color="#FF00FF"
                size="2rem"
              />
              Playoffs
            </NavLink>

            <NavLink to="/">
              <FaCreativeCommonsZero
                className="react-icon"
                color="#7FFFD4"
                size="2rem"
              />
              Blog
            </NavLink>

            <NavLink to="/">
              <FaCreativeCommons
                className="react-icon"
                color="#A52A2A"
                size="2rem"
              />
              Weekly Warmup
            </NavLink>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <NavLink to="FindWork">Find Work</NavLink>

            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/">
              <FaHireAHelper
                className="react-icon"
                color="B8860B"
                size="2rem"
              />
              Job Board
            </NavLink>
            <NavLink to="/">
              <FaHive className="react-icon" color="808080" size="2rem" />
              Freelance Projects <p>PRO+</p>
            </NavLink>
            <NavLink to="/">
              <FaAmericanSignLanguageInterpreting
                className="react-icon"
                color="orange"
                size="2rem"
              />
              Want freelance design projects?
            </NavLink>
            <NavLink to="/">
              <FaYoutube className="react-icon" color="HotPink" size="2rem" />
              Personalize your profile with video
            </NavLink>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <NavLink to="LearnDesign">Learn Design</NavLink>

            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/">
              <FaCartPlus className="react-icon" color="Khaki" size="2rem" />
              Certified Product Design Course
            </NavLink>
            <NavLink to="/">
              <FaUniregistry
                className="react-icon"
                color="LawnGreen"
                size="2rem"
              />
              Introduction To UI Design{" "}
            </NavLink>
            <NavLink to="/">
              <FaFirefoxBrowser
                className="react-icon"
                color="LightBlue"
                size="2rem"
              />
              Browse our courses & workshops
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            <NavLink to="gopro">Go Pro</NavLink>

            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/">
              <MdDesignServices
                className="react-icon"
                color="Magenta"
                size="2rem"
              />
              For Designers
            </NavLink>
            <NavLink to="/">
              <SiFreelancer
                className="react-icon"
                color="MediumOrchid"
                size="2rem"
              />
              For Freelancers
            </NavLink>
            <NavLink to="/">
              <SiMicrosoftteams
                className="react-icon"
                color="OrangeRed"
                size="2rem"
              />
              For Teams
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            <NavLink to="DesignFiles">Design Files</NavLink>

            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/">
              <FaCcDiscover className="react-icon" color="Pink" size="2rem" />
              Discover
            </NavLink>
            <NavLink to="/">
              <MdGraphicEq className="react-icon" color="Purple" size="2rem" />
              Graphics
            </NavLink>
            <NavLink to="/">
              <FaFont className="react-icon" color="Orchid" size="2rem" />
              Font
            </NavLink>
            <NavLink to="/">
              <FaCodepen
                className="react-icon"
                color="PaleGoldenRod"
                size="2rem"
              />
              3D
            </NavLink>
            <NavLink to="/">
              <TbTemplate className="react-icon" color="SeaGreen" size="2rem" />
              Templates
            </NavLink>
            <NavLink to="/">
              <MdDownloadDone
                className="react-icon"
                color="#DEB887"
                size="2rem"
              />
              Add-Ons
            </NavLink>
            <NavLink to="/">
              <MdWeb className="react-icon" color="Brown" size="2rem" />
              Web Themes
            </NavLink>
            <NavLink to="/">
              <FaShopify className="react-icon" color="Cyan" size="2rem" />
              Open a Shop
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            <NavLink to="HireDesign">Hire Design</NavLink>

            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/">
              <FaHireAHelper
                className="react-icon"
                color="DarkGoldenRod"
                size="2rem"
              />
              About Dribble Hiring
            </NavLink>
            <NavLink to="/">
              <FaSearchDollar
                className="react-icon"
                color="DarkGreen"
                size="2rem"
              />
              Designer search
            </NavLink>
            <NavLink to="/">
              <SiOpenvpn
                className="react-icon"
                color="DarkOrange"
                size="2rem"
              />
              List My job Opening
            </NavLink>
          </div>
        </div>

        <NavLink
          to="javascript:void(0);"
          style={{ fontSize: "33px" }}
          className="icon"
          onClick={myFunction}
        >
          &#9776;
        </NavLink>
      </div>
      {/* <div className="signbtn">
      <MdSearch className="serchicon" size="1.5rem" color="gray"/>
      <button > Sign in</button>
     </div>

     <button className="sharebtn">Share my work</button> */}

      {/* <NavLink to="/">Inspiration</NavLink>

      <NavLink to="/findwork">FindWork</NavLink> */}
    </nav>
  );
};

export default Navbar;
