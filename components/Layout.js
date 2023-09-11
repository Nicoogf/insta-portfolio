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

const Layout = ( {children} ) => {
  return (
    <div>
      <NavMovile />
      <NavDesktop />
      <Header />
      <TopLeft />
      { children }
    </div>
  );
};

export default Layout ;
