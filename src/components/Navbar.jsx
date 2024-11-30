import {Link,NavLink} from 'react-router-dom'
import { FaRegWindowClose } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import { IoMailOpen } from 'react-icons/io5'
import { TbHomeFilled } from 'react-icons/tb'

const Navbar = ({containerStyle, toggleMenu, menuOpened}) => {

  const navItems =[
    {to:'/', label:'Home', icon:<TbHomeFilled/>},
    {to:'/fruits', label:'Fruits', icon:<IoMdListBox/>},
    {to:'/contact', label:'Contact', icon:<IoMailOpen/>},
  ];

  return (
    <div>
      <nav className={containerStyle}>
        
        {/*close button */}
        {menuOpened &&(
          <>
            <FaRegWindowClose onClick={toggleMenu} className='text-xl self-end cursor-pointer relative'/>
            {/* logo */}
            <Link to={'/'} className='bold-24 items-center flex'>
            <span className='pl-2 text-3xl'>GR</span>
            <span className='text-secondary text-2xl font-bold'>Fruits.</span>
            </Link>
          </>
        )}

        {navItems.map(({to, label, icon}) => {
          return (
            <div key={label} className='inline-flex'>
              <NavLink to={to} className={({isActive}) => isActive? "text-secondary font-medium flex items-center gap-x-2 ":"font-medium flex items-center gap-x-2" }>
                <span className='text-xl'>{icon}</span>
                <h5 className='text-[18px]'>{label}</h5>
              </NavLink>
            </div>
          );
        })}
      </nav>
    </div>
  )
}

export default Navbar