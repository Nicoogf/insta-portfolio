// icons
import{
    GoHome
} from "react-icons/go"
  
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
  
  
  export const navDataPC = [
    { name: 'Inicio', path: '/', icon: <GoHome className='fill-white'/> },
    { name: 'Búsqueda', path: '/search', icon: <AiOutlineSearch className='text-white'/> },
    { name: 'Explorar', path: '/explorar', icon: <TbWorldSearch /> },
    { name: 'Mensajes', path: '/work', icon: <PiMessengerLogo /> },
    { name: 'Notificaciones', path: '/work', icon: <AiOutlineHeart/> },
    { name: 'Crear', path: '/work', icon: <CgAddR /> },
    { name: 'Perfil', path: '/work', icon: <AiOutlineUser /> },
  ];

  export const lastOption = [
    { name: 'Más', path: '/work', icon: <RxHamburgerMenu className='text-white'/> }
  ]
  
  //Next Link
  import Link from 'next/link';
  import Image from "next/image";

  //Next Router
  import { useRouter } from 'next/router';
  
  const Nav = () => {
    const router = useRouter() ;
    const pathName = router.pathname ;
  
    return (     
  
    <div className='hidden xl:flex border-r-2 border-gray-800
    w-72 flex-col justify-start items-start mx-0 max-w-sm min-h-screen relative bg-black'>

        <Image src={"/portfolio.png"} width={120} height={120} alt="" className="p-2 ml-8 mt-8"/>

        <div className='text-white mt-8 ml-6'>

        {navDataPC.map(( link , index )=>{
            return(

              <Link key={ index } href={link.path} className="flex flex-row items-center gap-x-4 py-4 w-64 rounded-md hover:bg-gris"> 
                <span className='text-3xl pl-4' > {link.icon} </span>  
                <span className='text-white text-lg font-sm'>   {link.name}</span> 
             </Link>

            )
          })}

        </div>

       
        <Link href={lastOption[0].path} className=" absolute bottom-8 left-4 flex flex-row items-center gap-x-4 py-4 w-64 rounded-md hover:bg-gris"> 
            <span className='text-3xl pl-4'> {lastOption[0].icon} </span>  
            <span className='text-white text-lg font-sm'> {lastOption[0].name} </span> 
        </Link>




   </div>
    
    ) 
  };
  
  export default Nav;
  