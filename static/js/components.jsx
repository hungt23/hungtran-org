/* global React */
const { useState, useEffect } = React;

// ===== Header =====
function Header({ active, onNavigate }) {
  const links = [
    { id: "intro", label: "Intro" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "consulting", label: "Consulting" },
    { id: "writing", label: "Writing" },
    { id: "reading", label: "Reading" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="#intro" onClick={(e) => { e.preventDefault(); onNavigate("intro"); }}>
          <img src="/images/logomark_light.svg" className="brand-mark" alt="" />
          <span className="brand-word">Hung Tran</span>
        </a>
        <nav className="site-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={"nav-link" + (active === l.id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ===== Hero =====
function Hero({ mode }) {
  if (mode === "split") {
    return (
      <div className="hero hero-split">
        <div className="hero-left">
          <img src="/images/ocean_banner.jpeg" alt="" />
        </div>
        <div className="hero-right fade-in">
          <div className="hero-eyebrow">Ocean Finance · Climate Risk</div>
          <h1 className="hero-title">Hung Tran</h1>
          <p className="hero-lead">Product manager at CDP. Working on data products for climate disclosure, coastal resilience, and the communities most exposed to both.</p>
        </div>
      </div>
    );
  }
  if (mode === "text") {
    return (
      <div className="hero hero-text">
        <div className="hero-inner fade-in">
          <div className="hero-eyebrow">Personal site · Hung Tran</div>
          <h1 className="hero-title">Notes From a Coastal Research Desk.</h1>
          <p className="hero-lead">Product work on climate disclosure at CDP. Projects, writing, and consulting on ocean finance, flood risk, and the communities first in line.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="hero hero-banner">
      <img src="/images/ocean_banner.jpeg" alt="Ocean" className="hero-img" />
      <div className="hero-scrim" />
      <div className="hero-text fade-in">
        <div className="hero-eyebrow">Hung Tran · Ocean Finance & Climate Risk</div>
        <h1 className="hero-title">A Coastal Research Desk, Online.</h1>
      </div>
    </div>
  );
}

// ===== Section header =====
function SectionHead({ title, meta }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {meta && <span className="section-meta">{meta}</span>}
    </div>
  );
}

// ===== Intro =====
function IntroSection() {
  return (
    <section data-section id="intro" data-screen-label="Intro" className="section section-prose">
      <SectionHead title="Howdy!" />
      <div className="intro-grid">
        <img className="profile-pic" src="/images/profile.jpg" alt="Hung Tran" />
        <div className="intro-copy">
          <p className="lead">Hi! Welcome to my personal hub — portfolio, writing, and a place to reach me.</p>
          <p>My name is Hung Tran. I'm a graduate of the MBA in Sustainability program at Bard and currently a Product Manager at CDP. Before CDP and Bard, I studied Biology and Environmental Studies at Boston College.</p>
          <p>My main interests lie in <strong>sustainability</strong>, <strong>coastal communities</strong>, and <strong>data analysis</strong>. Coastal communities are among the first impacted by climate change, so I hope to help out in any way I can.</p>
        </div>
      </div>
      <div className="quick-facts">
        {QUICK_FACTS.map((f) => (
          <div className="quick-fact" key={f.label}>
            <div className="quick-fact-label">{f.label}</div>
            <div className="quick-fact-value">{f.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Projects =====
function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <article className={"project-card" + (isOpen ? " is-open" : "")}>
      <div className="project-card-body" onClick={onToggle}>
        <div className="project-card-head">
          <div className="project-eyebrow">{project.eyebrow}</div>
          <div className="project-year">{project.year}</div>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-lead">{project.lead}</p>
        <div className="project-footer">
          <div className="project-tags">
            {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
          <span className="project-cta">{isOpen ? "Close −" : "Read more →"}</span>
        </div>
      </div>
      <div className="project-expanded">
        <div className="project-expanded-inner">
          {project.body}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const [openSlug, setOpenSlug] = useState(null);
  return (
    <section data-section id="projects" data-screen-label="Projects" className="section">
      <SectionHead title="A Few Things I've Worked On or Am Exploring" meta={`${PROJECTS_DATA.length} projects`} />
      <div className="projects-grid">
        {PROJECTS_DATA.map((p) => (
          <ProjectCard
            key={p.slug}
            project={p}
            isOpen={openSlug === p.slug}
            onToggle={() => setOpenSlug(openSlug === p.slug ? null : p.slug)}
          />
        ))}
      </div>
    </section>
  );
}

// ===== Resume =====
function ResumeSection() {
  const [mode, setMode] = useState('resume');
  const isCV = mode === 'cv';

  return (
    <section data-section id="resume" data-screen-label="Resume" className="section">
      <div className="section-head">
        <h2 className="section-title">{isCV ? 'Curriculum Vitae' : 'Resume'}</h2>
        <div className="resume-toggle">
          <button
            className={"tweak-btn" + (!isCV ? " is-on" : "")}
            onClick={() => setMode('resume')}>Resume</button>
          <button
            className={"tweak-btn" + (isCV ? " is-on" : "")}
            onClick={() => setMode('cv')}>CV</button>
        </div>
      </div>
      <div className="resume">
        <div className="resume-head">
          <div>
            <h3 className="resume-name">Hung Tran</h3>
            <p className="resume-subtitle">Product Manager · Ocean Finance, Climate Disclosure, Coastal Resilience</p>
          </div>
          <div className="resume-contact">
            <div><a href="mailto:hung@hungtran.org">hung@hungtran.org</a></div>
            <div><a href="https://www.linkedin.com/in/hung-tran23/" target="_blank" rel="noreferrer">linkedin.com/in/hung-tran23</a></div>
            <div>New York City</div>
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-label">Experience</div>
          <div className="resume-entry">
            <div className="resume-date">Jul 2023 — Present<br/>NYC</div>
            <div>
              <p className="resume-role">Product Manager</p>
              <p className="resume-org">CDP · Climate Disclosure Project</p>
              <ul>
                <li><strong>Project management —</strong> oversee projects across multiple teams and time zones from scoping to delivery.</li>
                <li><strong>Product life cycle —</strong> maintain, update, and ship new data products using Python, R, and Excel VBA.</li>
                <li><strong>Data flow design —</strong> develop data flow diagrams and documentation for end-to-end movement, transformation, and integration.</li>
                <li><strong>Strategy —</strong> identify and evaluate potential strategic partnerships; negotiate agreements that expand product reach and value.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-section-label">Education</div>
          <div className="resume-entry resume-entry-compact">
            <div className="resume-date">2021 — 2023</div>
            <div>
              <p className="resume-role">MBA in Sustainability — <span className="resume-org-inline">Bard College</span></p>
              {isCV && (
                <p className="resume-detail">Focused on environmental finance, corporate sustainability strategy, and climate-risk assessment.</p>
              )}
            </div>
          </div>
          <div className="resume-entry resume-entry-compact">
            <div className="resume-date">2015 — 2019</div>
            <div>
              <p className="resume-role">BS, Biology &amp; Environmental Studies — <span className="resume-org-inline">Boston College</span></p>
              {isCV && (
                <p className="resume-detail">Coursework in GIS, plant physiological ecology, microbiomes, and social innovation.</p>
              )}
            </div>
          </div>
        </div>

        {isCV && (
          <div className="resume-section">
            <div className="resume-section-label">Research &amp; Projects</div>
            <div className="resume-entry">
              <div className="resume-date">2020 — 2021</div>
              <div>
                <p className="resume-role">Financial / ESG / Social Hype Dashboard</p>
                <p className="resume-detail">Built a dashboard merging financial fundamentals (Piotroski F-Score), ESG metrics, and social-media sentiment for retail investors. Designed and administered a survey measuring whether ESG context changes investment behavior.</p>
              </div>
            </div>
            <div className="resume-entry">
              <div className="resume-date">2019</div>
              <div>
                <p className="resume-role">Flood Maps of Boston at Rising Sea Levels</p>
                <p className="resume-detail">Modeled Boston's coastline under 1m and 2.5m sea-level rise with 100-year storm surge using QGIS, MassGIS LiDAR DEM, and NOAA SLR scenarios. Produced per-neighborhood adaptation briefs.</p>
              </div>
            </div>
            <div className="resume-entry">
              <div className="resume-date">2018</div>
              <div>
                <p className="resume-role">Mine Rehabilitation Survey — Western Australia</p>
                <p className="resume-detail">Conducted field survey measuring plant respiration rates and morphology across plots with different planting conditions at a mine rehabilitation site.</p>
              </div>
            </div>
          </div>
        )}

        <div className="resume-section">
          <div className="resume-section-label">Skills</div>
          <div className="skill-grid">
            <div className="skill-row">
              <div className="skill-label">Programming</div>
              <div className="skill-body">Python (numpy, scikit-learn, django), R, Excel VBA</div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Data &amp; viz</div>
              <div className="skill-body">SQL, QGIS, Tableau, Microsoft Power BI</div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Other technical</div>
              <div className="skill-body">Salesforce, LinkedIn Recruiter, Photoshop CS6</div>
            </div>
            <div className="skill-row">
              <div className="skill-label">Management</div>
              <div className="skill-body">Negotiation, intercultural competency, grassroots mobilization, conflict resolution</div>
            </div>
            {isCV && (
              <div className="skill-row">
                <div className="skill-label">Lab equipment</div>
                <div className="skill-body">Sedigraph, chlorophyll fluorimeter, plant respirometer, compound light microscope</div>
              </div>
            )}
          </div>
        </div>

        <div className="resume-actions">
          <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.print(); }}>
            {isCV ? 'Print CV' : 'Print Resume'}
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== Consulting =====
function ConsultingSection() {
  const cases = [
    { tag: "Individuals", title: "Personal portfolio review", body: "Walked individuals through which industries carry high environmental impact, which companies are actually setting and meeting goals, and which products have long, repairable life cycles." },
    { tag: "Restaurant", title: "Supply chain & menu", body: "Mapped where the kitchen could afford to go local, approximated carbon footprint, and reduced food waste by streamlining the menu and introducing a customer preference system." },
    { tag: "Laundromat", title: "Utilities & detergent", body: "Measured water and electricity load, modeled savings from Energy Star washers and dryers, and sourced a lower-impact detergent that didn't compromise on cleaning." },
    { tag: "Nail salon", title: "Materials sourcing", body: "Researched nail polishes with lower VOC and solvent loads, and found sustainably sourced sponges to replace the disposable ones that were churning through inventory weekly." },
  ];
  return (
    <section data-section id="consulting" data-screen-label="Consulting" className="section">
      <SectionHead title="Consulting for Small Businesses & Individuals" meta="Available selectively" />
      <div className="consult-intro">
        <div>
          <p>In the past I've consulted with small businesses and individuals to evaluate their environmental impact and figure out what they can practically do to change it.</p>
          <p>The work is hands-on, unglamorous, and usually starts with a spreadsheet.</p>
        </div>
        <ul className="consult-services">
          <li>Data analysis &amp; carbon footprinting</li>
          <li>Sustainability reports &amp; light LCA</li>
          <li>Project scoping &amp; prioritization</li>
          <li>Supply chain mapping</li>
        </ul>
      </div>
      <div className="case-grid">
        {cases.map((c) => (
          <div className="case-item" key={c.tag}>
            <div className="case-eyebrow">{c.tag}</div>
            <h4 className="case-title">{c.title}</h4>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Writing =====
function WritingSection() {
  return (
    <section data-section id="writing" data-screen-label="Writing" className="section">
      <SectionHead title="Writing" meta="Occasional Notes" />
      <div className="blog-list">
        {BLOG_POSTS.map((p) => (
          <a className="blog-item" key={p.date} href={p.url || "#writing"}>
            <time className="blog-date">{p.date}</time>
            <div>
              <h3 className="blog-title">{p.title}</h3>
              <p className="blog-excerpt">{p.excerpt}</p>
            </div>
            <span className="blog-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ===== Reading Reviews =====
function ReadingSection() {
  return (
    <section data-section id="reading" data-screen-label="Reading" className="section">
      <SectionHead title="Reading Reviews" meta="Climate, Ocean, Fiction Adjacent" />
      <div className="reading-grid">
        {BOOKS.map((b) => (
          <div className="book-card" key={b.title}>
            <div className="book-head">
              <span className="book-rating">{b.rating}</span>
              <span className="book-status">{b.status}</span>
            </div>
            <h4 className="book-title">{b.title}</h4>
            <p className="book-author">{b.author}</p>
            <p className="book-note">{b.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Contact =====
function ContactSection() {
  return (
    <section data-section id="contact" data-screen-label="Contact" className="section section-prose">
      <SectionHead title="Get In Touch" />
      <div className="contact-block">
        <p className="contact-lede">If something here resonates — or if you're working on coastal resilience, climate-risk data, or ocean finance — say hello.</p>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a className="contact-value" href="mailto:hung@hungtran.org">hung@hungtran.org</a>
          </li>
          <li>
            <span className="contact-label">LinkedIn</span>
            <a className="contact-value" href="https://www.linkedin.com/in/hung-tran23/" target="_blank" rel="noreferrer">linkedin.com/in/hung-tran23</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>© 2026 Hung Tran · Built with care on a New York evening.</span>
        <div className="footer-right">
          <a href="mailto:hung@hungtran.org">Email</a>
          <a href="https://www.linkedin.com/in/hung-tran23/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

// ===== Reveal on scroll =====
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-section]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
    return () => io.disconnect();
  }, []);
}

// ===== Active-section tracking =====
function useActiveSection(setActive) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]'));
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = sections[0]?.id || 'intro';
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setActive]);
}

window.Header = Header;
window.Hero = Hero;
window.IntroSection = IntroSection;
window.ProjectsSection = ProjectsSection;
window.ResumeSection = ResumeSection;
window.ConsultingSection = ConsultingSection;
window.WritingSection = WritingSection;
window.ReadingSection = ReadingSection;
window.ContactSection = ContactSection;
window.Footer = Footer;
window.useReveal = useReveal;
window.useActiveSection = useActiveSection;
