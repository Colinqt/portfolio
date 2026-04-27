import { motion } from "framer-motion";
import myimage from"../assets/111.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={myimage} // <-- put your image in /public folder
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a passionate
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3">
            {["React", "Tailwind", "JavaScript", "Node.js"].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-blue-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}