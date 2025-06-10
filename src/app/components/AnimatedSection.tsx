import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}
