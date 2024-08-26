import PropTypes from 'prop-types'

const Title = ({ titleText = 'THE ERA OF DRONES' }) => {
  return (
    <>
      <h2>{titleText}</h2>
    </>
  )
};

Title.propTypes = {
  titleText: PropTypes.string
};

export default Title