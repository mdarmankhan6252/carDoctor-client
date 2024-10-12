import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
const Nav = () => {
   return (
      <nav className='flex items-center justify-between py-6'>
         <Link to='/'>
            <img src={logo} alt="" className='max-w-20' />
         </Link>
         <ul className='text-gray-800 font-semibold space-x-6 text-[17px]'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/register'>Register</NavLink>
         </ul>
         <div className='flex items-center space-x-6'>
            <CiShoppingCart className='text-3xl'/>
            <CiSearch className='text-3xl'/>
            <button className='btn_1'>Appointment</button>
         </div>
      </nav>
   );
};

export default Nav;