import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import "./Navbar.css"

const Nav = () => {
    return(
      <header data-aos="fade-down" data-aos-duration="300" className='sticky' >
        <NavLink data-aos="fade-down" data-aos-duration="400" to='/' className="button rounded">
          <span className='icon-home'></span>
          Home
        </NavLink>

        <NavLink data-aos="fade-down" data-aos-duration="500" to='about' className="button rounded">
        <span className='icon-info'></span>
          About
        </NavLink>

        <NavLink data-aos="fade-down" data-aos-duration="700" to='create' className="button rounded ">
        <span className='icon-upload'></span>
          Create
        </NavLink>
        <NavLink data-aos="fade-down" data-aos-duration="400" to='/' className="button rounded">
          <span className='icon-search'></span>
          Search
        </NavLink>
        
      </header>  
    )
}

export default Nav                                                      