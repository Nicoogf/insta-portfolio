import Image from "next/image";
import { PiSealCheck } from "react-icons/pi" ;
import { BsThreeDots } from "react-icons/bs" ;
import { AiOutlineHeart } from "react-icons/ai" ;
import { FaRegComment } from "react-icons/fa" ;
import { TbLocation } from "react-icons/tb" ;
import { BsSave } from "react-icons/bs"

const PublicacionesContainer = () => {
  return (
    <div>

      <div className="w-10/12 mx-auto mt-4 max-w-lg">

        {/* Foto de Pefil Nombre hora*/}

        <div className="flex flex-row justify-between items-center mb-2">
        <div className="flex flex-row items-center gap-x-1">
          <Image src={"/profile.png"} height={45} width={45} alt="profile" className="rounded-full" />
          <h5 className="font-semibold text-white ml-2"> nicolas_falabella </h5>
          <PiSealCheck className="text-white bg-verificado"/>
          <h6 className="text-gray-400"> •11 min </h6>
        </div>

        <div>
         <BsThreeDots className="text-gray-300"/>
        </div>

        </div>

        {/* Imagen Proyecto*/}

        <div>
          <Image src={"/proyecto1.jpg"} width={500} height={500} alt="proyecto" className="w-full rounded-sm"></Image>
        </div>

        {/* Iconos*/}

        <div className="flex flex-row justify-between mt-2">

          <div className="flex flex-row gap-x-3">
            <AiOutlineHeart className="text-3xl text-white"/>
            <FaRegComment className="text-3xl text-white"/>
            <TbLocation className="text-3xl text-white"/>
          </div>

          <div>
            <BsSave className="text-2xl text-white"/>
          </div>

        </div>

        {/* Me gusta*/}

        <div>
          <h6 className="text-white font-semibold">24 Me gusta</h6>
        </div>

        {/* Me gusta*/}
        <div>
          <h6 className="font-semibold text-white text-md">nicolas_falabella 
          <span className="font-normal"> El primer Portfolio relaizado con react el link para verlo es el siguiente :</span></h6>
          <h6 className="text-gray-300"> Comentarios desactivados</h6>
        </div>

      </div>

      <div className="w-10/12 mx-auto mt-4">

{/* Foto de Pefil Nombre hora*/}

<div className="flex flex-row justify-between items-center mb-2">
<div className="flex flex-row items-center gap-x-1">
  <Image src={"/profile.png"} height={45} width={45} alt="profile" className="rounded-full" />
  <h5 className="font-semibold text-white ml-2"> nicolas_falabella </h5>
  <PiSealCheck className="text-white bg-verificado"/>
  <h6 className="text-gray-400"> •11 min </h6>
</div>

<div>
 <BsThreeDots className="text-gray-300"/>
</div>

</div>

{/* Imagen Proyecto*/}

<div>
  <Image src={"/proyecto1.jpg"} width={500} height={500} alt="proyecto" className="w-full rounded-sm"></Image>
</div>

{/* Iconos*/}

<div className="flex flex-row justify-between mt-2">

  <div className="flex flex-row gap-x-3">
    <AiOutlineHeart className="text-3xl text-white"/>
    <FaRegComment className="text-3xl text-white"/>
    <TbLocation className="text-3xl text-white"/>
  </div>

  <div>
    <BsSave className="text-2xl text-white"/>
  </div>

</div>

{/* Me gusta*/}

<div>
  <h6 className="text-white font-semibold">24 Me gusta</h6>
</div>

{/* Me gusta*/}
<div>
  <h6 className="font-semibold text-white text-md">nicolas_falabella 
  <span className="font-normal"> El primer Portfolio relaizado con react el link para verlo es el siguiente :</span></h6>
  <h6 className="text-gray-300"> Comentarios desactivados</h6>
</div>

      </div>

      <div className="w-10/12 mx-auto mt-4">

{/* Foto de Pefil Nombre hora*/}

<div className="flex flex-row justify-between items-center mb-2">
<div className="flex flex-row items-center gap-x-1">
  <Image src={"/profile.png"} height={45} width={45} alt="profile" className="rounded-full" />
  <h5 className="font-semibold text-white ml-2"> nicolas_falabella </h5>
  <PiSealCheck className="text-white bg-verificado"/>
  <h6 className="text-gray-400"> •11 min </h6>
</div>

<div>
 <BsThreeDots className="text-gray-300"/>
</div>

</div>

{/* Imagen Proyecto*/}

<div>
  <Image src={"/proyecto1.jpg"} width={500} height={500} alt="proyecto" className="w-full rounded-sm"></Image>
</div>

{/* Iconos*/}

<div className="flex flex-row justify-between mt-2">

  <div className="flex flex-row gap-x-3">
    <AiOutlineHeart className="text-3xl text-white"/>
    <FaRegComment className="text-3xl text-white"/>
    <TbLocation className="text-3xl text-white"/>
  </div>

  <div>
    <BsSave className="text-2xl text-white"/>
  </div>

</div>

{/* Me gusta*/}

<div>
  <h6 className="text-white font-semibold">24 Me gusta</h6>
</div>

{/* Me gusta*/}
<div>
  <h6 className="font-semibold text-white text-md">nicolas_falabella 
  <span className="font-normal"> El primer Portfolio relaizado con react el link para verlo es el siguiente :</span></h6>
  <h6 className="text-gray-300"> Comentarios desactivados</h6>
</div>

      </div>


    </div>
  )
};

export default PublicacionesContainer;
