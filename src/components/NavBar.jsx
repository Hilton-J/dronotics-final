import Buttons from "./Buttons"


const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-7 ">
      <div className="text-xl md:text-2xl"><span>D</span><span>Z</span></div>
      <nav>
        <ul className="flex justify-center space-x-6">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#about">ARTICLES</a></li>
        </ul>
      </nav>
      <Buttons />
    </div>
  )
}

export default NavBar