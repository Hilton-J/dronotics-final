import PropTypes from 'prop-types'

const Links = ({ isFooter = false }) => {

  const aboutText = isFooter ? 'ABOUT US' : 'ABOUT';
  const style = isFooter ? 'flex justify-between md:text-2xl w-[270px]' : 'flex justify-between md:text-2xl w-[270px] ml-32'

  return (
    <>
      <ul className={style}>
        <li>
          <a href="#about" className="hover:text-secondary">{aboutText}</a>
        </li>
        <li>
          <a href="#articles" className="hover:text-secondary">ARTICLES</a>
        </li>
      </ul>
    </>
  )
};

Links.propTypes = {
  isFooter: PropTypes.bool
};

export default Links