import AnimatedSection from "@components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BoxMemeWall() {
  return (
    <AnimatedSection>
      <div className="box-container mb-8">
        <h2 className="heading-sub mb-6">Meme Wall</h2>
        <p className="text-xl leading-relaxed mb-6 italic text-[color:var(--foreground)]/80">
          Shitposts. Cultivation. Glory.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/memes/hoe1.png", "/memes/hoe2.png", "/memes/hoe3.png"].map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05, rotate: -1 }} transition={{ type: "spring", stiffness: 150 }}>
              <Image
                src={src}
                alt={`meme-${i}`}
                width={400}
                height={400}
                className="meme-img"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 