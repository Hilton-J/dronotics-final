import PropTypes from 'prop-types'

const Buttons = ({ text = 'SUBSCRIBE' }) => {
  return (
    <>
      <a href="#subscribe" className='border border-black py-1 px-4'>{text}</a>
    </>
  )
};

Buttons.propTypes = {
  text: PropTypes.string
}

export default Buttons