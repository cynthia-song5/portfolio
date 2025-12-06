import profilePhoto from "@/assets/profile-photo.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="about" className="px-4 py-24 max-w-7xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl overflow-hidden shadow-apple-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={profilePhoto} 
              alt="Cynthia Song" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">about me</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              hi! i'm cynthia, an integrated business & engineering student majoring in computer science & engineering
              at ohio state. i'm excited about building things that make people's lives easier, especially at the
              intersection of tech, design, and business.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              in my freetime, i love coming up with solutions to problems, scrolling through pinterest for design
              inspiration, and going to runs!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
