import PropTypes from 'prop-types'

const HeaderTitle = ({ titleText, isHero = true }) => {

  const style = isHero ? "border-t-2 md:border-t-4 border-primary w-16 md:w-24 lg:w-32 md:mt-6 mt-3" : "border-t-2 md:border-t-4 md:border-primary border-secondary w-16 md:mt-6 mt-3";

  return (
    <>
      <h2 className='text-[1rem] md:text-[23px] lg:text-[32px]'>{titleText}</h2>
      <div className={style}></div>
    </>
  )
};

HeaderTitle.propTypes = {
  titleText: PropTypes.string,
  isHero: PropTypes.bool
};

export default HeaderTitle