import PropTypes from 'prop-types'

const HeaderTitle = ({ titleText }) => {
  return (
    <>
      <h2 className='text-[10px] sm:text-[20px] lg:text-[32px]'>{titleText}</h2>
      <div className="border-t-2 md:border-t-4 border-primary w-12 md:w-24 lg:w-32 md:mt-6 mt-3"></div>
    </>
  )
};

HeaderTitle.propTypes = {
  titleText: PropTypes.string
};

export default HeaderTitle