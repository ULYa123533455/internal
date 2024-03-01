import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./Main.css";
import "aos/dist/aos.css";

export function Main() {
  return (
    <div className="mainContainer">
    <div className="fixedTop">
      <Carousel />
    </div>
    <div className="mainContent">
      <div data-aos="fade-down" data-aos-offset="100" className="mainKonten">
        <h1>JBL</h1>
        <h4>JBL </h4>
        <h5>
          <a href="">THE COMPLETE LIST HERE</a>
        </h5>
      </div>
      <div className="subKonten">
        <div data-aos="fade-up" data-aos-offset="100" className="card1">
          <h1>JBL</h1>
          <p>JBL WIRELESS</p>
          <Link className="butto shadowed" to="Jbl">
            See More
          </Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
        <path fill="#fff" fillOpacity="1" d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,106.7C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
    <Footer className="footer" />
  </div>
  );
}

export default Main;



