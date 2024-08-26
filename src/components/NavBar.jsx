import Buttons from "./Buttons"
import Links from "./Links"


const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-7 ">
      <div className="text-xl md:text-4xl"><span>D</span><span className="text-secondary">Z</span></div>
      <nav className="flex-1 flex justify-center">
        <Links />
      </nav>
      <Buttons />
    </div>
  )
}

export default NavBar