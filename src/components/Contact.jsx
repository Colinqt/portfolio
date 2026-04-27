import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate sending
    setTimeout(() => {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 px-6 text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-10">
        Feel free to reach out for collaborations or projects.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Success Message */}
      {sent && (
        <p className="mt-6 text-green-400">
          ✅ Message sent successfully!
        </p>
      )}

      {/* Alternative contact */}
      <div className="mt-10">
        <p className="text-gray-500 mb-2">Or email me directly:</p>
        <a
          href="mailto:hannaraizza15@email.com"
          className="text-blue-400 hover:underline"
        >
          hannaraizza15@email.com
        </a>
      </div>
    </section>
  );
}