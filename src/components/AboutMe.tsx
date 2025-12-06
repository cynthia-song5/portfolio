import profilePhoto from "@/assets/profile-photo.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Palette, Lightbulb, Heart, MapPin, GraduationCap } from "lucide-react";

const interests = [
  { icon: Code, label: "Building solutions", color: "text-primary" },
  { icon: Palette, label: "Design thinking", color: "text-accent-foreground" },
  { icon: Lightbulb, label: "Problem solving", color: "text-primary" },
  { icon: Heart, label: "Helping others", color: "text-destructive" },
];

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
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          nice to meet you!
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          here's a little about who i am
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Photo Column */}
        <motion.div 
          className="lg:col-span-2 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl overflow-hidden shadow-apple-lg relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={profilePhoto} 
              alt="Cynthia Song" 
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Quick facts floating card */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-apple-lg border border-border"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Ohio State '28</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Columbus, OH</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          className="lg:col-span-3 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main story */}
          <div className="space-y-6">
            <motion.p
              className="text-xl md:text-2xl text-foreground font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              hi, i'm cynthia! 👋
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              i'm an <span className="text-foreground font-medium">integrated business & engineering</span> student 
              majoring in <span className="text-primary font-medium">computer science & engineering</span> at 
              ohio state. i love building things at the intersection of tech, design, and business.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              what excites me most is creating technology that makes a real difference in people's lives—whether 
              that's helping students find opportunities, detecting distress signals with AI, or teaching the 
              next generation of developers.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              when i'm not coding, you'll find me scrolling through pinterest for design inspiration, 
              going on runs, or dreaming up new solutions to problems i see around me.
            </motion.p>
          </div>

          {/* What drives me */}
          <motion.div
            className="bg-muted/50 rounded-2xl p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-lg font-bold mb-4 text-foreground">what drives me</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <interest.icon className={`w-5 h-5 ${interest.color}`} />
                  <span className="text-sm font-medium text-foreground">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current focus */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="text-lg font-bold mb-2 text-foreground">currently focused on</h3>
            <p className="text-muted-foreground">
              exploring how AI can solve real-world problems, building products at startups, 
              and teaching the next generation of diverse technologists 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
