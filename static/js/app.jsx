/* global React, ReactDOM */
const { useState, useEffect } = React;

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('ht_dark') === '1');
  const [active, setActive] = useState('intro');

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', '#d4a84b');
    document.documentElement.style.setProperty('--container-prose', '680px');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : '');
    localStorage.setItem('ht_dark', darkMode ? '1' : '0');
  }, [darkMode]);

  useReveal();
  useActiveSection(setActive);
  useDepthBackground();

  const onNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <TideLine />
      <DepthGauge />
      <SectionDots />
      <Header active={active} onNavigate={onNavigate} darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <Hero mode="banner" />
      <IntroSection />
      {PEOPLE_ORGS.length > 0 && <PeopleOrgsSection />}
      <ProjectsSection />
      <ResumeSection />
      <ConsultingSection />
      <WritingSection />
      {DATA_FINDS.length > 0 && <DataFindsSection />}
      <ReadingSection />
      <ContactSection />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
