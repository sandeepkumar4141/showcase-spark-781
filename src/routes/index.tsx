import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Cpu,
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  Phone,
  Zap,
  Cloud,
  Brain,
} from "lucide-react";
import { Reveal, SectionHeading, SpotlightCard, Tag } from "@/components/portfolio/primitives";
import { useActiveSection } from "@/hooks/use-reveal";
import portrait from "@/assets/sandeep.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandeep Kumar — Electrical & Electronics Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sandeep Kumar, EEE undergraduate at VIT Chennai working across embedded systems, machine learning, IoT and AWS cloud.",
      },
      { property: "og:title", content: "Sandeep Kumar — Electrical & Electronics Engineer" },
      {
        property: "og:description",
        content:
          "Embedded systems, machine learning and cloud projects by Sandeep Kumar, EEE undergraduate at VIT Chennai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "sandeepkumarsaini7357@gmail.com";
const PHONE = "+91 8112281647";
const LINKEDIN = "https://www.linkedin.com/in/sandeep-kumar-3604aa285";
const GITHUB = "https://github.com/sandeepkumar4141";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "Three-Phase Transmission Line Fault Detection",
    domain: "Power Systems",
    icon: Zap,
    summary:
      "Arduino + ACS712 system that identifies and classifies L-G, L-L and DL-G faults, isolating the line via relay logic in under 50 ms.",
    points: [
      "Real-time detection and relay isolation under 50 ms",
      "Low-voltage prototype for experimental validation",
      "16x2 LCD interface for live fault and status reporting",
    ],
    stack: ["Arduino", "ACS712", "Embedded C", "Relay Logic"],
  },
  {
    title: "Arduino-Based Accident Prevention System",
    domain: "Embedded Safety",
    icon: Cpu,
    summary:
      "Alcohol-aware ignition lock with GPS/GSM emergency alerts, built to stop drunk driving before the engine starts.",
    points: [
      "MQ-3 alcohol sensing blocks engine start on detection",
      "GPS + GSM send live location and SMS alerts",
      "Relay-driven ignition cut-off for unsafe conditions",
    ],
    stack: ["Arduino", "MQ-3", "GPS", "GSM"],
  },
  {
    title: "Pollution Monitoring & Visualization System",
    domain: "IoT",
    icon: Cloud,
    summary:
      "End-to-end IoT air-quality pipeline from ESP sensor nodes to a Flask backend and a Flutter app, with 98% transmission success.",
    points: [
      "Multi-sensor environmental data acquisition",
      "Real-time ESP to Flask pipeline and visualization",
      "Flutter mobile app for live pollution tracking",
    ],
    stack: ["ESP32", "Flask", "Flutter", "IoT"],
  },
  {
    title: "Serverless Image Moderation System",
    domain: "Cloud / AI",
    icon: Brain,
    summary:
      "Event-driven moderation pipeline on AWS using Rekognition, with results in DynamoDB and real-time SNS alerting.",
    points: [
      "Automated unsafe-content detection with Rekognition",
      "Results persisted in DynamoDB, alerts through SNS",
      "Scalable serverless architecture on AWS Lambda",
    ],
    stack: ["AWS Lambda", "Rekognition", "DynamoDB", "S3", "SNS"],
  },
];

const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "Java", "Embedded C", "Assembly"],
  },
  {
    group: "Core Engineering",
    items: [
      "Embedded Systems Design",
      "Microcontrollers",
      "Arduino",
      "PLC Programming",
      "MATLAB",
      "Simulink",
    ],
  },
  {
    group: "ML & Data",
    items: ["Machine Learning", "PyTorch", "Data Analysis", "Predictive Analytics", "Power BI"],
  },
  {
    group: "Cloud",
    items: ["AWS Lambda", "Amazon S3", "DynamoDB", "SNS", "Serverless"],
  },
];

const CERTS = [
  { name: "Oracle Certified Java Foundations Associate", issuer: "Oracle", year: "Jul 2026" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte Australia · Forage", year: "Jun 2026" },
  { name: "Getting Started with Artificial Intelligence", issuer: "IBM", year: "May 2026" },
  { name: "Unsupervised Machine Learning with Python", issuer: "ITRONIX Solutions", year: "Jun 2025" },
  { name: "Power BI Workshop", issuer: "OfficeMaster", year: "Mar 2026" },
];

const MARQUEE = [
  "PyTorch",
  "Arduino",
  "AWS Lambda",
  "Embedded C",
  "MATLAB",
  "Flutter",
  "DynamoDB",
  "PLC",
  "ESP32",
  "Simulink",
  "Python",
  "Rekognition",
];

const ACTIVITIES = [
  {
    org: "Hindi Literary Association",
    role: "Management Lead",
    detail:
      "Managed team activities and supported planning and execution of association events.",
  },
  {
    org: "Mharo Rajasthan Club",
    role: "Management Lead",
    detail:
      "Coordinated club activities and worked with team members to organize events and initiatives.",
  },
  {
    org: "Internshala",
    role: "Campus Ambassador",
    detail:
      "Promoted Internshala opportunities among students and supported student engagement activities.",
  },
];

function Nav() {
  const active = useActiveSection(NAV.map((n) => n.id));
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm tracking-tight">
          sandeep<span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? "bg-secondary/70 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          Hire me
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
      <div className="h-px w-full bg-transparent">
        <div className="h-px bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : EMAIL}
    </button>
  );
}

function Portfolio() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-20">
        <div aria-hidden className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-muted-foreground">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
              Open to internships · 2027 graduate
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Sandeep Kumar
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Electrical &amp; Electronics Engineering undergraduate at VIT Chennai. I build where
              hardware meets intelligence — embedded systems, machine learning and cloud-native
              pipelines that solve real engineering problems.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                View projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition-colors hover:border-foreground/30"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition-colors hover:border-foreground/30"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-14 flex items-center gap-5">
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary/40 sm:h-52 sm:w-52">
                <img
                  src={portrait.url}
                  alt="Portrait of Sandeep Kumar, Electrical and Electronics Engineering student"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-mono text-xs text-accent">Chennai, India</p>
                <p className="mt-2 max-w-sm leading-relaxed">
                  B.Tech EEE at VIT Chennai · Embedded systems, machine learning and AWS cloud.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-border py-3">
        <div className="marquee-track flex w-max gap-8 pr-8">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="font-mono text-xs text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I work across the full stack of a physical product: sensing and signal
                  conditioning, microcontroller firmware, the data pipeline, and the model or
                  dashboard that makes the data useful.
                </p>
                <p>
                  My research internship at MNIT Jaipur took me deep into deep learning for medical
                  imaging, while my coursework and projects keep me grounded in power systems,
                  control and embedded design. I like problems where a millisecond or a milliamp
                  actually matters.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SpotlightCard>
                <h3 className="text-sm font-medium">Education</h3>
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <p className="font-medium">Vellore Institute of Technology, Chennai</p>
                    <p className="text-muted-foreground">B.Tech EEE · 7.86 CGPA</p>
                    <p className="font-mono text-xs text-muted-foreground">2023 — 2027</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium">Rajasthan Public Sr. Sec. School, Sikar</p>
                    <p className="text-muted-foreground">RBSE Class XII · 94%</p>
                    <p className="font-mono text-xs text-muted-foreground">2021</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading index="02" title="Experience" />
          <Reveal>
            <SpotlightCard>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">Summer Research Intern</h3>
                <span className="font-mono text-xs text-muted-foreground">May 2026 — Jun 2026</span>
              </div>
              <p className="mt-1 text-sm text-accent">MNIT Jaipur · Medical Image Analysis</p>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Built a 3D CNN in PyTorch for PET-CT classification and distant metastasis prediction.",
                  "Prepared PET-CT datasets: preprocessing, resizing, normalization and quality validation.",
                  "Evaluated models with Accuracy, Precision, Recall, F1-Score and ROC-AUC.",
                  "Presented experimental results and technical findings to the faculty mentor.",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["PyTorch", "3D CNN", "Medical Imaging", "Python"].map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            index="03"
            title="Selected projects"
            subtitle="Hardware, cloud and machine learning systems — each built end to end and validated with measurable results."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <SpotlightCard className="h-full">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary/50 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-4 w-4 text-accent" />
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">{p.domain}</span>
                    </div>
                    <h3 className="mt-5 text-base font-medium">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading index="04" title="Technical skills" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={i * 70}>
                <SpotlightCard className="h-full">
                  <h3 className="font-mono text-xs text-accent">{s.group}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="transition-colors duration-200 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading index="05" title="Certifications" />
          <div className="card-surface divide-y divide-border overflow-hidden p-0">
            {CERTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 50}>
                <div className="group flex flex-wrap items-center justify-between gap-2 px-6 py-4 transition-colors hover:bg-secondary/40">
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading index="06" title="Extra-curricular activities" />
          <div className="grid gap-4 md:grid-cols-3">
            {ACTIVITIES.map((a, i) => (
              <Reveal key={a.role} delay={i * 70}>
                <SpotlightCard className="h-full">
                  <p className="font-mono text-xs text-accent">{a.org}</p>
                  <h3 className="mt-3 text-sm font-medium">{a.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            index="07"
            title="Let's build something"
            subtitle="Available for internships and full-time roles in embedded systems, ML engineering and cloud."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone, label: "Phone", value: PHONE, href: "tel:+918112281647" },
              { icon: Linkedin, label: "LinkedIn", value: "sandeep-kumar", href: LINKEDIN },
              { icon: Github, label: "GitHub", value: "sandeepkumar4141", href: GITHUB },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={i * 70}>
                  <a href={c.href} target="_blank" rel="noreferrer" className="block h-full">
                    <SpotlightCard className="h-full">
                      <Icon className="h-4 w-4 text-accent" />
                      <p className="mt-4 font-mono text-[11px] text-muted-foreground">{c.label}</p>
                      <p className="mt-1 truncate text-sm">{c.value}</p>
                      <ArrowUpRight className="mt-4 h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                    </SpotlightCard>
                  </a>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CopyEmail />
              <span className="text-xs text-muted-foreground">Based in Chennai, India</span>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Sandeep Kumar</span>
          <a href="#top" className="underline-sweep">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
