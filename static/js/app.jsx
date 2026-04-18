/* global React, ReactDOM */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = {
  hero: "banner",
  accent: "amber",
  density: "standard"
};

const ACCENTS = {
  amber:  { color: "#d4a84b", label: "Amber" },
  coral:  { color: "#d97a5f", label: "Coral" },
  kelp:   { color: "#4a6d4e", label: "Kelp" },
  tide:   { color: "#2f74a7", label: "Tide" },
};

function TweaksPanel({ cfg, setCfg }) {
  return (
    <div className="tweaks-panel">
      <h4>Tweaks</h4>
      <div className="tweak-sub">Try a few combinations — exploration is encouraged.</div>

      <div className="tweak-group">
        <div className="tweak-label">Hero treatment</div>
        <div className="tweak-options">
          {["banner","split","text"].map(m => (
            <button key={m}
              className={"tweak-btn" + (cfg.hero === m ? " is-on" : "")}
              onClick={() => setCfg({...cfg, hero: m})}>
              {m === "banner" ? "Banner" : m === "split" ? "Split" : "Editorial"}
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-group">
        <div className="tweak-label">Accent color</div>
        <div className="tweak-swatches">
          {Object.entries(ACCENTS).map(([k, v]) => (
            <div key={k}
              className={"tweak-swatch" + (cfg.accent === k ? " is-on" : "")}
              style={{ background: v.color }}
              title={v.label}
              onClick={() => setCfg({...cfg, accent: k})} />
          ))}
        </div>
      </div>

      <div className="tweak-group">
        <div className="tweak-label">Density</div>
        <div className="tweak-options">
          {["airy","standard","dense"].map(d => (
            <button key={d}
              className={"tweak-btn" + (cfg.density === d ? " is-on" : "")}
              onClick={() => setCfg({...cfg, density: d})}>
              {d[0].toUpperCase()+d.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [cfg, setCfg] = useState(() => {
    const saved = localStorage.getItem('ht_cfg');
    return saved ? JSON.parse(saved) : TWEAK_DEFAULTS;
  });
  const [active, setActive] = useState('intro');

  useEffect(() => {
    localStorage.setItem('ht_cfg', JSON.stringify(cfg));
    document.documentElement.style.setProperty('--accent-color', ACCENTS[cfg.accent]?.color || ACCENTS.amber.color);
    if (cfg.density === 'airy') document.documentElement.style.setProperty('--container-prose', '720px');
    else if (cfg.density === 'dense') document.documentElement.style.setProperty('--container-prose', '640px');
    else document.documentElement.style.setProperty('--container-prose', '680px');
  }, [cfg]);

  useReveal();
  useActiveSection(setActive);

  const onNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header active={active} onNavigate={onNavigate} />
      <Hero mode={cfg.hero} />
      <IntroSection />
      <PeopleOrgsSection />
      <ProjectsSection />
      <ResumeSection />
      <ConsultingSection />
      <WritingSection />
      <DataFindsSection />
      <ReadingSection />
      <ContactSection />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
