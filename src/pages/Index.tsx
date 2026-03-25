import { useEffect, useRef, useState } from "react";
import {
  Phone, MessageCircle, Menu, X, Truck, ShieldCheck, Leaf, BadgeCheck,
  IndianRupee, MapPin, Instagram, ChevronRight, Heart,
  Store, Award, Clock, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

import heroBg from "@/assets/hero-bg.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import vegetablesImg from "@/assets/vegetables.jpg";
import dryfruitsImg from "@/assets/dryfruits.jpg";
import storeInteriorImg from "@/assets/store-interior.jpg";
import storeFrontImg from "@/assets/store-front.jpg";
import fruitDisplayImg from "@/assets/fruit-display.jpg";
import dryfruitsDisplayImg from "@/assets/dryfruits-display.jpg";
import storeBusyImg from "@/assets/store-busy.jpg";
import storeVegetablesImg from "@/assets/store-vegetables.jpg";
import storeVideo from "@/assets/store-video.mp4";
import logoImg from "@/assets/elitefreshmart logo.jpeg";

// Scroll animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".section-fade-in");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#whyus" },
  { label: "Gallery", href: "#gallery" },
  { label: "Delivery", href: "#delivery" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact", href: "#contact" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Elite Freshmart!%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919500486772?text=${text}`, "_blank");
    setFormData({ name: "", phone: "", message: "" });
    toast({
      title: "Message Sent!",
      description: "WhatsApp has been opened with your message. Thank you for contacting us!",
    });
  };
  useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content - Accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 shadow-lg backdrop-blur-md" : "bg-transparent"
          }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <a href="#" className="flex items-center gap-2" aria-label="Elite Freshmart - Home">
            <img src={logoImg} alt="Elite Freshmart Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-primary tracking-tight">Elite Freshmart</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4 shadow-lg" role="menu">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50"
                onClick={() => setMenuOpen(false)}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Fresh fruits, vegetables and dry fruits display"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Get the Freshest Fruits, Vegetables<br className="hidden sm:block" /> & Best Dry Fruits in Ambur
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-8">
            Elite Freshmart – Eat Healthy, Live Wealthy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://wa.me/919500486772" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white text-base px-8 rounded-full shadow-xl">
                <MessageCircle className="h-5 w-5" /> Order on WhatsApp
              </Button>
            </a>
            <a href="#franchise">
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 text-base px-8 rounded-full shadow-xl font-semibold">
                <Store className="h-5 w-5" /> Franchise Enquiry
              </Button>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white/90">
            <a href="tel:9500486772" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> 9500486772
            </a>
            <a href="tel:7094693997" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> 7094693997
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Freshness You Can Trust</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
            Elite Freshmart provides the freshest fruits, vegetables and premium dry fruits in Ambur.
            We focus on quality, hygiene and fair pricing so customers always receive healthy and natural products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BadgeCheck, label: "100% Quality" },
              { icon: Leaf, label: "100% Fresh" },
              { icon: Heart, label: "100% Natural" },
            ].map((item, i) => (
              <Card key={item.label} className="text-center border-none shadow-md hover:shadow-xl transition-shadow bg-background stagger-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Our Products</h2>
          <p className="text-center text-muted-foreground mb-12">Premium quality products handpicked for you</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { img: fruitsImg, title: "Fresh Fruits", desc: "Handpicked seasonal fruits, always ripe and delicious." },
              { img: vegetablesImg, title: "Fresh Vegetables", desc: "Farm-fresh vegetables delivered daily for your table." },
              { img: dryfruitsImg, title: "Premium Dry Fruits", desc: "Top quality almonds, cashews, pistachios and more." },
            ].map((item, i) => (
              <Card
                key={item.title}
                className="overflow-hidden border-none shadow-md group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background stagger-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={224}
                  />
                </div>
                <CardContent className="pt-5 pb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="whyus" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: IndianRupee, title: "Fair Price Best Quality" },
              { icon: Clock, title: "Fresh Daily Stock" },
              { icon: ShieldCheck, title: "Hygienic Products" },
              { icon: Award, title: "Trusted Local Store" },
            ].map((item, i) => (
              <div key={item.title} className="text-center stagger-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { img: storeFrontImg, label: "Elite Freshmart store front – fruits, vegetables and dry fruits shop in Ambur, Tamil Nadu" },
              { img: fruitDisplayImg, label: "Fresh fruits display with seasonal fruits at Elite Freshmart Ambur" },
              { img: dryfruitsDisplayImg, label: "Premium dry fruits and nuts dispensers at Elite Freshmart Ambur showroom" },
              { img: storeInteriorImg, label: "Inside Elite Freshmart – fresh vegetables and banana section in Ambur store" },
              { img: storeBusyImg, label: "Vegetables and grocery shopping at Elite Freshmart Ambur, Tamil Nadu" },
              { img: storeVegetablesImg, label: "Fresh vegetables, coconuts and daily essentials at Elite Freshmart Ambur" },
            ].map((item, i) => (
              <div key={item.label} className="relative group overflow-hidden rounded-xl aspect-square stagger-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <span className="text-white font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORE VIDEO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 section-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Watch Our Fresh Products</h2>
          <p className="text-muted-foreground mb-10">See our fresh fruits, vegetables and dry fruits in action.</p>
          <div className="max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl">
            <video
              src={storeVideo}
              controls
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full"
              poster={storeFrontImg}
              aria-label="Elite Freshmart store video showcasing fresh products"
            />
          </div>
          <a href="https://www.instagram.com/elitefreshmart/" target="_blank" rel="noopener noreferrer">
            <Button className="mt-8 gap-2 rounded-full px-8" size="lg">
              <Instagram className="h-5 w-5" /> Follow Us on Instagram
            </Button>
          </a>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="bg-background">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>

      {/* HOME DELIVERY */}
      <section id="delivery" className="pb-20 pt-8 bg-secondary">
        <div className="container mx-auto px-4 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Free Home Delivery</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Order from home and get fresh products delivered to your doorstep
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { icon: MessageCircle, step: "1", title: "Order on WhatsApp", desc: "Send us your list of items" },
              { icon: CheckCircle2, step: "2", title: "We Pack Fresh", desc: "Handpicked and hygienically packed" },
              { icon: Truck, step: "3", title: "Delivered to You", desc: "Free delivery for orders above ₹500" },
            ].map((item, i) => (
              <div key={item.step} className="text-center stagger-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-9 w-9 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.me/919500486772" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 rounded-full px-10 text-base shadow-lg hover:shadow-xl transition-shadow">
                <MessageCircle className="h-5 w-5" /> Order Now on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FRANCHISE */}
      <section id="franchise" className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white/30" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white/20" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-white/20 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 section-fade-in text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 mb-6">
            <Store className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Own Elite Freshmart Franchise</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg">
            Elite Freshmart is expanding. Become a franchise partner and start your own freshmart store with a trusted brand.
          </p>
          <a href="tel:9894060039">
            <Button size="lg" className="gap-2 rounded-full px-10 bg-white text-primary hover:bg-white/90 font-semibold text-base shadow-lg">
              <Phone className="h-5 w-5" /> Apply for Franchise
            </Button>
          </a>
          <p className="mt-6 text-white/80">
            Franchise Contact: <a href="tel:9894060039" className="underline font-semibold hover:text-white transition-colors">98940 60039</a>
          </p>
        </div>
      </section>

      {/* CONTACT + MAP COMBINED */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12">We'd love to hear from you. Visit us or send a message!</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form Card */}
            <Card className="border-none shadow-xl bg-background">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" /> Send Us a Message
                </h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <Input
                    id="contact-name"
                    placeholder="Your Name"
                    className="rounded-full"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    aria-label="Your Name"
                  />
                  <Input
                    id="contact-phone"
                    placeholder="Phone Number"
                    type="tel"
                    className="rounded-full"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    aria-label="Phone Number"
                  />
                  <Textarea
                    id="contact-message"
                    placeholder="Your Message"
                    className="rounded-2xl min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    aria-label="Your Message"
                  />
                  <Button type="submit" size="lg" className="w-full rounded-full text-base gap-2" id="contact-submit">
                    <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                  </Button>
                </form>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-border">
                  <a href="tel:9500486772" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <Phone className="h-4 w-4" /> 9500486772
                  </a>
                  <a href="tel:7094693997" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <Phone className="h-4 w-4" /> 7094693997
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <div className="space-y-4">
              <Card className="border-none shadow-xl overflow-hidden bg-background">
                <div className="rounded-t-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d78.7166!3d12.7900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad41e2c0000001%3A0x1!2s92%2F113%20Mohammed%20Ali%20Bazaar%2C%20Ambur%2C%20Tamil%20Nadu%20635802!5e0!3m2!1sen!2sin!4v1710000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elite Freshmart Location - 92/113 Mohammed Ali Bazaar, Ambur"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Visit Our Store</h3>
                      <p className="text-muted-foreground text-sm">92/113 Mohammed Ali Bazaar, Ambur – 635 802</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl bg-background">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Store Hours</h3>
                      <p className="text-muted-foreground text-sm">Open Daily: 10:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <img src={logoImg} alt="Elite Freshmart Logo" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-xl font-bold tracking-tight">Elite Freshmart</span>
              </div>
              <p className="text-background/60 text-sm">Premium fresh fruits, vegetables and dry fruits. Eat Healthy, Live Wealthy.</p>
            </div>
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-background/90">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-background/60">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3 text-background/90">Contact</h4>
              <div className="space-y-2 text-sm text-background/60">
                <a href="tel:9500486772" className="flex items-center justify-center md:justify-end gap-2 hover:text-background transition-colors">
                  <Phone className="h-3.5 w-3.5" /> 9500486772
                </a>
                <a href="tel:7094693997" className="flex items-center justify-center md:justify-end gap-2 hover:text-background transition-colors">
                  <Phone className="h-3.5 w-3.5" /> 7094693997
                </a>
              </div>
              <div className="flex justify-center md:justify-end gap-3 mt-4">
                <a href="https://wa.me/919500486772" target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#25D366]/30 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/elitefreshmart/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 text-center">
            <p className="text-background/40 text-sm">© {new Date().getFullYear()} Elite Freshmart. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elite Freshmart",
            "description": "Premium fresh fruits, vegetables and dry fruits store in Ambur",
            "url": "https://www.elitefreshmart.com",
            "telephone": ["+919500486772", "+917094693997"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "92/113 Mohammed Ali Bazaar",
              "addressLocality": "Ambur",
              "addressRegion": "Tamil Nadu",
              "postalCode": "635802",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.79,
              "longitude": 78.72
            },
            "image": "/og-image.png",
            "priceRange": "₹",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "10:00",
              "closes": "21:00"
            },
            "sameAs": [
              "https://www.instagram.com/elitefreshmart/"
            ]
          })
        }}
      />
    </div>
  );
};

export default Index;
