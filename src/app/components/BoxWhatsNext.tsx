import AnimatedSection from "@components/AnimatedSection";
import { motion } from "framer-motion";

const listVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function BoxWhatsNext() {
  return (
    <AnimatedSection>
      <div className="box-container mb-12">
        <h2 className="heading-sub">What&apos;s Next?</h2>
        <p className="text-xl mb-6 leading-relaxed">
          $HOE isn&apos;t just a pump &mdash; it&apos;s the seed of something weird, and maybe even useful.
        </p>
        <motion.ul
          className="text-left text-lg space-y-3 max-w-md mx-auto leading-relaxed font-sans font-normal"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.li variants={itemVariants}>🌱 MemeDAO votes on future grants and chaos</motion.li>
          <motion.li variants={itemVariants}>🎁 Airdrop contests + &quot;Pimp My HOE&quot; NFTs</motion.li>
          <motion.li variants={itemVariants}>🛒 Merch store: aprons, enamel pins, tilled dreams</motion.li>
          <motion.li variants={itemVariants}>🌾 There&apos;s more under the soil. You&apos;ll know when it&apos;s time to dig.</motion.li>
        </motion.ul>
      </div>
    </AnimatedSection>
  );
} 