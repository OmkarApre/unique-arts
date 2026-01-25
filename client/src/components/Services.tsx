import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Landmark, Droplets, Box, Scissors, Layers, DoorOpen, Tag, Shield } from "lucide-react";

import safetyDoorImg from "@assets/latest-metal-jali-door-design-for-home_1767446070307.jpg";
import fiberServiceImg from "@assets/WhatsApp_Image_2026-01-03_at_2.03.23_PM_1767430736932.jpeg";
import grcServiceImg from "@assets/WhatsApp_Image_2026-01-03_at_2.28.30_PM_(2)_1767434136022.jpeg";
import sculptureServiceImg from "@assets/generated_images/elegant_artistic_sculpture_masterpiece.png";
import fountainServiceImg from "@assets/generated_images/decorative_water_fountain.png";
import threeDServiceImg from "@assets/WhatsApp_Image_2025-12-17_at_2.24.32_PM_(1)_1765975274082.jpeg";
import cncServiceImg from "@assets/generated_images/cnc_laser_cut_artwork.png";
import doorServiceImg from "@assets/WhatsApp_Image_2025-12-17_at_2.24.44_PM_1767439346476.jpeg";
import nameplateServiceImg from "@assets/Name_plates_2_compressed_compressed_page-0082_1765972916179.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Fiber (FRP)",
    description:
      "High-quality fiberglass reinforced plastic sculptures and installations. Durable, lightweight, and perfect for indoor and outdoor applications.",
    image: fiberServiceImg,
  },
  {
    icon: Landmark,
    title: "GRC Works",
    description:
      "Glass Reinforced Concrete architectural elements and decorative facades. Premium quality for modern construction projects.",
    image: grcServiceImg,
  },
  {
    icon: Box,
    title: "Sculpture",
    description:
      "Custom artistic sculptures in various materials. From classical designs to contemporary pieces, crafted with precision.",
    image: sculptureServiceImg,
  },
  {
    icon: Droplets,
    title: "Fountains",
    description:
      "Beautiful water fountain installations for homes, hotels, and commercial spaces. Elegant designs that enhance any environment.",
    image: fountainServiceImg,
  },
  {
    icon: Layers,
    title: "3D Works",
    description:
      "Custom 3D CNC carved wall panels, arches, Radha Krishna panels, and decorative elements. Fully customizable designs for your space.",
    image: threeDServiceImg,
  },
  {
    icon: DoorOpen,
    title: "3D Doors",
    description:
      "Luxurious 3D CNC carved wooden doors with intricate patterns. Traditional jali work, mandala designs, and modern styles available.",
    image: doorServiceImg,
  },
  {
    icon: Tag,
    title: "Name Plates",
    description:
      "Custom designer name plates for homes and offices. LED illuminated options, artistic designs, and premium materials available.",
    image: nameplateServiceImg,
  },
  {
    icon: Scissors,
    title: "CNC & Laser Cutting",
    description:
      "Precision CNC and laser cutting services for intricate designs. Perfect for decorative panels and detailed artwork.",
    image: cncServiceImg,
  },
  {
    icon: Shield,
    title: "MS & SS Safety Door Jali",
    description:
      "Premium mild steel and stainless steel safety door jali designs. Elegant patterns with maximum security for your home.",
    image: safetyDoorImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of artistic and construction services,
            delivering excellence in every project we undertake.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card
                className="h-full hover-elevate cursor-pointer transition-all duration-300 overflow-hidden"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
