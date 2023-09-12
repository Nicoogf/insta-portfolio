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
  
    <div className='hidden lg:w-3/12 lg:flex border-r-2 border-gray-800 
    xl:w-2/12 flex-col justify-between items-start mx-0 max-w-sm bg-black relative'>

       

        <div className='text-white mt-8 ml-4 w-[100%]'>

        <Image src={"/portfolio.png"} width={120} height={120} alt="" className="ml-4 mt-2 mb-8"/>

        {navDataPC.map(( link , index )=>{
            return(

              <Link key={ index } href={link.path} className=" w-[85%] flex flex-row items-center gap-x-2 py-4 pr-2 rounded-md hover:bg-gris"> 
                <span className='text-3xl pl-4' > {link.icon} </span>  
                <span className='text-white text-lg font-sm'>   {link.name}</span> 
             </Link>

            )
          })}

        </div>

       
        <Link href={lastOption[0].path} className="w-[85%] flex flex-row items-center gap-x-4 py-4 rounded-md hover:bg-gris absolute bottom-[15%] left-[5%]"> 
            <span className='text-3xl pl-4'> {lastOption[0].icon} </span>  
            <span className='text-white text-lg font-sm'> {lastOption[0].name} </span> 
        </Link>




   </div>
    
    ) 
  };
  
  export default Nav;
  