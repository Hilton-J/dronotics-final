import NavBar from "./NavBar"
import HeaderTitle from "./Title"

const Hero = () => {
  return (
    <header id="#" className="h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex flex-col relative">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className=" text-[45px] md:text-[84px] lg:text-[112px] lg:mb-8 mb-2">DRONOTICZ</h1>
        <HeaderTitle titleText={'THE ERA OF DRONES'} />
      </div>
    </header>
  )
}

export default Hero