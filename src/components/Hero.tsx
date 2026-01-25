import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/generated_images/luxury_art_showroom_showcase.png";
import logoImage from "../assets/logotext.png";

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Unique Arts Workshop"
          className="w-full h-full object-cover "
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
                 <div className="relative bg-white/30 backdrop-blur-sm border border-white/20 shadow-2xl w-fit rounded-xl mx-auto my-2">
              <img
                src={logoImage}
                alt="Unique Arts"
                className="h-20 md:h-32 w-auto mx-auto"
                data-testid="img-hero-logo"
              />
            </div>

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          Crafting Artistic
          <span className="block text-primary">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          data-testid="text-hero-subtitle"
        >
          Premium Fiber (FRP), GRC, Sculpture, Fountains & CNC Laser Cutting
          services. Transforming your vision into stunning artistic reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToPortfolio}
            data-testid="button-explore-portfolio"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore Our Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
