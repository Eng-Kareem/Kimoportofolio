import CVViewer from "./CVViewer.jsx";
import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Binary,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Fingerprint,
  Globe2,
  GraduationCap,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  Phone,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap
} from "lucide-react";

import portrait from "./assets/kareem-portrait.jpg";
import "./style.css";

// ===================================================
// PROFILE
// ===================================================

const PROFILE = {
  name: "ENG. KAREEM",
  fullName: "Karim Elkhouly",
  title: "Software Engineer / Full-Stack Developer",
  email: "kareem.ramos22@gmail.com",
  phone: "+965 98922336",
  location: "Kuwait",
  github: "https://github.com/Eng-Kareem",
  university: "Asia Pacific University",
  degree: "BSc Software Engineering"
};

// ===================================================
// PROJECT DATA
// ===================================================

const PROJECTS = [
  {
    id: "01",
    name: "MEDICORE",
    subtitle: "Healthcare Management System",
    category: "Web",
    status: "FRONTEND DEPLOYED",
    description:
      "Hospital management software built with Java Spring Boot, React and MySQL. Designed around role-based healthcare workflows and administrative operations.",
    image: "/projects/medicore.png",
    icon: Database,
    technology: ["JAVA", "SPRING BOOT", "REACT", "MYSQL"],
    live: "https://medicore-kimo19.vercel.app",
    github: "https://github.com/Eng-Kareem/MediCore",
    accent: "cyan"
  },
  {
    id: "02",
    name: "NABIL PHARMACY",
    subtitle: "Pharmacy Commerce Platform",
    category: "Web",
    status: "WEB DEPLOYMENT",
    description:
      "An online pharmacy experience featuring product browsing, cart, checkout, customer accounts and order management.",
    image: "/projects/nabil-pharmacy.png",
    icon: ShoppingBag,
    technology: ["REACT", "JAVASCRIPT", "ECOMMERCE"],
    live: "https://nabil-pharmacy.vercel.app",
    github: "https://github.com/Eng-Kareem/nabil-pharmacy",
    accent: "purple"
  },
  {
    id: "03",
    name: "PHARMACY MOBILE",
    subtitle: "Cross-Platform Mobile Application",
    category: "Mobile",
    status: "SOURCE AVAILABLE",
    description:
      "A Flutter mobile application for pharmacy customers with product information, shopping features and an interactive checkout.",
    image: "/projects/pharmacy-mobile.png",
    icon: Smartphone,
    technology: ["FLUTTER", "DART", "MOBILE"],
    live: null,
    github: "https://github.com/Eng-Kareem/nabil-pharmacy-mobile",
    accent: "blue"
  },
  {
    id: "04",
    name: "PHARAOHS WEB",
    subtitle: "University Final Year Project",
    category: "Web",
    status: "FYP DEPLOYMENT",
    description:
      "A full-stack e-commerce project with user authentication, products, shopping cart, orders, administrator features and recommendation functionality.",
    image: "/projects/pharaohs-web.png",
    icon: Layers3,
    technology: ["JAVASCRIPT", "SUPABASE", "ECOMMERCE"],
    live: "https://fyp-kimo19.vercel.app",
    github: "https://github.com/Eng-Kareem/pharaohs-web",
    accent: "amber"
  }
];

const SKILLS = [
  {
    name: "PROGRAMMING",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "C++", "C#", "Dart", "SQL"]
  },
  {
    name: "FRONTEND + MOBILE",
    icon: Monitor,
    items: ["React", "HTML5", "CSS3", "Flutter", "Responsive UI"]
  },
  {
    name: "BACKEND + DATABASE",
    icon: Database,
    items: [
      "Spring Boot",
      "Node.js",
      "Express",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Supabase"
    ]
  },
  {
    name: "TOOLS + ENGINEERING",
    icon: Workflow,
    items: [
      "Git",
      "GitHub",
      "Postman",
      "UML",
      "OOP",
      "Agile",
      "Software Testing",
      "VS Code"
    ]
  }
];

// ===================================================
// ANIMATED NEURAL NETWORK BACKGROUND
// ===================================================

function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let nodes = [];

    const pointer = {
      x: -1000,
      y: -1000
    };

    function resize() {
      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );

      const count = Math.min(
        90,
        Math.max(28, Math.floor((width * height) / 18000))
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.5
      }));
    }

    function onPointerMove(event) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }

    function onPointerLeave() {
      pointer.x = -1000;
      pointer.y = -1000;
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      const reducedMotion = motionQuery.matches;

      for (const node of nodes) {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) {
            node.vx *= -1;
          }

          if (node.y < 0 || node.y > height) {
            node.vy *= -1;
          }
        }

        const distanceToPointer = Math.hypot(
          node.x - pointer.x,
          node.y - pointer.y
        );

        const highlighted = distanceToPointer < 180;

        context.beginPath();
        context.arc(
          node.x,
          node.y,
          highlighted ? node.radius + 1.4 : node.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle = highlighted
          ? "rgba(128, 244, 255, 0.95)"
          : "rgba(93, 191, 229, 0.45)";

        context.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const distance = Math.hypot(
            a.x - b.x,
            a.y - b.y
          );

          if (distance > 145) continue;

          const pointerDistance = Math.min(
            Math.hypot(a.x - pointer.x, a.y - pointer.y),
            Math.hypot(b.x - pointer.x, b.y - pointer.y)
          );

          const active = pointerDistance < 180;

          const opacity =
            (1 - distance / 145) *
            (active ? 0.65 : 0.2);

          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);

          context.strokeStyle = active
            ? `rgba(113, 243, 255, ${opacity})`
            : `rgba(71, 146, 202, ${opacity})`;

          context.lineWidth = active ? 1 : 0.6;
          context.stroke();
        }
      }

      frame++;

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);

    function onMotionChange() {
      cancelAnimationFrame(animationId);
      draw();
    }

    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener(
        "pointermove",
        onPointerMove
      );
      document.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
      motionQuery.removeEventListener(
        "change",
        onMotionChange
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-canvas"
      aria-hidden="true"
    />
  );
}

// ===================================================
// SHARED SECTION HEADING
// ===================================================

function SectionHeading({
  number,
  eyebrow,
  title,
  highlight,
  description
}) {
  return (
    <div className="section-heading-future">
      <div className="section-heading-top">
        <span className="section-index">{number}</span>
        <span className="section-heading-line" />
        <span className="section-eyebrow">{eyebrow}</span>
      </div>

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

// ===================================================
// HOLOGRAPHIC PORTRAIT
// ===================================================

function HologramPortrait({ compact = false }) {
  const ref = useRef(null);

  function handleMove(event) {
    if (!ref.current) return;

    if (event.pointerType === "touch") return;

    const rect = ref.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    ref.current.style.setProperty(
      "--rotate-y",
      `${(x - 0.5) * 12}deg`
    );

    ref.current.style.setProperty(
      "--rotate-x",
      `${(0.5 - y) * 12}deg`
    );
  }

  function resetMove() {
    if (!ref.current) return;

    ref.current.style.setProperty("--rotate-x", "0deg");
    ref.current.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <div
      ref={ref}
      className={`holo-scene ${compact ? "holo-compact" : ""}`}
      onPointerMove={handleMove}
      onPointerLeave={resetMove}
    >
      <div className="holo-ambient" />

      <div className="holo-ring ring-one" />
      <div className="holo-ring ring-two" />
      <div className="holo-ring ring-three" />

      <div className="holo-orbit-particle particle-one" />
      <div className="holo-orbit-particle particle-two" />

      <div className="holo-main">
        <div className="holo-image-wrap">
          <img
            src={portrait}
            alt="Portrait of Eng. Kareem"
          />

          <div className="holo-scan" />
          <div className="holo-image-glare" />

          <span className="holo-corner tl" />
          <span className="holo-corner tr" />
          <span className="holo-corner bl" />
          <span className="holo-corner br" />

          <div className="holo-image-top">
            <Fingerprint size={16} />
            IDENTITY / 001
          </div>
        </div>

        <div className="holo-footer">
          <div>
            <small>PERSONNEL PROFILE</small>
            <strong>ENG. KAREEM</strong>
          </div>

          <ShieldCheck size={23} />
        </div>
      </div>

      <div className="holo-floating-tag tag-top">
        <span className="live-indicator" />
        DEVELOPER ONLINE
      </div>

      <div className="holo-floating-tag tag-bottom">
        <BrainCircuit size={15} />
        SOFTWARE ENGINEERING
      </div>

      <span className="holo-coordinate coord-one">
        X: 29.3759 / KUWAIT
      </span>

      <span className="holo-coordinate coord-two">
        NEURAL IDENTITY SYSTEM
      </span>
    </div>
  );
}

// ===================================================
// INTERACTIVE COMMAND TERMINAL
// ===================================================

const COMMANDS = {
  help: [
    "AVAILABLE COMMANDS:",
    "about       — About the developer",
    "skills      — Technical capabilities",
    "projects    — Featured projects",
    "contact     — Contact information",
    "education   — University background",
    "clear       — Clear terminal"
  ],
  about: [
    "IDENTITY: Eng. Kareem",
    "ROLE: Software Engineer / Full-Stack Developer",
    "LOCATION: Kuwait",
    "STATUS: Open to opportunities"
  ],
  skills: [
    "CORE: Java / Python / JavaScript / Dart",
    "WEB: React / Node.js / Spring Boot",
    "MOBILE: Flutter",
    "DATA: MySQL / MongoDB / PostgreSQL"
  ],
  projects: [
    "01 > MediCore",
    "02 > Nabil Pharmacy",
    "03 > Pharmacy Mobile",
    "04 > Pharaohs Web",
    "Scroll down to open the project panels."
  ],
  education: [
    "INSTITUTION: Asia Pacific University",
    "LOCATION: Malaysia",
    "PROGRAM: BSc Software Engineering",
    "ACADEMIC REQUIREMENTS: Completed"
  ],
  contact: [
    `EMAIL: ${PROFILE.email}`,
    `PHONE: ${PROFILE.phone}`,
    `GITHUB: github.com/Eng-Kareem`
  ]
};

function AITerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "NEXUS INTERFACE v1.0 INITIALIZED"
    },
    {
      type: "system",
      text: "Welcome to Eng. Kareem's digital portfolio."
    },
    {
      type: "info",
      text: "Type 'help' or select a quick command."
    }
  ]);

  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop =
        outputRef.current.scrollHeight;
    }
  }, [history]);

  function executeCommand(value) {
    const command = value.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response = COMMANDS[command] || [
      `UNKNOWN COMMAND: ${command}`,
      "Type 'help' to see available commands."
    ];

    setHistory((previous) => [
      ...previous,
      { type: "command", text: `> ${command}` },
      ...response.map((text) => ({
        type: "response",
        text
      }))
    ]);

    setInput("");

    if (["projects", "skills", "contact"].includes(command)) {
      const element = document.getElementById(command);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 450);
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    executeCommand(input);
  }

  return (
    <div className="ai-terminal">
      <div className="terminal-topbar">
        <div className="terminal-window-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="terminal-title">
          <Terminal size={13} />
          KAREEM@NEXUS:~/
        </div>

        <div className="terminal-connection">
          <span className="live-indicator" />
          LOCAL
        </div>
      </div>

      <div className="terminal-content" ref={outputRef}>
        {history.map((entry, index) => (
          <div
            key={`${entry.text}-${index}`}
            className={`terminal-line terminal-${entry.type}`}
          >
            {entry.text}
          </div>
        ))}
      </div>

      <form
        className="terminal-input-row"
        onSubmit={handleSubmit}
      >
        <ChevronRight size={18} />

        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter command..."
          aria-label="Terminal command"
          autoComplete="off"
        />

        <button type="submit" aria-label="Run command">
          <ArrowRight size={17} />
        </button>
      </form>

      <div className="terminal-quick-actions">
        {["help", "about", "skills", "projects"].map(
          (command) => (
            <button
              type="button"
              key={command}
              onClick={() => executeCommand(command)}
            >
              /{command}
            </button>
          )
        )}
      </div>
    </div>
  );
}

// ===================================================
// HERO
// ===================================================

function Hero() {
  return (
    <section id="home" className="future-hero">
      <div className="hero-radial-glow" />

      <div className="hero-inner future-container">
        <div className="hero-left">
          <div className="system-label">
            <span className="system-bracket">[</span>
            FUTURE SYSTEMS / HUMAN INTELLIGENCE
            <span className="system-bracket">]</span>
          </div>

          <div className="hero-identity-row">
            <span className="pulse-dot" />
            SYSTEM STATUS: ACTIVE
            <span className="identity-divider">/</span>
            KUWAIT
          </div>

          <h1 className="future-hero-title">
            ENGINEERING
            <br />
            THE <span>FUTURE.</span>
          </h1>

          <div className="hero-name-block">
            <span className="hero-name-line" />
            <div>
              <span className="hero-name-caption">
                THE DEVELOPER BEHIND THE SYSTEM
              </span>

              <strong>ENG. KAREEM</strong>
            </div>
          </div>

          <p className="future-hero-description">
            Software Engineer building digital experiences
            across full-stack development, mobile technology
            and intelligent systems.
          </p>

          <div className="future-hero-buttons">
            <a
              href="#projects"
              className="future-button future-button-primary"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#about"
              className="future-button future-button-outline"
            >
              ACCESS PROFILE
              <Fingerprint size={18} />
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>04</strong>
              <span>FEATURED PROJECTS</span>
            </div>

            <div>
              <strong>APU</strong>
              <span>SOFTWARE ENGINEERING</span>
            </div>

            <div>
              <strong>KW</strong>
              <span>CURRENT LOCATION</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-holo-label">
            <span>FIG.01 / DIGITAL IDENTITY</span>
            <span>RENDER ACTIVE</span>
          </div>

          <HologramPortrait />

          <div className="hero-holo-bottom">
            <span>
              <Activity size={14} />
              REAL-TIME MOTION GRAPHICS
            </span>

            <span>SYS / 001</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-strip future-container">
        <a href="#projects">
          SCROLL TO ACCESS SYSTEM
          <ArrowDown size={17} />
        </a>

        <span>DESIGNED FOR THE NEXT ERA</span>
      </div>
    </section>
  );
}

// ===================================================
// PROJECT CARD
// ===================================================

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  const destination = project.live || project.github;
  const ProjectIcon = project.icon;

  return (
    <div
      className={`future-project-card accent-${project.accent}`}
    >
      <a
        href={destination}
        target="_blank"
        rel="noopener noreferrer"
        className="future-project-main"
        aria-label={`Open ${project.name}`}
      >
        <div className="future-project-visual">
          {!imageError ? (
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="project-art-fallback">
              <ProjectIcon size={66} />
              <span>{project.name}</span>
            </div>
          )}

          <div className="future-project-visual-overlay" />

          <div className="future-project-top">
            <span>PROJECT // {project.id}</span>
            <span className="future-project-status">
              <span className="live-indicator" />
              {project.status}
            </span>
          </div>

          <div className="future-project-visual-bottom">
            <span>{project.category.toUpperCase()} SYSTEM</span>

            <div className="project-launch-icon">
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>

        <div className="future-project-info">
          <div className="project-info-head">
            <ProjectIcon size={21} />

            <span>{project.subtitle}</span>
          </div>

          <h3>{project.name}</h3>

          <p>{project.description}</p>

          <div className="future-tech-tags">
            {project.technology.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-explore">
            {project.live ? "LAUNCH WEBSITE" : "VIEW ON GITHUB"}
            <ArrowUpRight size={17} />
          </div>
        </div>
      </a>

      {project.live && (
        <a
          className="project-code-link"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          SOURCE CODE
          <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  );
}

// ===================================================
// PROJECTS
// ===================================================

function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = PROJECTS.filter(
    (project) =>
      filter === "All" || project.category === filter
  );

  return (
    <section
      className="future-section projects-section"
      id="projects"
    >
      <div className="future-container">
        <SectionHeading
          number="01"
          eyebrow="DEPLOYED SYSTEMS"
          title="SELECTED"
          highlight="PROJECTS"
          description="From healthcare applications to commerce platforms and mobile experiences. Explore the software behind the interface."
        />

        <div className="projects-toolbar">
          <div className="project-filters">
            {["All", "Web", "Mobile"].map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item === "All"
                  ? "ALL SYSTEMS"
                  : `${item.toUpperCase()} SYSTEMS`}
              </button>
            ))}
          </div>

          <div className="projects-count">
            SHOWING {String(visible.length).padStart(2, "0")}
            {" / "}
            {String(PROJECTS.length).padStart(2, "0")}
          </div>
        </div>

        <div className="future-project-grid">
          {visible.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
            />
          ))}
        </div>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="all-repos-link"
        >
          <Github size={19} />
          ACCESS ALL REPOSITORIES
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

// ===================================================
// ABOUT + TERMINAL
// ===================================================

function About() {
  return (
    <section
      className="future-section about-section-future"
      id="about"
    >
      <div className="future-container">
        <SectionHeading
          number="02"
          eyebrow="PERSONNEL IDENTIFICATION"
          title="THE HUMAN"
          highlight="BEHIND THE CODE"
          description="A developer interested in creating reliable, useful software and exploring the next generation of digital systems."
        />

        <div className="about-future-grid">
          <div className="about-identity-visual">
            <HologramPortrait compact />
          </div>

          <div className="about-future-content">
            <div className="identity-card-header">
              <span className="label-cyan">
                <Fingerprint size={16} />
                IDENTITY VERIFIED
              </span>

              <span>PERSONNEL_001</span>
            </div>

            <h3>{PROFILE.fullName}</h3>

            <p className="about-role">
              {PROFILE.title}
            </p>

            <p>
              I'm a Software Engineering graduate from
              Asia Pacific University in Malaysia, currently
              based in Kuwait. My work combines application
              development, backend logic, databases and mobile
              technology.
            </p>

            <p>
              I completed an IT internship at Hadi Hospital,
              and I've developed projects involving hospital
              management, e-commerce, mobile applications,
              document processing and local AI systems.
            </p>

            <div className="identity-facts">
              <div>
                <MapPin size={17} />
                <span>LOCATION</span>
                <strong>KUWAIT</strong>
              </div>

              <div>
                <GraduationCap size={17} />
                <span>UNIVERSITY</span>
                <strong>APU, MALAYSIA</strong>
              </div>

              <div>
                <BriefcaseBusiness size={17} />
                <span>EXPERIENCE</span>
                <strong>HEALTHCARE IT</strong>
              </div>

              <div>
                <Globe2 size={17} />
                <span>OPPORTUNITIES</span>
                <strong>LOCAL / REMOTE</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-section-heading">
          <div>
            <span className="label-cyan">
              <Terminal size={16} />
              INTERACTIVE INTERFACE
            </span>
            <h3>EXPLORE MY PROFILE VIA TERMINAL</h3>
          </div>

          <span>USER INPUT ENABLED</span>
        </div>

        <AITerminal />
        <CVViewer />
      </div>
    </section>
  );
}

// ===================================================
// EDUCATION + EXPERIENCE
// ===================================================

function Journey() {
  return (
    <section
      className="future-section journey-section"
      id="experience"
    >
      <div className="future-container">
        <SectionHeading
          number="03"
          eyebrow="CAREER TIMELINE"
          title="MY"
          highlight="JOURNEY"
          description="Education, real-world experience and the foundations of my development career."
        />

        <div className="future-timeline">
          <div className="timeline-entry" id="education">
            <div className="timeline-marker">
              <GraduationCap size={23} />
            </div>

            <div className="timeline-entry-card">
              <div className="timeline-entry-top">
                <span className="timeline-type">
                  EDUCATION / 001
                </span>

                <span className="timeline-tag">
                  REQUIREMENTS COMPLETED
                </span>
              </div>

              <h3>BSc SOFTWARE ENGINEERING</h3>

              <h4>
                Asia Pacific University of Technology
                & Innovation
              </h4>

              <div className="timeline-location">
                <MapPin size={15} />
                MALAYSIA
              </div>

              <p>
                Studied software development,
                object-oriented programming,
                algorithms, database systems,
                software architecture, testing
                and software project management.
              </p>

              <p className="timeline-note">
                Academic requirements completed.
                Official certificate expected February 2027.
              </p>
            </div>
          </div>

          <div className="timeline-entry">
            <div className="timeline-marker">
              <BriefcaseBusiness size={23} />
            </div>

            <div className="timeline-entry-card">
              <div className="timeline-entry-top">
                <span className="timeline-type">
                  EXPERIENCE / 002
                </span>

                <span className="timeline-tag">
                  SEP 2025 — JAN 2026
                </span>
              </div>

              <h3>IT DEPARTMENT INTERN</h3>

              <h4>Hadi Hospital</h4>

              <div className="timeline-location">
                <MapPin size={15} />
                KUWAIT
              </div>

              <p>
                Gained experience in a professional
                healthcare IT environment, assisting
                with technical work and contributing
                to hospital-focused digital projects.
              </p>

              <div className="timeline-points">
                <span>
                  <Check size={15} />
                  IT support and troubleshooting
                </span>

                <span>
                  <Check size={15} />
                  Patient meal-ordering project
                </span>

                <span>
                  <Check size={15} />
                  Hospital website improvements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================================================
// SKILLS
// ===================================================

function Skills() {
  return (
    <section
      className="future-section skills-section-future"
      id="skills"
    >
      <div className="future-container">
        <SectionHeading
          number="04"
          eyebrow="TECHNICAL CAPABILITIES"
          title="MY"
          highlight="TECH STACK"
          description="Languages, frameworks and software engineering tools I've worked with through projects and study."
        />

        <div className="future-skills-grid">
          {SKILLS.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                className="future-skill-card"
                key={group.name}
              >
                <div className="skill-card-top">
                  <Icon size={28} />
                  <span>
                    MODULE_0{index + 1}
                  </span>
                </div>

                <h3>{group.name}</h3>

                <div className="skill-card-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="skill-card-bottom">
                  <span>MODULE LOADED</span>
                  <span className="skill-signal">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="research-strip">
          <div className="research-strip-icon">
            <BrainCircuit size={28} />
          </div>

          <div>
            <span>EXPLORATION / AI SYSTEMS</span>

            <h3>JARVIS AI ASSISTANT</h3>

            <p>
              Exploring offline language models,
              speech recognition and local desktop
              automation with Python.
            </p>
          </div>

          <a
            href="https://github.com/Eng-Kareem/JARVIS-AI-Assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="future-button future-button-outline"
          >
            VIEW PROJECT
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ===================================================
// CONTACT
// ===================================================

function Contact() {
  const contactCards = [
    {
      label: "EMAIL CHANNEL",
      value: PROFILE.email,
      action: "SEND EMAIL",
      href: `mailto:${PROFILE.email}`,
      icon: Mail
    },
    {
      label: "PHONE CHANNEL",
      value: PROFILE.phone,
      action: "CALL NOW",
      href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
      icon: Phone
    },
    {
      label: "DEVELOPER NETWORK",
      value: "github.com/Eng-Kareem",
      action: "OPEN GITHUB",
      href: PROFILE.github,
      icon: Github
    }
  ];

  return (
    <section
      className="future-section contact-section-future"
      id="contact"
    >
      <div className="future-container">
        <div className="contact-intro">
          <span className="contact-transmission">
            <span className="live-indicator" />
            COMMUNICATION CHANNEL OPEN
          </span>

          <h2>
            LET'S BUILD
            <br />
            <span>THE NEXT BIG THING.</span>
          </h2>

          <p>
            Open to software engineering opportunities,
            remote collaborations and interesting
            development projects.
          </p>
        </div>

        <div className="future-contact-grid">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                href={card.href}
                key={card.label}
                className="future-contact-card"
                target={
                  card.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className="contact-card-icon">
                  <Icon size={26} />
                </div>

                <span className="contact-card-label">
                  {card.label}
                </span>

                <strong>{card.value}</strong>

                <span className="contact-card-action">
                  {card.action}
                  <ArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="contact-final-line">
          <span>
            <MapPin size={15} />
            BASED IN KUWAIT
          </span>

          <span>
            <Globe2 size={15} />
            AVAILABLE FOR LOCAL + REMOTE WORK
          </span>
        </div>
      </div>
    </section>
  );
}

// ===================================================
// NAVIGATION
// ===================================================

const NAV_ITEMS = [
  ["HOME", "home"],
  ["PROJECTS", "projects"],
  ["ABOUT", "about"],
  ["EXPERIENCE", "experience"],
  ["SKILLS", "skills"],
  ["CONTACT", "contact"]
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`future-header ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="future-container header-inner">
        <a
          href="#home"
          className="future-brand"
          onClick={() => setMenuOpen(false)}
        >
          <div className="brand-symbol">
            <Cpu size={23} />
          </div>

          <div className="brand-words">
            <strong>KAREEM<span>.AI</span></strong>
            <small>SOFTWARE ENGINEER</small>
          </div>
        </a>

        <nav
          className={`future-nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${PROFILE.email}`}
          className="header-contact"
        >
          <span className="live-indicator" />
          LET'S TALK
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="future-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

// ===================================================
// FOOTER
// ===================================================

function Footer() {
  return (
    <footer className="future-footer">
      <div className="future-container footer-inner">
        <div>
          <strong>KAREEM.AI</strong>
          <span>ENGINEERING WHAT'S NEXT.</span>
        </div>

        <p>
          © {new Date().getFullYear()} ENG. KAREEM
        </p>

        <a href="#home">
          BACK TO TOP
          <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}

// ===================================================
// APPLICATION
// ===================================================

export default function App() {
  return (
    <div className="future-app">
      <NeuralBackground />

      <div className="global-grid-overlay" />

      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
