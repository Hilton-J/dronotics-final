// import image from '../assets/drone8.png'
import Title from './HeaderTitle'

const About = () => {
  return (
    <section className=''>
      <div className="grid md:grid-cols-2 relative h-full">
        <div className='bg-about- bg-no-repeat bg-cover bg-center'>
          {/* <img src={image} alt="Drone Image" className="w-full" /> */}
        </div>
        <div className='flex flex-col justify-center items-center h-full absolute md:static md:text-black text-secondary md:bg-transparent bg-black bg-opacity-50'>
          <Title titleText={'ABOUT US'} style={"border-t-2 md:border-t-4 md:border-primary border-secondary w-16 md:mt-6 mt-3"} />
          <p className='text-justify lg:px-24 px-12 lg:py-20 py-10 text-sm md:text-lg'>
            Welcome to our dronoticz, where innovation and technology converge to shape the future. We revolutionize industries and improve lives worldwide through our passion for pushing the boundaries of what robots can do. With expertise in AI, computer vision, mechanical engineering, and automation, we lead the way in the robotics revolution. Our brilliant team creates intelligent machines that seamlessly integrate into daily life, enhancing productivity, safety, and efficiency.Join us on this exciting journey as we unlock new frontiers, solve complex challenges, and shape a future where intelligent machines work hand-in-hand with humans. Discover the power of robotics and be part of the revolution.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About