import Image from "next/image";
import Link from "next/link";


const LateralDerecho = () => {
  return (
    <div className="border-4 border-black hidden xl:flex xl:w-3/12 flex-col justify-start">

      {/* Perfil */}

      <div className="w-[100%] flex flex-row mt-10 items-center justify-center gap-x-2 mx-0 mb-6">

        <div>
        <Image src={"/profile.png"} width={50} height={50} alt="50" className="rounded-full mr-1"></Image>
        </div>

        <div>
         <h6 className="-p-1 -my-2 text-sm font-semibold"> Desarrollador </h6> 
         <h6 className="-p-1 -my-2 text-sm"> Front-end</h6>
        </div>

        <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className='ml-8 text-sm'>

                  Seguir
                   
          </Link>
        </div>
      </div>


      {/*Sugerencia */}

      <div className="w-[100%] flex flex-col mt-10 items-start ml-2">

        <h5 className="font-semibold text-gray-500 text-md mb-2"> Manejo de </h5>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <Image src={"/html.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1">HTML - CSS </h5>
            <h6 className="text-xs -p-1 -my-1">Stack Inicial</h6>
            </div>
            
          </div>

          

          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[100%] items-center justify-start gap-x-4 mb-3">

          <div>
            <Image src={"/javascript.png"} height={50} width={50} alt='js' className="rounded-full" />
          </div>

          <div>
            <h5 className="text-md -p-1 -my-1">Tailwind</h5>
            <h6 className="text-xs -p-1 -my-1">Framework de CSS</h6>
          </div>

          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[100%] items-center justify-start gap-x-4 mb-3">

          <div>
            <Image src={"/javascript.png"} height={50} width={50} alt='js' className="rounded-full" />
          </div>

          <div>
            <h5 className="text-md -p-1 -my-1">ReactJS</h5>
            <h6 className="text-xs -p-1 -my-1">Crearcion de interfaces</h6>
          </div>

          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[100%] items-center justify-start gap-x-4 mb-3">

          <div>
            <Image src={"/javascript.png"} height={50} width={50} alt='js' className="rounded-full" />
          </div>

          <div>
            <h5 className="text-md -p-1 -my-1">NodeJS</h5>
            <h6 className="text-xs -p-1 -my-1">Entorno de ejecución </h6>
          </div>

          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[100%] items-center justify-start gap-x-4 mb-3">

          <div>
            <Image src={"/javascript.png"} height={50} width={50} alt='js' className="rounded-full" />
          </div>

          <div>
            <h5 className="text-md -p-1 -my-1">NextJs</h5>
            <h6 className="text-xs -p-1 -my-1">Marco web de desarrollo</h6>
          </div>

          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

      </div>


      {/* Links */}


      {/* Descripcion */}
    </div>
  ) 
};

export default LateralDerecho;
