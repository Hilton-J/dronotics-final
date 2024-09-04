import NavBar from "./NavBar"
import HeaderTitle from "./HeaderTitle"

const Hero = () => {
  return (
    <header id="#" className="h-[70vh] md:h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex flex-col relative md:bg-fixed">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className=" text-[45px] md:text-[84px] lg:text-[112px] lg:mb-8 mb-2">DRONOTICZ</h1>
        <HeaderTitle titleText={'THE ERA OF DRONES'} style={"border-t-2 md:border-t-4 border-primary w-16 md:w-24 lg:w-32 md:mt-6 mt-3"} />
      </div>
    </header>
  )
}

export default Hero