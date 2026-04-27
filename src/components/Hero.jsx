import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Graphic Designerr",
  "Social Media Managerr",
  "UI/UX Designerr",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;

    if (!deleting && subIndex === roles[index].length) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gray-900 text-white px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative z-10 max-w-2xl">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Hanna!
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-6 text-lg h-6"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}