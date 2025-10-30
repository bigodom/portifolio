import { motion } from "framer-motion";

export default function CardSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col items-center gap-8 py-20 bg-gray-100">
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: item * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-80 h-48 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-xl font-semibold"
        >
          Card {item}
        </motion.div>
      ))}
    </section>
  );
}