import { motion } from "framer-motion"

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#251e3b",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="aspect-square bg-[--midnight-blue] border-[--midnight-blue]"
    />
  )
}
export default Tile