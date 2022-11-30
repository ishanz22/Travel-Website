import React,{useState,useEffect} from 'react';
import './navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from "react-icons/tb"
import Aos from "aos";
import 'aos/dist/aos.css'
const Navbar =()=> {

    // react hook to add a scroll animation
useEffect(()=>{
  Aos.init({duration: 2000})
  },[])
   
  const [active, setactive] = useState('navbar')
  // function to toggle navbar
  const showNav = () =>{
    setactive('navbar activeNavbar')
  }

   // function to remove navbar
   const removeNavbar = () =>{
    setactive('navbar ')
  }
  return (
   <section className='navbarSection'>
    <div className="header flex">

      <div className="logoDiv">
        <a href="src/components/Navbar/Navbar" className="logo flex">
          <h1> <MdOutlineTravelExplore className="icon"/> Travel.</h1>
        </a>
      </div>

      <div className={active}>
        <ul className="navlists flex">
          <li className="navitem">
            <a href="src/components/Navbar/Navbar" className="navLink">Home</a>
          </li>
          <li className="navitem">
            <a href="src/components/Navbar/Navbar" className="navLink">Packages</a>
          </li>
          <li className="navitem">
            <a href="src/components/Navbar/Navbar" className="navLink">Pages</a>
          </li>
          <li className="navitem">
            <a href="src/components/Navbar/Navbar" className="navLink">News</a>
          </li>
          <li className="navitem">
            <a href="src/components/Navbar/Navbar" className="navLink">Contact</a>
          </li>

          <button className='btn'>
            <a href="src/components/Navbar/Navbar#">Book Now</a>
          </button>


        </ul>
        <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className='icon'/>
        </div>
      </div>

      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon"/>
      </div>
      
    </div>
   </section>
  )
}

export default Navbar;