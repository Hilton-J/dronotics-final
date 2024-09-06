import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const style = {
  // background: 'red',
  height: '100vh',
};

const ShowDrawer = ({ isOpen, setIsOpen }) => {


  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen((prevState) => !prevState)}
      direction='right'
      className='text-black'
      overlayOpacity={0.8}
      enableOverlay={true}
      zIndex={100}
      style={style}
    >
      <ul className='flex flex-col md:text-2xl px-5'
      >
        <li>
          <a href="#about" className="hover:text-secondary">ABOUT</a>
        </li>
        <li>
          <a href="#articles" className="hover:text-secondary">ARTICLES</a>
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