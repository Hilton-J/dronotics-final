import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const ShowDrawer = ({ isOpen, setIsOpen }) => {

  const openDrawer = () => {
    setIsOpen((prevState) => !prevState)
  };

  return (
    <Drawer
      open={isOpen}
      onClose={openDrawer}
      direction='right'
      duration={1000}
      className='text-black'
      overlayOpacity={0.8}
      enableOverlay={true}
    >
      <ul className='flex flex-col md:text-2xl px-5'
      >
        <li>
          <a href="#about" className="hover:text-secondary" onClick={openDrawer}>ABOUT</a>
        </li>
        <li>
          <a href="#articles" className="hover:text-secondary" onClick={openDrawer}>ARTICLES</a>
        </li>
      </ul>
    </Drawer>
  )
};

ShowDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ShowDrawer