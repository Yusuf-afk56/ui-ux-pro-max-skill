"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  Calendar,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  FlaskConical,
  Brain,
  Dna,
  Users,
  Award,
  ChevronRight,
  GraduationCap,
  Microscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BackgroundPaths } from "@/components/ui/background-paths";

// ── Design tokens ─────────────────────────────────────────────────────────────
const navy = "#0A2540";
const navyMid = "#163354";
const teal = "#0891B2";
const gold = "#B5975A";

// ── Button ────────────────────────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "gold" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      default: "bg-teal-600 text-white hover:bg-teal-700",
      ghost: "border border-white/30 text-white hover:bg-white/10",
      gold: "text-white hover:opacity-90 active:scale-95",
      outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
    };

    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-4 text-sm",
      lg: "h-12 px-8 text-base",
    };

    const goldStyle = variant === "gold" ? { backgroundColor: gold } : {};

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        style={goldStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// ── Navigation ────────────────────────────────────────────────────────────────
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Private Practice" },
  { href: "#publications", label: "Research" },
];

const Navigation = React.memo(() => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md" style={{ backgroundColor: "rgba(10,37,64,0.97)" }}>
      <nav className="max-w-6xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-white tracking-tight">Dr Schaida Schirwani</span>
            <span className="text-xs font-normal" style={{ color: teal }}>Consultant Clinical Geneticist</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              type="button"
              variant="gold"
              size="sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar size={14} />
              Book Appointment
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="md:hidden backdrop-blur-md border-t border-white/10"
            style={{ backgroundColor: "rgba(10,37,64,0.98)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button
                  type="button"
                  variant="gold"
                  size="sm"
                  className="w-full"
                  onClick={() => { setOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  <Calendar size={14} />
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});
Navigation.displayName = "Navigation";

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = React.memo(() => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${navy} 0%, ${navyMid} 100%)` }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(8,145,178,0.18) 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Badge */}
      <motion.aside
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-teal-400" aria-hidden="true" />
        <span className="text-xs text-white/70">Accepting private referrals</span>
      </motion.aside>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" as const }}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center max-w-3xl leading-tight mb-6"
        style={{
          background: "linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.80))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
        }}
      >
        Expert genetics care<br />
        when it matters most
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" as const }}
        className="text-sm md:text-base text-center text-white/60 max-w-xl mb-10"
      >
        Consultant Clinical Geneticist with over 15 years of NHS and academic experience in neurodevelopmental disorders, rare diseases, and prenatal genetics.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" as const }}
        className="flex flex-wrap items-center justify-center gap-4 relative z-10 mb-20"
      >
        <Button
          type="button"
          variant="gold"
          size="lg"
          className="rounded-lg shadow-lg"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Calendar size={16} />
          Request Appointment
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="rounded-lg"
          onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Expertise
          <ArrowRight size={16} />
        </Button>
      </motion.div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
        className="w-full max-w-4xl relative"
      >
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&auto=format&fit=crop"
            alt="Medical genetics consultation"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "420px", objectPosition: "center top" }}
            loading="eager"
          />
          {/* Credentials overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="flex flex-wrap gap-3">
              {["MBBS", "PhD", "MRCP(UK)", "FRCPath"].map((cred) => (
                <span key={cred} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
Hero.displayName = "Hero";

// ── About ─────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.68, 0, 1.2] as const } },
};

const About = React.memo(() => {
  const qualifications = [
    { icon: GraduationCap, label: "MBBS", detail: "University of London" },
    { icon: Award, label: "PhD", detail: "Molecular Genetics" },
    { icon: Award, label: "MRCP (UK)", detail: "Royal Colleges of Physicians" },
    { icon: Award, label: "FRCPath", detail: "Royal College of Pathologists" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: navy, letterSpacing: "-0.02em" }}>
            About Dr Schirwani
          </h2>
          <p className="text-slate-500 mb-14 max-w-2xl">A distinguished academic clinician with extensive NHS and research experience.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="space-y-5 text-slate-600 leading-relaxed"
          >
            <p>
              Dr Schaida Schirwani is a Consultant Clinical Geneticist with a distinguished career spanning NHS clinical practice, academic research, and international collaboration. She holds appointments at leading teaching hospitals and brings a wealth of expertise to her private practice.
            </p>
            <p>
              She trained in clinical genetics and completed a PhD in molecular genetics, developing deep expertise in rare disease diagnosis, neurodevelopmental genetics, and dysmorphology. Her work integrates cutting-edge genomic technologies with compassionate patient-centred care.
            </p>
            <p>
              Dr Schirwani has published widely in peer-reviewed journals, contributed to national genetic databases, and participated in international collaborations including the Deciphering Developmental Disorders (DDD) study and DECIPHER consortium.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: teal }}
            >
              Book a consultation <ChevronRight size={15} />
            </a>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55, delay: 0.1, ease: "easeOut" as const } } }}
            className="rounded-xl p-6 border border-slate-100 bg-slate-50 space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4" style={{ color: navy }}>Qualifications & Credentials</h3>
            {qualifications.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(8,145,178,0.1)" }}>
                  <Icon size={18} style={{ color: teal }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: navy }}>{label}</div>
                  <div className="text-xs text-slate-500">{detail}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});
About.displayName = "About";

// ── Expertise ─────────────────────────────────────────────────────────────────
const expertiseAreas = [
  {
    icon: Brain,
    title: "Neurodevelopmental Disorders",
    description: "Autism spectrum disorder, intellectual disability, ADHD, and developmental delay — genomic investigation and clinical assessment.",
  },
  {
    icon: Dna,
    title: "Rare Genetic Conditions",
    description: "Diagnosis and management of rare monogenic and chromosomal conditions using advanced genomic sequencing technologies.",
  },
  {
    icon: Users,
    title: "Dysmorphology",
    description: "Clinical assessment of individuals with multiple congenital anomalies, syndromic features, and unknown diagnoses.",
  },
  {
    icon: FlaskConical,
    title: "Prenatal Genetics",
    description: "Genetic counselling and investigation for couples with a family history of genetic conditions, recurrent miscarriage, or abnormal prenatal findings.",
  },
  {
    icon: Microscope,
    title: "Genomic Medicine",
    description: "Interpretation of whole genome, whole exome, and panel sequencing results in clinical and research settings.",
  },
  {
    icon: BookOpen,
    title: "Genetic Counselling",
    description: "Comprehensive counselling for individuals and families navigating genetic diagnoses, inheritance patterns, and reproductive options.",
  },
];

const Expertise = React.memo(() => {
  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: navy, letterSpacing: "-0.02em" }}>
            Clinical Expertise
          </h2>
          <p className="text-slate-500 max-w-2xl">Specialised knowledge across the full spectrum of clinical genetics and genomic medicine.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseAreas.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" as const } },
              }}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(8,145,178,0.1)" }}>
                <Icon size={20} style={{ color: teal }} />
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: navy }}>{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
Expertise.displayName = "Expertise";

// ── Private Practice ──────────────────────────────────────────────────────────
const services = [
  {
    title: "Initial Genetics Consultation",
    items: [
      "Comprehensive clinical assessment",
      "Family history and pedigree analysis",
      "Targeted genetic testing recommendations",
      "Written clinical summary for your GP",
    ],
  },
  {
    title: "Diagnostic Investigations",
    items: [
      "Whole exome and genome sequencing",
      "Chromosomal microarray (SNP array)",
      "Gene panel testing",
      "Metabolic and biochemical screening",
    ],
  },
  {
    title: "Genetic Counselling",
    items: [
      "Results interpretation and explanation",
      "Recurrence risk assessment",
      "Reproductive options discussion",
      "Support for decision-making",
    ],
  },
  {
    title: "Follow-up & Ongoing Care",
    items: [
      "Results review appointments",
      "Variant re-analysis as evidence evolves",
      "Liaison with specialist teams",
      "Long-term surveillance planning",
    ],
  },
];

const Services = React.memo(() => {
  return (
    <section id="services" className="py-24" style={{ background: `linear-gradient(160deg, ${navy} 0%, ${navyMid} 100%)` }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white" style={{ letterSpacing: "-0.02em" }}>
            Private Practice
          </h2>
          <p className="text-white/60 max-w-2xl">Prompt, expert, and compassionate genetics care. Appointments available in London and via telemedicine.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(({ title, items }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const } },
              }}
              className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-base mb-4 text-white">{title}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: gold }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" as const } } }}
          className="mt-10 rounded-xl p-8 border border-white/10 bg-white/5 text-center"
        >
          <p className="text-white/80 mb-6 text-sm">
            Private consultations at the London Clinic and Harley Street. Video appointments available UK-wide.
          </p>
          <Button
            type="button"
            variant="gold"
            size="lg"
            className="rounded-lg shadow-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Calendar size={16} />
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
});
Services.displayName = "Services";

// ── Research & Publications ───────────────────────────────────────────────────
const pubStats = [
  { value: "50+", label: "Peer-reviewed publications" },
  { value: "15+", label: "Years NHS experience" },
  { value: "1000+", label: "Clinical citations" },
];

const publications = [
  {
    title: "Schirwani S et al. (2022). Expanding the phenotype of KAT6A syndrome: six new cases.",
    journal: "European Journal of Human Genetics",
  },
  {
    title: "Schirwani S et al. (2020). Assessing the prevalence of FOXP1 syndrome: A systematic literature review.",
    journal: "American Journal of Medical Genetics",
  },
  {
    title: "Schirwani S et al. (2019). Rare Copy Number Variants in Congenital Cardiac Disease Patients.",
    journal: "Pediatric Cardiology",
  },
];

const Publications = React.memo(() => {
  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: navy, letterSpacing: "-0.02em" }}>
            Research & Publications
          </h2>
          <p className="text-slate-500 max-w-2xl">Contributing to the evidence base in clinical genetics through ongoing research and international collaboration.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-14">
          {pubStats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const } },
              }}
              className="rounded-xl p-6 border border-slate-100 bg-slate-50 text-center"
            >
              <div className="text-3xl font-bold mb-1" style={{ color: teal }}>{value}</div>
              <div className="text-sm text-slate-500">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Selected publications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: navy }}>Selected Publications</h3>
          {publications.map(({ title, journal }) => (
            <div key={title} className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex gap-4 items-start">
              <BookOpen size={18} className="flex-shrink-0 mt-0.5" style={{ color: teal }} />
              <div>
                <p className="text-sm text-slate-700 leading-relaxed mb-1">{title}</p>
                <span className="text-xs font-medium" style={{ color: gold }}>{journal}</span>
              </div>
            </div>
          ))}
          <a
            href="https://www.ncbi.nlm.nih.gov/search/research-articles/?term=Schirwani+S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-sm font-medium transition-colors"
            style={{ color: teal }}
          >
            View all publications on PubMed <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
});
Publications.displayName = "Publications";

// ── Contact ───────────────────────────────────────────────────────────────────
const ContactForm = React.memo(() => {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">("idle");
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 1000);
  };

  if (status === "sent") {
    return (
      <div className="rounded-xl p-10 border border-slate-100 bg-slate-50 text-center space-y-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: "rgba(8,145,178,0.12)" }}>
          <Award size={22} style={{ color: teal }} />
        </div>
        <h3 className="font-semibold text-lg" style={{ color: navy }}>Request received</h3>
        <p className="text-sm text-slate-500">Thank you. We will be in touch within one business day to arrange your consultation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full name <span aria-hidden="true" className="text-red-500">*</span></label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            value={form.name} onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 transition-shadow"
            style={{ "--tw-ring-color": teal } as React.CSSProperties}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email <span aria-hidden="true" className="text-red-500">*</span></label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            value={form.email} onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 transition-shadow"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
        <input
          id="phone" name="phone" type="tel" autoComplete="tel"
          value={form.phone} onChange={handleChange}
          className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Reason for referral <span aria-hidden="true" className="text-red-500">*</span></label>
        <textarea
          id="message" name="message" rows={4} required
          value={form.message} onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 transition-shadow resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full rounded-lg"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Appointment Request"}
      </Button>
    </form>
  );
});
ContactForm.displayName = "ContactForm";

const Contact = React.memo(() => {
  const contactMethods = [
    { icon: Mail, label: "Email", value: "admin@drschirwani.co.uk" },
    { icon: Phone, label: "Phone", value: "+44 (0)20 XXXX XXXX" },
    { icon: MapPin, label: "Location", value: "Harley Street, London W1G" },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: navy, letterSpacing: "-0.02em" }}>
            Book an Appointment
          </h2>
          <p className="text-slate-500 max-w-2xl">Private consultations available in London and via video. Typically available within 2 weeks.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: navy }}>Get in touch</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                To request a private consultation, please complete the form or contact us directly. We aim to respond within one business day.
              </p>
            </div>
            <div className="space-y-3">
              {contactMethods.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(8,145,178,0.1)" }}>
                    <Icon size={18} style={{ color: teal }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">{label}</div>
                    <div className="text-sm font-medium" style={{ color: navy }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.1, ease: "easeOut" as const } } }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = React.memo(() => (
  <footer className="py-10 border-t border-slate-100 bg-white">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
      <div>
        <span className="font-medium" style={{ color: navy }}>Dr Schaida Schirwani</span>
        {" "}&middot; Consultant Clinical Geneticist
      </div>
      <div className="flex gap-6">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className="hover:text-slate-600 transition-colors">{label}</a>
        ))}
      </div>
      <div>&copy; {new Date().getFullYear()} Dr Schaida Schirwani. All rights reserved.</div>
    </div>
  </footer>
));
Footer.displayName = "Footer";

// ── Main export ───────────────────────────────────────────────────────────────
export default function Component() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded-b-md">
        Skip to main content
      </a>
      <Navigation />
      <div id="main-content">
        <BackgroundPaths
          title="Dr Schaida Schirwani"
          subtitle="Consultant Clinical Geneticist"
          ctaLabel="Book an Appointment"
          onCtaClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        />
        <About />
        <Expertise />
        <Services />
        <Publications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
