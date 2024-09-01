
const Subscribe = () => {
  return (
    <div className='bg-drop flex flex-col m-auto h-auto justify-center items-center' id='subscribe'>
      <div className=' flex flex-col justify-center items-center w-[90%] my-16'>
        <h2 className="text-[28px] md:text-[32px]">SUBSCRIBE</h2>
        <p className="mt-1 mb-7 text-sm md:text-base">Sign-up to our newletter</p>
        <form className='flex flex-col items-center w-full md:w-4/5 lg:w-3/5 space-y-10'>
          <input type='email' placeholder='Your email' required className="border border-transparent md:px-6 px-4 py-3 md:py-4 w-full focus:outline-none focus:border-secondary" />
          <button className='border border-primary py-2 px-6 bg-transparent hover:border-transparent hover:bg-secondary md:w-[185px] w-[140px]' type='submit'>SUBMIT</button>
        </form>
      </div>

    </div>
  )
}

export default Subscribe