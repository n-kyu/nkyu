import { motion } from 'framer-motion'
import Tile from '../Layout/Tiles'

export default function Index() {
  return (
    <>
      <div className="w-full relative">
        <section className="w-full grid grid-cols-20 h-screen overflow-y-clip">
          {/* Grid background */}
          {Array.from(Array(20 * 12), (_, i) => (
          <Tile key={i} />
        ))}
        </section>
        <div className="main-container pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10">
            <motion.h1
                initial={{opacity: 0, x:-100 }}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.7}}
            className="text-8xl uppercase tracking-tight text-center">Turning ideas into creative solutions.</motion.h1>

            <motion.p
                initial={{opacity: 0, y:100 }}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1}}
            >
                Check out my resume</motion.p>
        </div>
      </div>
    </>
  );
}
