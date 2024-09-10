import PropTypes from 'prop-types'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Buttons from './Buttons'

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
      className='bg-gradient-to-br to-[rgba(255,255,255,0.2)]  from-[rgba(255,255,255,0.4)] h-full'
      overlayOpacity={0.8}
      enableOverlay={true}
    >

      <ul className='flex flex-col text-2xl p-5 h-full space-y-4 '>
        <li className='text-4xl border-b-2 border-secondary pb-5'>
          <span>D</span>
          <span className="text-secondary">Z</span>
        </li>
        <li>
          <a href="#about" className="hover:text-secondary" onClick={openDrawer}>ABOUT</a>
        </li>
        <li>
          <a href="#articles" className="hover:text-secondary" onClick={openDrawer}>ARTICLES</a>
        </li>
        <li className='pt-3'>
          <Buttons />
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