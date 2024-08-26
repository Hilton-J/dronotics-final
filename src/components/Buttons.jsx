import PropTypes from 'prop-types'

const Buttons = ({ text = 'SUBSCRIBE' }) => {
  return (
    <>
      <a href="#subscribe" className='border border-primary py-1 px-4 bg-transparent hover:border-transparent hover:bg-secondary'>{text}</a>
    </>
  )
};

Buttons.propTypes = {
  text: PropTypes.string
}

export default Buttons