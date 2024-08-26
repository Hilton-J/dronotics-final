import PropTypes from 'prop-types'

const HeaderTitle = ({ titleText }) => {
  return (
    <>
      <h2 className='text-base md:text-[32px]'>{titleText}</h2>
      <div className="border-t-2 border-primary w-16 mx-auto mt-4"></div>
    </>
  )
};

HeaderTitle.propTypes = {
  titleText: PropTypes.string
};

export default HeaderTitle