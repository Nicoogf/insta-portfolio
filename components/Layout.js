//Fuente 
import { Sora } from "@next/font/google" ;

//Configuracion de fuente
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100' ,'200' ,'300' ,'400' ,'500','600' ,'700' ,'800']
});

//Componentes

import NavMovile from "./NavMovile" ;
import NavDesktop from "./NavDesktop" ;
import Header from "./Header" ;
import TopLeft from "./TopLeftImg" ;
import InicioPage from "../pages/inicio";
import HistoriasContainer from "./HistoriasContainer";
import Inicio from "./Inicio";
import LateralDerecho from "./LateralDerecho";

const Layout = ( {children} ) => {
  return (
    <div className="flex flex-row ">
      <NavMovile />
      <NavDesktop />
      <Inicio />
      <LateralDerecho />     
     
    </div>
  );
};

export default Layout ;
