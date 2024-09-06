import { IoMdClose } from "react-icons/io"
import Buttons from "./Buttons"
import Links from "./Links"
import { HiMiniBars3 } from "react-icons/hi2"
import { useState } from 'react'
import ShowDrawer from './ShowDrawer'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const 
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  };


  return (
    <div className="flex justify-between items-center p-5 absolute w-full">
      <div className="text-2xl md:text-4xl">
        <a href="#" target="_blank" className="cursor-pointer">
          <span>D</span>
          <span className="text-secondary">Z</span>
        </a>
      </div>
      <nav className="flex-1 md:flex justify-center hidden">
        <Links />
      </nav>

      <div className="text-2xl md:text-4xl flex md:hidden">
        <a onClick={toggleDrawer} className="transition duration-700 cursor-pointer hover:text-secondary">{isOpen ? <IoMdClose /> : <HiMiniBars3 />}</a></div>

      <div className="absolute"><ShowDrawer isOpen={isOpen} setIsOpen={setIsOpen} /></div>

      <div className="hidden md:block">
        <Buttons />
      </div>

    </div>
  )
}

export default NavBar