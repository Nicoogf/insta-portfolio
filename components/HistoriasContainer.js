//Next Image
import Image from "next/image" ;
import Link from 'next/link';


const HistoriasContainer = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-row justify-center  mt-4  gap-2 md:gap-4  xl:mx-auto bg-black text-white xl:p-4 overflow-x-scroll pb-2">

      <Link className="flex flex-col items-center" href="/" >
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[2px] w-[65px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6 className="text-sm">Proyecto</h6>
      </Link>

      <Link className="flex flex-col items-center" href="/" >
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[2px] w-[65px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6 className="text-sm">Proyecto</h6>
      </Link>

      <Link className="flex flex-col items-center" href="/" >
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[2px] w-[65px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6 className="text-sm">Proyecto</h6>
      </Link>

      <Link className="flex flex-col items-center" href="/" >
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[2px] w-[65px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6 className="text-sm">Proyecto</h6>
      </Link>

      <Link className="flex flex-col items-center" href="/" >
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[2px] w-[65px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6 className="text-sm">Proyecto</h6>
      </Link>

      <Link className="flex flex-col items-center" href="/" >
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[2px] w-[65px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6 className="text-sm">Proyecto</h6>
      </Link>

    </div>
  ) ;
};

export default HistoriasContainer;
