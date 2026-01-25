import { Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import logoImage from "../assets/logotext.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Fiber (FRP)",
  "GRC Works",
  "Sculpture",
  "Fountains",
  "Artistic Works",
  "CNC & Laser Cutting",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src={logoImage}
              alt="Unique Arts"
              className="h-12 w-auto"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground">
              Crafting artistic excellence in Fiber, GRC, Sculpture, Fountains,
              and CNC Laser Cutting since 2009.
            </p>
            <a
              href="https://instagram.com/uniquearts55"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-instagram"
            >
              <SiInstagram className="w-5 h-5" />
              @uniquearts55
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919822020949"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 98220 20949
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:uniqueinterior155@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                  data-testid="link-footer-email"
                >
                  uniqueinterior155@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Behind Amanora City, Sade Satara Nali Railway Gate, Hadapsar,
                  Pune - 411028
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Unique Arts PVT. LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
