

const Subscribe = () => {
  return (
    <div className='bg-drop flex flex-col m-auto h-[20vh] justify-center items-center' id='subscribe'>
      <div className=' justify-center items-center'>
        <h2>SUBSCRIBE</h2>
        <p>Sign-up to our newletter</p>
        <form className='subscribe-form'>
          <input type='email' placeholder='Your email' required />
          <button type='submit'>SUBMIT</button>
        </form>
      </div>

    </div>
  )
}

export default Subscribe