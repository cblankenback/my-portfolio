import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 pt-16"
    >
      {/* animated blobs */}
      <div
        className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw]
                   bg-gradient-to-r from-fuchsia-500 to-orange-400 opacity-40
                   rounded-full animate-blob mix-blend-lighten z-10"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw]
                   bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30
                   rounded-full animate-blob2 mix-blend-lighten z-10"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw]
                   bg-gradient-to-r from-yellow-400 to-pink-500 opacity-20
                   rounded-full animate-blob3 mix-blend-lighten z-10"
        style={{ animationDelay: "0s" }}
      />

      {/* floating sparkles */}
      <div className="absolute left-1/4 top-1/3 w-3 h-3 bg-white/70 rounded-full animate-pulse z-20" />
      <div className="absolute right-1/4 bottom-1/4 w-2 h-2 bg-blue-200 rounded-full animate-ping z-20" />
      <div className="absolute left-1/2 top-1/5 w-1.5 h-1.5 bg-pink-200 rounded-full animate-pulse z-20" />

      {/* content */}
      <div className="relative z-30 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg space-y-2 leading-tight mb-4">

          <span className="block bg-gradient-to-r from-blue-400 via-fuchsia-500 to-orange-400 text-transparent bg-clip-text">Christian Blankenback</span>

        </h1>


        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-white
             bg-gradient-to-r from-fuchsia-500 to-orange-400
             hover:opacity-90 shadow-lg shadow-fuchsia-500/40">
            View My Work
          </a>

          {/* keep the others as subtle ghosts */}
          <a
            href="#about"
            className="px-8 py-3 rounded-full text-white/80
             border border-white/30 hover:bg-white/10">
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-white/80
             border border-white/30 hover:bg-white/10">
            Contact Me
          </a>

        </div>
      </div>

      {/* Animated Arrow Down - place here, outside the content container */}
      <a

        className="absolute left-1/2 top-[88%] transform -translate-x-1/2 cursor-pointer group"

      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-6 h-6 text-white/70 group-hover:text-white transition" />
          </motion.div>
        </motion.div>
      </a>
    </section>
  );
}
