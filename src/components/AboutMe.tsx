const AboutMe = () => {
  return (
    <section id="about" className="px-4 py-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl overflow-hidden shadow-apple-lg">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Your photo here</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            about me
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              there's nothing i love doing more than coding, designing, and working
              on solutions that improve the lives of others!
            </p>
            <p>
              passionate developer, ai enthusiast, and designer focused on creating
              meaningful impact through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-apple-md">
        <h3 className="text-2xl font-bold mb-8 text-foreground">interests & passions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["coding", "design", "ai/ml", "music", "flowers", "research", "leadership", "innovation"].map((interest) => (
            <div
              key={interest}
              className="aspect-square bg-accent rounded-2xl flex items-center justify-center
                         text-accent-foreground font-semibold hover:scale-105 transition-transform duration-300"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
