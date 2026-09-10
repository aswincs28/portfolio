import React, { useEffect, useState } from "react";
import profilePhoto from "./assets/profile.png";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Database,
  Globe2,
  Layers3,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "BrailleBridge",
    label: "Assistive AI · Deep Learning",
    description:
      "An end-to-end Optical Braille Recognition system that recognizes Braille characters and words using CRNN, BiLSTM and CTC decoding, with AI-based correction, confidence scoring and real-time text-to-speech.",
    stack: [
      "FastAPI",
      "React",
      "TensorFlow",
      "CRNN",
      "BiLSTM",
      "CTC",
    ],
    date: "March 2026",
  },
  {
    number: "02",
    title: "ACTIVEZONE",
    label: "Full-Stack Web Application",
    description:
      "A turf slot booking platform built with Django, providing real-time availability, secure authentication and booking confirmation.",
    stack: [
      "Django",
      "Python",
      "SQLite3",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    date: "March 2025",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C", "SQL"],
  },
  {
    icon: Layers3,
    title: "Frameworks & Libraries",
    items: ["Django", "FastAPI"],
  },
  {
    icon: Globe2,
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Developer Tools",
    items: ["Visual Studio Code", "Git", "GitHub"],
  },
];

const certifications = [
  {
    title: "Cybersecurity Tools and Technologies",
    issuer: "Microsoft × Coursera",
    date: "Dec 2025",
    href: "https://coursera.org/verify/LFEB9TJBCW71",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL · IIT Madras",
    date: "Jul–Aug 2025",
    href: "https://drive.google.com/file/d/1qnMoJ9M2FLYuXWZdOzY1V6QYUcN8qYif/view?usp=sharing",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google × Coursera",
    date: "Nov 2025",
    href: "https://coursera.org/verify/CGPO0VOOEOA8",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "projects",
      "skills",
      "training",
      "education",
      "certifications",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="noise"></div>

      {/* ================= NAVBAR ================= */}

      <header className="nav">
        <button
          className="brand"
          onClick={() => goToSection("home")}
        >
          <span>ACS</span>
          <small>DEVELOPER</small>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "about",
            "projects",
            "skills",
            "training",
            "education",
            "contact",
          ].map((id) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => goToSection(id)}
            >
              {id}
            </button>
          ))}
        </nav>

        <a
          className="nav-cta"
          href="mailto:aswinchikkucs2004@gmail.com"
        >
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero section">
          <div className="hero-grid">

            <div className="hero-copy reveal">

              <div className="eyebrow">
                <span className="pulse"></span>
                Available for opportunities
              </div>

              <p className="kicker">
                COMPUTER SCIENCE · FULL-STACK · AI
              </p>

              <h1>
                ASWIN
                <br />
                <em>C S</em>
              </h1>

              <p className="hero-text">
                I build scalable, production-ready software
                with a strong focus on{" "}
                <strong>
                  performance, usability and meaningful
                  experiences.
                </strong>
              </p>

              <div className="hero-actions">

                <button
                  className="primary-btn"
                  onClick={() => goToSection("projects")}
                >
                  Explore my work
                  <ChevronRight size={18} />
                </button>

                <a
                  className="ghost-btn"
                  href="mailto:aswinchikkucs2004@gmail.com"
                >
                  <Mail size={17} />
                  Get in touch
                </a>

              </div>

              {/* SOCIAL LINKS */}

              <div className="social-row">

                <a
                  href="https://www.linkedin.com/in/aswincs28/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/aswincs28"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  GitHub
                </a>

              </div>

            </div>

            {/* ================= HERO VISUAL ================= */}

            <div className="hero-art reveal">

              {/* PROFILE PHOTO */}

              <div className="profile-photo-wrap">

                <div className="profile-photo-frame">

                  <img
                     src={profilePhoto}
                     alt="Aswin C S"
                     className="profile-photo"
                   />

                </div>

                <span className="photo-label">
                  ASWIN C S · CSE
                </span>

              </div>

              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>

              {/* CODE CARD */}

              <div className="code-card">

                <div className="code-top">

                  <span></span>
                  <span></span>
                  <span></span>

                  <b>aswin.py</b>

                </div>

                <pre>
                  <code>{`class Developer:
    focus = [
      "clean architecture",
      "AI + accessibility",
      "real-world products"
    ]

    def build(self):
        return "ship → learn → improve"`}</code>
                </pre>

              </div>

              <div className="floating-tag tag-one">
                Python
              </div>

              <div className="floating-tag tag-two">
                FastAPI
              </div>

              <div className="floating-tag tag-three">
                React
              </div>

            </div>

          </div>

          <div className="scroll-cue">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about">

          <div className="section-label">
            01 / ABOUT
          </div>

          <div className="about-grid">

            <div>

              <p className="display-text">
                A curious builder who enjoys turning{" "}
                <span>
                  ideas into working software.
                </span>
              </p>

            </div>

            <div className="about-copy">

              <p>
                Computer Science graduate passionate about
                building scalable, production-ready software.
                Skilled in full-stack development and rapid
                prototyping, delivering maintainable solutions
                under tight deadlines.
              </p>

              <p>
                Adaptable and collaborative, with a strong
                problem-solving mindset and the ability to
                quickly learn and adopt new technologies.
              </p>

              <div className="stats">

                <div>
                  <strong>8.8</strong>
                  <span>B.Tech CGPA</span>
                </div>

                <div>
                  <strong>96.33%</strong>
                  <span>Higher Secondary</span>
                </div>

                <div>
                  <strong>98.90%</strong>
                  <span>SSLC</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects">

          <div className="section-head">

            <div>

              <div className="section-label">
                02 / SELECTED WORK
              </div>

              <h2>
                Things I've built.
              </h2>

            </div>

            <span className="section-note">
              FROM CONCEPT → WORKING PRODUCT
            </span>

          </div>

          <div className="project-list">

            {projects.map((project) => (

              <article
                className="project"
                key={project.title}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">

                  <div className="project-meta">

                    <span>
                      {project.label}
                    </span>

                    <time>
                      {project.date}
                    </time>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="chips">

                    {project.stack.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="project-arrow">
                  <ArrowUpRight size={28} />
                </div>

              </article>

            ))}

          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills">

          <div className="section-label">
            03 / TOOLKIT
          </div>

          <div className="skills-intro">

            <h2>
              Built on strong
              <br />
              <span>fundamentals.</span>
            </h2>

            <p>
              Tools are only useful when the fundamentals
              are solid. Here's the stack I use to turn ideas
              into reliable applications.
            </p>

          </div>

          <div className="skill-grid">

            {skills.map(
              ({ icon: Icon, title, items }) => (

                <div
                  className="skill-card"
                  key={title}
                >

                  <Icon size={23} />

                  <h3>
                    {title}
                  </h3>

                  <div>

                    {items.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              )
            )}

          </div>

          <div className="soft-skills">

            <span>Communication</span>
            <span>Leadership</span>
            <span>Problem-Solving</span>
            <span>Collaboration</span>
            <span>Adaptability</span>

          </div>

        </section>

        {/* ================= TRAINING ================= */}

        <section id="training" className="section training">

          <div className="section-label">
            04 / TRAINING
          </div>

          <div className="training-grid">

            <div className="training-heading">

              <h2>
                Python Full Stack
                <br />
                <span>Development.</span>
              </h2>

              <p>
                Practical industry-oriented training focused
                on Python programming, databases and web
                development.
              </p>

            </div>

            <div className="training-card">

              <div className="training-top">

                <div>
                  <p className="training-company">
                    QSPIDERS
                  </p>

                  <h3>
                    Python Full Stack Development Training
                  </h3>
                </div>

                <span className="training-date">
                  September 2026
                </span>

              </div>

              <div className="training-points">

                <div>
                  <span className="point">01</span>
                  <p>
                    Developed a strong foundation in
                    <strong> Python</strong>, including core
                    programming concepts and
                    <strong> Object-Oriented Programming</strong>.
                  </p>
                </div>

                <div>
                  <span className="point">02</span>
                  <p>
                    Gained practical knowledge of
                    <strong> SQL and database concepts</strong>.
                  </p>
                </div>

                <div>
                  <span className="point">03</span>
                  <p>
                    Learned web development using
                    <strong> HTML, CSS and JavaScript</strong>.
                  </p>
                </div>

              </div>

              <div className="training-stack">

                <span>Python</span>
                <span>OOP</span>
                <span>SQL</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>

              </div>

            </div>

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section id="education" className="section education">

          <div className="section-label">
            05 / EDUCATION
          </div>

          <div className="journey-grid">

            <div>

              <h2>
                Education &
                <br />
                <span>learning.</span>
              </h2>

              <p>
                A strong academic foundation combined with
                practical software development experience.
              </p>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="year">
                  2022 — 2026
                </div>

                <div>
                  <h3>
                    B.Tech in Computer Science &
                    Engineering
                  </h3>

                  <p>
                    College of Engineering Pathanapuram
                  </p>

                  <b>
                    CGPA: 8.8
                  </b>
                </div>

              </div>

              <div className="timeline-item">

                <div className="year">
                  2020 — 2022
                </div>

                <div>
                  <h3>
                    Higher Secondary Education
                    · Biology Science
                  </h3>

                  <p>
                    Govt. Model Higher Secondary School,
                    Kulasekharapuram
                  </p>

                  <b>
                    Percentage: 96.33%
                  </b>
                </div>

              </div>

              <div className="timeline-item">

                <div className="year">
                  2020
                </div>

                <div>
                  <h3>
                    Secondary School Education · SSLC
                  </h3>

                  <p>
                    Govt. Model Higher Secondary School,
                    Kulasekharapuram
                  </p>

                  <b>
                    Percentage: 98.90%
                  </b>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}

        <section
          id="certifications"
          className="section certifications"
        >

          <div className="section-label">
            06 / CERTIFICATIONS
          </div>

          <div className="cert-list">

            {certifications.map((cert, index) => (

              <a
                className="cert"
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                key={cert.title}
              >

                <span className="cert-index">
                  0{index + 1}
                </span>

                <div>

                  <h3>
                    {cert.title}
                  </h3>

                  <p>
                    {cert.issuer}
                  </p>

                </div>

                <time>
                  {cert.date}
                </time>

                <ExternalLink size={17} />

              </a>

            ))}

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="section contact">

          <div className="contact-card">

            <div className="section-label">
              07 / CONTACT
            </div>

            <h2>
              Let's build something
              <br />
              <em>worth shipping.</em>
            </h2>

            <p>
              Have an opportunity, idea or project in mind?
              I'd love to hear about it.
            </p>

            <a
              className="contact-email"
              href="mailto:aswinchikkucs2004@gmail.com"
            >
              aswinchikkucs2004@gmail.com
              <ArrowUpRight />
            </a>

            <div className="contact-details">

              <span>
                <MapPin size={17} />
                Kerala, India
              </span>

              <a href="tel:+917736011978">
                <Phone size={17} />
                +91 77360 11978
              </a>

              <a
                href="https://www.linkedin.com/in/aswincs28/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                href="https://github.com/aswincs28"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © 2026 ASWIN C S
        </span>

        <span>
          DESIGNED & BUILT WITH PURPOSE
        </span>

        <button
          onClick={() => goToSection("home")}
        >
          BACK TO TOP ↑
        </button>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);