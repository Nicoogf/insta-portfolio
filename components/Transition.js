//Framer Motion
import { motion } from "framer-motion" ;

//Variants
const transitionVariants  = {
    initial : {
      x : '100%' ,
      width : '100%'
    },
    animate : {
      x: ''
    }
}


const Transition = () => {
  return (
    <>
      <div>Transition</div>
    </>
  );
};

export default Transition;
