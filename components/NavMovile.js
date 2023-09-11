// icons
import {
  GrHomeRounded,
  GrSearch,
} from 'react-icons/gr' ;

import {
  CgAddR
} from 'react-icons/cg' ;

import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch
} from 'react-icons/ai' ;

import{
  PiMessengerLogo
} from "react-icons/pi" ; 

import {
  RxHamburgerMenu
} from "react-icons/rx" ; 

import {
  TbWorldSearch
} from "react-icons/tb";

import{
  GoHome
} from "react-icons/go"


// nav data
export const navDataMovile = [
  { name: 'inicio', path: '/', icon: <GoHome /> },
  { name: 'busqueda', path: '/search', icon: <AiOutlineSearch /> },
  { name: 'crear', path: '/add', icon: <CgAddR /> }, 
  { name: 'mensaje', path: '/md', icon: <PiMessengerLogo /> },
  { name: 'perfil', path: '/profile', icon: <AiOutlineUser /> },
];

export const navDataPC = [
  { name: 'inicio', path: '/', icon: <GrHomeRounded /> },
  { name: 'busqueda', path: '/search', icon: <GrSearch /> },
  { name: 'explorar', path: '/explorar', icon: <TbWorldSearch /> },
  { name: 'mensaje', path: '/work', icon: <PiMessengerLogo /> },
  { name: 'notificaciones', path: '/work', icon: <AiOutlineHeart /> },
  { name: 'crear', path: '/work', icon: <CgAddR /> },
  { name: 'perfil', path: '/work', icon: <AiOutlineUser /> },
  { name: 'mas', path: '/work', icon: <RxHamburgerMenu /> },
];

//Next Link
import  Link  from 'next/link';

//Next Router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter() ;
  const pathname = router.pathname ;

  return (
    <nav className=''>
      {/* Inner*/}

      <div className='fixed w-full bottom-0 flex xl:hidden flex-row gap-y-4 justify-around bg-black h-[55px] items-center'>
        {navDataMovile.map(( link , index )=>{
          return(
            <Link 
            href={link.path}    className={`hover:bg-gris py-2 px-4 rounded-md  `}
         
            key={ index }> 

                <span className={` text-3xl ${link.path === pathname ? 'bg-gris text-red-500' : 'text-white'}`}> 
                {link.icon}  
                </span> 

            </Link>
          )
        })}
      </div>
    </nav>
  ) 
};

export default Nav;
