import Image from "next/image";
import Link from "next/link";


const LateralDerecho = () => {
  return (
    <div className="hidden  bg-black xl:flex xl:w-3/12 flex-col justify-start">

      {/* Perfil */}

      <div className="w-[100%] flex flex-row items-center justify-start gap-x-2 mt-14 mx-0 mb-6">

        <div>
        <Image src={"/profile.png"} width={50} height={50} alt="50" className="rounded-full mr-1"></Image>
        </div>

        <div>
         <h6 className="-p-1 -my-2 text-sm font-semibold text-white"> Desarrollador </h6> 
         <h6 className="-p-1 -my-2 text-sm text-gray-400"> Front-end</h6>
        </div>

        <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className='ml-8 text-sm font-semibold text-verificado'>

                  Seguir
                   
          </Link>
        </div>
      </div>


      {/*Sugerencia */}

      <div className="w-[100%] flex flex-col mt-10 items-start ml-2">

        <h5 className="font-semibold text-gray-400 text-md mb-6"> Manejo de </h5>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <Image src={"/stack.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">HTML - CSS </h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Stack Inicial</h6>
            </div>
            
          </div>

          
          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4 text-verificado'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <Image src={"/js.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">Javascript</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Dialecto estándar - ECMAScript</h6>
            </div>
            
          </div>

          
          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4 text-verificado'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <Image src={"/react.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">React Js</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Creacion de interfaces de usuario</h6>
            </div>
            
          </div>

          
          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4 text-verificado'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

        <div className="flex flex-row items-center gap-x-4">
            <Image src={"/node.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">NodeJs</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Entorno de ejecución multiplataforma</h6>
            </div>
            
         </div>

          
          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                 className={'text-sm ml-4 text-verificado'}>

                  Seguir
                   
          </Link>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
              <Image src={"/tailwind.jpg"} height={50} width={50} alt='js' className="rounded-full" />
              
              <div>
              <h5 className="text-md -p-1 -my-1 text-white">Tailwind CSS</h5>
              <h6 className="text-xs -p-1 -my-1 text-gray-400">Framework de CSS</h6>
              </div>
              
          </div>

            
            <div>
            <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                  className={'text-sm ml-4 text-verificado'}>

                    Seguir
                    
            </Link>
            </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

        <div className="flex flex-row items-center gap-x-4">
            <Image src={"/next.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">Next.js</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Marco web de desarrollo front-end</h6>
            </div>
            
        </div>

          
          <div>
          <Link  href={"https://www.instagram.com/javascript.js/?hl=es"}    
                className={'text-sm ml-4 text-verificado'}>

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
