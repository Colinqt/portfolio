import { motion } from "framer-motion";

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">
          My Portfolio
        </h1>

        {/* Links */}
        <ul className="flex gap-8">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group cursor-pointer">
              
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition"
              >
                {link}
              </a>

              {/* Animated underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 
                           transition-all duration-300 group-hover:w-full"
              ></span>

              {/* Glow effect on hover */}
              <span
                className="absolute inset-0 rounded-md opacity-0 
                           group-hover:opacity-100 transition 
                           bg-blue-500/10 blur-md"
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}