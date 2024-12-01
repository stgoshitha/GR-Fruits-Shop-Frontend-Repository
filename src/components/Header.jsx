import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Navbar from './Navbar'
import { CgMenuLeft } from 'react-icons/cg'
import { RiShoppingBag4Line, RiUserLine } from 'react-icons/ri'
import { TbArrowNarrowRight, TbUserCircle} from 'react-icons/tb'


const Header = () => {

  const[menuOpened,setMenuOpened] = useState();
  const[token,setToken] = useState('')
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpened(prev => !prev); 
  }

  return (
    <div className='fixed top-0 w-full z-50'>
      <header className='py-5 w-full top-0 left-0 right-0 bg-white '>
        <div className='mx-auto max-w-[1440px] px-6 lg:px-12 flex-1 flex justify-between'>

        {/*logo*/}
        <div className='flex-1 flex '>
          <Link to={'/'} className='hidden sm:flex'>
            <div className='flex items-center '>
                <div>
                  <img src={Logo} className='w-12 rounded-full'/>
                </div>
                <div>
                  <span className='text-3xl'>GR</span>
                  <span className='text-secondary text-2xl font-bold'>Fruits.</span>
                </div>
            </div>
          </Link>
        </div>
        
        {/* Navigation Bar */}
        <div className='flex-1'>
          <Navbar toggleMenu={toggleMenu} menuOpened={menuOpened} containerStyle={`${menuOpened ? "flex flex-col gap-y-12 h-screen w-[250px] absolute left-0 top-0 bg-white px-5 z-50 shadow-xl py-4 sm:gap-y-8":"hidden xl:flex gap-x-5 xl:gap-x-8 text-[15px] rounded-full px-2 py-3"}`}/>
        </div>

        {/* cart and accout section */}
        <div className='flex flex-1 items-center justify-end gap-x-3 sm:gap-x-10'>

          {!menuOpened && (<CgMenuLeft onClick={toggleMenu} className='text-2xl xl:hidden cursor-pointer'/>)}
          <Link to={'/cart'} className='flex relative'>
            <RiShoppingBag4Line className='text-2xl'/>
            <span className='bg-secondary text-white text-[14px] font-[500] absolute left-3.5 -top-2.5 flex items-center justify-center w-4 h-4 rounded-full shadow-inner'>0</span>
          </Link>

          <div className='group'>
            <div onClick={()=>!token && navigate('/login')}>
              {token?(<div className='my-[9px]'>
                <TbUserCircle className='text-[29px] cursor-pointer'/>
              </div>):(<button className='medium-14 bg-white ring-1 ring-slate-900/10 px-7 py-2.5 rounded-full hover:bg-primary transition-all duration-300 !border-none items-center justify-center gap-x-2 hidden sm:flex'>Login<RiUserLine className='text-xl'/></button>)}
            </div>

            {token && <>
              <ul className='bg-white shadow-sm p-2 w-32 ring-1 ring-slate-900/15 rounded absolute right-0 top-15 hidden group-hover:flex flex-col'>
                <li onClick={()=>navigate('/orders')}className='flex items-center justify-between cursor-pointer'><p>Orders</p><TbArrowNarrowRight className='opacity-50 text-[19px]'/></li>
                <hr className='my-2' />
                <li className='flex items-center justify-between cursor-pointer'><p>Logout</p><TbArrowNarrowRight className='opacity-50 text-[19px]'/></li>
              </ul>
            </>} 
          </div>

        </div>
        </div>
      </header>
    </div>
  )
}

export default Header 