import Buttons from "./Buttons"
import Links from "./Links"
import { HiMiniBars3 } from "react-icons/hi2"
// import { useState } from 'react'


const NavBar = () => {
  // const [navLinks, showNavLinks] = useState(0);

  // const 


  return (
    <div className="flex justify-between items-center p-5 absolute w-full">
      <div className="text-xl md:text-4xl ">
        <a href="#" target="_blank" className="cursor-pointer">
          <span>D</span>
          <span className="text-secondary">Z</span>
        </a>
      </div>
      <nav className="flex-1 md:flex justify-center hidden">
        <Links />
      </nav>
      <div className="block md:hidden">
        <HiMiniBars3 />
      </div>
      <div className="hidden md:block">
        <Buttons />
      </div>

    </div>
  )
}

export default NavBar