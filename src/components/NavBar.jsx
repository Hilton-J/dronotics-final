import Buttons from "./Buttons"
import Links from "./Links"


const NavBar = () => {
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
      <Buttons />
    </div>
  )
}

export default NavBar