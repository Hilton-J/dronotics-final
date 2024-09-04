import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa"
import Links from "./Links"

const Footer = () => {
  return (
    <div className='w-full mx-auto p-5'>
      <div className='flex md:justify-between flex-col md:grid md:grid-cols-2 items-center space-y-2 md:space-y-0'>
        <div className="flex items-center space-x-5 text-3xl md:text-5xl text-secondary p-3">
          <a className="hover:text-slate-500 cursor-pointer" href="https://facebook.com" target="_blank"><FaFacebook /></a>
          <a className="hover:text-slate-500 cursor-pointer" href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a className="hover:text-slate-500 cursor-pointer" href="https://pinterest.com" target="_blank"><FaPinterest /></a>
        </div>
        <div className="flex items-center w-full md:w-auto md:gap-14 md:justify-end">
          <Links isFooter={true} />
        </div>
        <div className=" text-xs md:text-lg text-primary text-center md:col-span-2">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:text-secondary hover:underline">
            Lwandile Majola™
          </a>
          . All Rights Reserved.
        </div>

      </div>
    </div>
  )
}

export default Footer