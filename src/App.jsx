import { useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  ChevronDown, Code2, Database, ExternalLink, Github, Globe2,
  GraduationCap, Layers3, Mail, MapPin, Menu, Moon, Smartphone,
  Sparkles, Terminal, X
} from 'lucide-react';

const github = 'https://github.com/Eng-Kareem';

const projects = [
  {
    number: '01',
    type: 'FULL-STACK PLATFORM',
    name: 'MediCore',
    description: 'A role-based hospital management platform with dedicated workspaces for administrators, doctors and receptionists. Patient records, scheduling, check-in workflows and reporting.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    link: github + '/MediCore',
    featured: true,
    art: 'medicore',
    icon: Layers3,
    label: 'Healthcare operations'
  },
  {
    number: '02',
    type: 'WEB APPLICATION',
    name: 'Nabil Pharmacy',
    description: 'A pharmacy commerce experience with product discovery, order flows and customer-facing interfaces, developed alongside a mobile companion app.',
    tags: ['React', 'JavaScript', 'CSS', 'Full stack'],
    link: github + '/nabil-pharmacy',
    featured: true,
    art: 'pharmacy',
    icon: Smartphone,
    label: 'Digital commerce'
  },
  {
    number: '03',
    type: 'MOBILE APPLICATION',
    name: 'Nabil Pharmacy Mobile',
    description: 'A cross-platform Flutter application focused on a smooth pharmacy shopping experience, checkout flow and account features.',
    tags: ['Flutter', 'Dart', 'Mobile UI'],
    link: github + '/nabil-pharmacy-mobile',
    featured: false,
    art: 'mobile',
    icon: Smartphone,
    label: 'Mobile development'
  },
  {
    number: '04',
    type: 'WEB EXPERIENCE',
    name: 'Shoeweb',
    description: 'An e-commerce-oriented web project exploring product presentation, shopping interfaces and front-end design.',
    tags: ['Web development', 'UI Design'],
    link: github + '/Shoeweb',
    featured: false,
    art: 'shoes',
    icon: Globe2,
    label: 'E-commerce'
  }
];

const capabilities = [
  { num: '01', title: 'Frontend development', text: 'Thoughtful, responsive interfaces built for real people.', skills: ['React', 'JavaScript', 'HTML & CSS', 'TypeScript'] },
  { num: '02', title: 'Backend & databases', text: 'APIs, business logic and data-driven application architecture.', skills: ['Java', 'Spring Boot', 'Node.js', 'MySQL', 'MongoDB'] },
  { num: '03', title: 'Mobile applications', text: 'Cross-platform experiences from idea to working prototype.', skills: ['Flutter', 'Dart', 'Supabase'] }
];

function ProjectArt({ project }) {
  const Icon = project.icon;
  return (
    <div className={`project-art ${project.art}`} aria-hidden="true">
      <div className="art-orb art-orb-one" />
      <div className="art-orb art-orb-two" />
      <div className="art-window">
        <div className="art-window-top"><span /><span /><span /></div>
        <div className="art-window-body">
          <div className="art-rail" />
          <div className="art-screen">
            <div className="art-screen-head"><Icon size={20} /><span /></div>
            <div className="art-screen-block" />
            <div className="art-screen-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="art-caption">{project.label}</span>
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  function closeMenu() { setMenuOpen(false); }
  async function copyGithub() {
    try {
      await navigator.clipboard.writeText(github);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.open(github, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Kareem's portfolio home">
          <span className="brand-symbol">K<span>.</span></span><span className="brand-name">KAREEM<span> / DEV</span></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Expertise</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="header-github" href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
          <a className="button button-outline header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(o => !o)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section
          className="hero section-wrap photo-hero"
          id="home"
          ref={heroRef}
          onPointerMove={(event) => {
            if (event.pointerType === 'touch' || !heroRef.current) return;
            const bounds = heroRef.current.getBoundingClientRect();
            heroRef.current.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
            heroRef.current.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
            heroRef.current.classList.add('photo-hero-active');
          }}
          onPointerLeave={() => heroRef.current?.classList.remove('photo-hero-active')}
        >
          <div className="photo-blurred" aria-hidden="true" />
          <div className="photo-sharp" aria-hidden="true" />
          <div className="photo-overlay" aria-hidden="true" />
          <div className="photo-cursor" aria-hidden="true" />
          <div className="hero-content">
            <div className="availability"><span className="availability-dot" /> OPEN TO SOFTWARE OPPORTUNITIES <span className="availability-sep">/</span> KUWAIT & REMOTE</div>
            <div className="hero-eyebrow">HELLO, I'M KAREEM ELKHOLY <span className="eyebrow-star">✳</span></div>
            <h1>I build software<br />with <span className="gradient-words">purpose<span className="headline-dot">.</span></span></h1>
            <p className="hero-description">Software Engineering graduate turning ideas into useful products — from full-stack web applications to mobile experiences and backend systems.</p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">Explore my work <ArrowUpRight size={19} /></a>
              <a href="#about" className="button button-quiet">More about me <ArrowDownRight size={18} /></a>
            </div>
            <div className="hero-footnote"><span>BASED IN KUWAIT</span><span className="hairline" /><span>BUILDING FOR EVERYWHERE</span></div>
          </div>
          <a href="#work" className="scroll-note">SCROLL TO EXPLORE <ChevronDown size={15} /></a>
        </section>

        <div className="ticker" aria-label="Technology interests">
          <div className="ticker-content"><span>WEB DEVELOPMENT</span><i>✳</i><span>MOBILE APPLICATIONS</span><i>✳</i><span>BACKEND SYSTEMS</span><i>✳</i><span>CREATIVE PROBLEM SOLVING</span><i>✳</i><span>WEB DEVELOPMENT</span><i>✳</i></div>
        </div>

        <section className="work section-wrap section-space" id="work">
          <div className="section-heading">
            <div><div className="section-kicker"><span>01 / SELECTED WORK</span><span className="kicker-line" /></div><h2>Ideas turned into <span>real projects.</span></h2></div>
            <p>A selection of platforms, applications and experiments that reflect how I think, design and build.</p>
          </div>
          <div className="project-grid">
            {projects.slice(0, showAll ? projects.length : 2).map(project => (
              <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.name}>
                <div className="project-image"><ProjectArt project={project} /><div className="project-open"><ArrowUpRight size={23} /></div></div>
                <div className="project-meta"><span>{project.number} / {project.type}</span><ExternalLink size={15} /></div>
                <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight size={22} /></div>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
          <div className="more-projects">
            <button className="button button-outline" onClick={() => setShowAll(v => !v)}>{showAll ? 'Show featured projects' : 'See more projects'} <ArrowRight size={18} /></button>
            <a href={github} target="_blank" rel="noreferrer">Browse GitHub <Github size={18} /></a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid section-space">
            <div className="about-left"><div className="section-kicker"><span>02 / THE PERSON</span><span className="kicker-line" /></div><h2>Developer by craft.<br /><span>Curious by nature.</span></h2><div className="about-monogram">K<span>✳</span></div></div>
            <div className="about-right"><p className="about-lead">I'm Kareem, a Software Engineering graduate from Asia Pacific University in Malaysia, currently based in Kuwait.</p><p>I enjoy the whole process of creating software: understanding a problem, sketching a solution, building the interface, connecting the backend and making the experience feel right.</p><p>My work spans hospital management systems, e-commerce platforms and mobile apps. I'm continuously sharpening my engineering skills and looking for opportunities to contribute to meaningful products.</p>
              <div className="about-facts">
                <div><GraduationCap size={21} /><span><small>EDUCATION</small>Software Engineering, APU</span></div>
                <div><MapPin size={21} /><span><small>LOCATION</small>Kuwait · Open to remote work</span></div>
                <div><BriefcaseBusiness size={21} /><span><small>EXPERIENCE</small>IT internship · Hadi Hospital</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-space" id="skills">
          <div className="section-heading">
            <div><div className="section-kicker"><span>03 / WHAT I DO</span><span className="kicker-line" /></div><h2>Versatile skills.<br /><span>One builder's mindset.</span></h2></div>
            <p>I work across the stack, bringing design awareness and practical engineering together.</p>
          </div>
          <div className="skills-grid">{capabilities.map(c => <article className="skill-card" key={c.num}><div className="skill-card-top"><span>{c.num} / CAPABILITY</span><ArrowUpRight size={21} /></div><div className="skill-symbol">{c.num === '01' ? <Code2 size={30} /> : c.num === '02' ? <Database size={30} /> : <Smartphone size={30} />}</div><h3>{c.title}</h3><p>{c.text}</p><div className="tag-row">{c.skills.map(s => <span key={s}>{s}</span>)}</div></article>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-content"><div className="section-kicker"><span>04 / LET'S CONNECT</span><span className="kicker-line" /></div><div className="contact-spark"><Sparkles size={31} /></div><h2>Have an idea?<br /><span>Let's build something.</span></h2><p>I'm interested in software engineering roles, freelance projects and conversations about good ideas.</p><div className="contact-actions"><a className="button button-primary" href={github} target="_blank" rel="noreferrer">Connect on GitHub <Github size={18} /></a><button className="button button-outline" onClick={copyGithub}>{copied ? 'GitHub link copied' : 'Copy GitHub profile'} {copied ? <Check size={18} /> : <ArrowUpRight size={18} />}</button></div></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand" href="#home"><span className="brand-symbol">K<span>.</span></span><span className="brand-name">KAREEM<span> / DEV</span></span></a><div>Designed & built with care. © {new Date().getFullYear()} Kareem Elkholy.</div><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}
export default App;
