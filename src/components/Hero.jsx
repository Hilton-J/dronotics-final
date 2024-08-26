import NavBar from "./NavBar"
import HeaderTitle from "./Title"

const Hero = () => {
  return (
    <header className="h-[30vh] md:h-[75vh] lg:h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-[112px]">DRONOTICZ</h1>
        <HeaderTitle titleText={'THE ERA OF DRONES'} />
      </div>
    </header>
  )
}

export default Hero