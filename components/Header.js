//Next Image
import Image from "next/image";
import Link from 'next/link';

//icon
import { AiOutlineHeart } from "react-icons/ai" ;

const notification = {
  nombre : "Notificaciones",
  icon: <AiOutlineHeart/>
}

const Header = () => {
  return (
    <header className="w-full bg-black flex flex-row items-center justify-between py-[1px] xl:py-3 
    xl:hidden  border-b-2 border-gray-800 ">     
      <Image src={"/portfolio.png"} width={100} height={120} alt="" className="mx-4 md:mx-8"/>      
      <Link href="/" className="mx-4 md:mx-8"> <span className="text-white text-3xl "> {notification.icon}  </span> </Link>
    </header>  
  );
};

export default Header;
