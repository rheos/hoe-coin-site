import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoHero() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => setClicked(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  return (
    <motion.div
      whileHover={{
        rotate: [0, -10, 10, -6, 6, -2, 2, 0],
        transition: { duration: 0.6, ease: "easeInOut", type: "tween" },
      }}
      animate={clicked ? { scale: 1.15, rotate: 3 } : { scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className="mx-auto mb-12 cursor-pointer"
      onClick={() => setClicked(true)}
    >
      <Image
        src="/assets/hoe-logo.png"
        alt="$HOE logo"
        width={300}
        height={450}
        priority
      />
    </motion.div>
  );
}
