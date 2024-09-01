import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa"
import Buttons from "./Buttons"
import Links from "./Links"

const Footer = () => {
  return (
    <div className='w-full mx-auto p-5'>
      <div className='flex md:justify-between flex-col-reverse md:flex-row items-center'>
        <div className="flex items-center space-x-5 text-2xl md:text-4xl text-secondary p-3">
          <a className="hover:text-slate-500 cursor-pointer"><FaFacebook /></a>
          <a className="hover:text-slate-500 cursor-pointer" href="https://pinterest.com" target="_blank"><FaLinkedin /></a>
          <a className="hover:text-slate-500 cursor-pointer" href="https://pinterest.com" target="_blank"><FaPinterest /></a>
        </div>
        <div className="flex items-center justify-between w-full md:w-auto md:gap-14">
          <Links isFooter={true} />
          <Buttons />
        </div>
      </div>
    </div>
  )
}

export default Footer