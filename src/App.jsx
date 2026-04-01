import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.page-section');
      let current = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      // Highlight last item if user has scrolled to the bottom
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 50
      ) {
        if (sections.length > 0) {
          current = sections[sections.length - 1].getAttribute('id');
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-container">
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />

      <main className="main-content">
        <section id="home" className="page-section">
          <h1>Home Section</h1>
          <p>Welcome to my workspace</p>
        </section>

        <section id="about" className="page-section">
          <h1>About Section</h1>
          <p>A little more about me.</p>
        </section>

        <section id="projects" className="page-section">
          <h1>Projects Section</h1>
          <p>Gallery view of my work.</p>
        </section>

        <section id="skills" className="page-section">
          <h1>Skills Section</h1>
          <p>Technical skills and expertise.</p>
        </section>

        <section id="blog" className="page-section">
          <h1>Blog / Notes Section</h1>
          <p>Thoughts, articles, and documentation.</p>
        </section>

        <section id="resume" className="page-section">
          <h1>Resume Section</h1>
          <p>Professional experience and education.</p>
        </section>

        <section id="contact" className="page-section">
          <h1>Contact Section</h1>
          <p>Get in touch with me.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
