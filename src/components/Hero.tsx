import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center px-4 py-32 md:py-40 max-w-5xl mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        cynthia song
      </motion.h1>

      <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
        {["developer", "ai enthusiast", "designer"].map((role, index) => (
          <motion.span
            key={role}
            className="px-6 py-3 rounded-full font-semibold
                       text-base md:text-lg bg-accent text-accent-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.1 + 0.3
            }}
            whileHover={{ scale: 1.05 }}
          >
            {role}
          </motion.span>
        ))}
      </div>

      <motion.p 
        className="text-xl md:text-2xl font-semibold mb-12 text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        there's nothing i love doing more than coding, designing, and working on
        solutions that improve the lives of others!
      </motion.p>

      <motion.p 
        className="text-lg md:text-xl font-semibold mb-6 text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        let's connect!
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.a
          href="mailto:cynthiasong2006@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full 
                     font-semibold transition-all duration-300 hover:shadow-apple-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={20} />
          email me
        </motion.a>
        <motion.a
          href="https://github.com/cynthia-song5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full 
                     font-semibold border border-border transition-all duration-300 
                     hover:shadow-apple-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
          github
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/cynthia-song-/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full 
                     font-semibold border border-border transition-all duration-300 
                     hover:shadow-apple-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin size={20} />
          linkedin
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
