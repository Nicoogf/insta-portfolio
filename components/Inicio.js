import Header from "./Header";
import HistoriasContainer from "./HistoriasContainer";
import PublicacionesContainer from "./PublicacionesContainer" ;

const MidContent = () => {
  return (

    <div className="w-full lg:w-9/12 xl:w-7/12 bg-black pt-4">
      <Header />
      <HistoriasContainer />
      <PublicacionesContainer />
    </div>
   
  )
};

export default MidContent;
