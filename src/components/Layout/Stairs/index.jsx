import { motion } from "framer-motion";
import { opacity, expand} from '../anim'

export default function Stairs({ children }) {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom
    };
  };
  const nbOfColumns = 7;

  return (
    <div className="page stairs relative z-50">
      <motion.div {...anim(opacity)} className="animate-background"></motion.div>
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div {...anim(expand, nbOfColumns - i)} className="animate-container" key={i} />;
        })}
      </div>
      {children}
    </div>
  );
}
