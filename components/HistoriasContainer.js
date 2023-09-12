//Next Image
import Image from "next/image" ;
import Link from 'next/link';


const HistoriasContainer = () => {
  return (
    <div className="w-full mx-auto flex flex-row md:justify-center gap-2 md:gap-4 lg:gap-8  xl:mx-0 bg-black text-white justify-around xl:p-4">

      <Link className="flex flex-col items-center" href="/">
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[3px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6>Proyecto</h6>
      </Link>

      
      <Link className="flex flex-col items-center" href="/">
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[3px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6>Proyecto</h6>
      </Link>

      
      <Link className="flex flex-col items-center" href="/">
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[3px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6>Proyecto</h6>
      </Link>

      
      <Link className="flex flex-col items-center" href="/">
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[3px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6>Proyecto</h6>
      </Link>

      
      <Link className="flex flex-col items-center" href="/">
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[3px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6>Proyecto</h6>
      </Link>

         
      <Link className="flex flex-col items-center" href="/">
        <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[3px]">
         <Image src="/bang.jpg" width={75} height={100} alt="" className="rounded-full" />
        </div>        
        <h6>Proyecto</h6>
      </Link>

      
   

    </div>
  ) ;
};

export default HistoriasContainer;
