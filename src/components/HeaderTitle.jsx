import PropTypes from 'prop-types'

const HeaderTitle = ({ titleText, style }) => {

  return (
    <>
      <h2 className='text-base md:text-lg lg:text-3xl'>{titleText}</h2>
      <div className={style}></div>
    </>
  )
};

HeaderTitle.propTypes = {
  titleText: PropTypes.string,
  style: PropTypes.string
};

export default HeaderTitle