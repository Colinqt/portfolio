import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "",
    link: "#",
  },
  {
    title: "Dashboard App",
    desc: "",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group p-6 bg-gray-800 rounded-2xl 
                       hover:scale-105 hover:shadow-xl 
                       hover:shadow-purple-500/20 
                       transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-4">{p.desc}</p>

            <a
              href={p.link}
              className="inline-block text-sm text-purple-400 
                         opacity-0 group-hover:opacity-100 
                         transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}