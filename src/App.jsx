import { Suspense, useEffect, useRef, useState } from "react";
import { profile, skills, projects, journey, certifications, languages } from "./data";
import HeroCanvas from "./three/HeroCanvas";

const SECTION_IDS = ["projects", "skills", "journey", "about", "contact"];

/* Thin progress bar that fills as you scroll the page. */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight || 1;
      setP(Math.min(1, Math.max(0, h.scrollTop / denom)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} />;
}

/* Highlights the nav link for whichever section is centered in the viewport. */
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

/* Fades + lifts its children into view the first time they're scrolled to. */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Header({ active }) {
  return (
    <header id="home" className="hero">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
      <nav className="nav">
        <span className="brand">{profile.name}</span>
        <div className="nav-links">
          {SECTION_IDS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>
      <div className="hero-content">
        <p className="eyebrow">Hello, I'm</p>
        <h1>{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <p className="tagline">{profile.tagline}</p>
        <div className="cta">
          <a className="btn primary" href="#projects">
            View my work
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#projects" aria-label="Scroll to projects">
        <span></span>
      </a>
    </header>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2>Projects</h2>
      </Reveal>
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <article className="project-card">
              <div className="project-head">
                <h3>{p.name}</h3>
                {p.year && <span className="year">{p.year}</span>}
              </div>
              <p className="blurb">{p.blurb}</p>
              <ul className="highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section alt">
      <Reveal>
        <h2>Skills</h2>
      </Reveal>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 100}>
            <div className="skill-group">
              <h4>{s.group}</h4>
              <div className="tags">
                {s.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section">
      <Reveal>
        <h2>Journey</h2>
      </Reveal>
      <div className="timeline">
        {journey.map((j, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className={`tl-item ${j.kind}`}>
              <span className="tl-dot" />
              <div className="tl-body">
                <span className="tl-when">{j.when}</span>
                <h3>{j.title}</h3>
                <p className="tl-org">{j.org}</p>
                {j.detail && <p className="tl-detail">{j.detail}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2>About</h2>
        <p className="about-text">{profile.about}</p>
        <div className="about-facts">
          <div className="fact">
            <h4>📍 Location</h4>
            <p>{profile.location}</p>
          </div>
          <div className="fact">
            <h4>🏅 Certification</h4>
            <p>
              {certifications.map((c) => `${c.name} — ${c.issuer}, ${c.year}`).join(" · ")}
            </p>
          </div>
          <div className="fact">
            <h4>🗣 Languages</h4>
            <p>{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const { email, links } = profile;
  return (
    <section id="contact" className="section alt">
      <Reveal>
        <h2>Get in touch</h2>
        <p>I'm open to opportunities — feel free to reach out.</p>
        <div className="contact-links">
          <a href={`mailto:${email}`}>✉️ {email}</a>
          {profile.phone && <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>📞 {profile.phone}</a>}
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {links.portfolio && (
            <a href={links.portfolio} target="_blank" rel="noreferrer">
              Live site
            </a>
          )}
          {links.resume && (
            <a href={links.resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <div className="app">
      <ScrollProgress />
      <Header active={active} />
      <main>
        <Projects />
        <Skills />
        <Journey />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React + Three.js.
      </footer>
    </div>
  );
}
