import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import workshopImage from "../assets/generated_images/MERGE.jpg";

const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 1000, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 800, suffix: "+", label: "Happy Clients" },
  { icon: ThumbsUp, value: 100, suffix: "%", label: "Quality Commitment" },
];

function CountUp({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold mb-1">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
              data-testid="text-about-title"
            >
              About Unique Arts
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  Unique Arts PVT. LTD
                </strong>{" "}
                is a premier artistic craftsmanship company based in Pune,
                India. We specialize in creating extraordinary fiber sculptures,
                GRC architectural elements, custom sculptures, decorative
                fountains, and precision CNC laser cutting works.
              </p>
              <p>
                Led by{" "}
                <strong className="text-foreground">
                  Dnyaneshwar K. Bhokare
                </strong>
                , our team of skilled artisans combines traditional
                craftsmanship with modern technology to deliver exceptional
                quality in every project.
              </p>
              <p>
                From concept to completion, we work closely with our clients to
                bring their creative visions to life. Our commitment to
                excellence and attention to detail has earned us the trust of
                clients across residential, commercial, and hospitality sectors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={workshopImage}
                alt="Unique Arts Workshop"
                className="w-full h-full object-cover"
                data-testid="img-about"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 text-center"
              data-testid={`card-stat-${index}`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <CountUp end={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
