import React from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <h1 className="text-2xl font-bold">My Portfolio</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const About = () => (
  <section id="about" className="bg-gray-100 dark:bg-gray-800 p-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
    <p className="text-gray-600 dark:text-gray-300">Hello! I'm a web developer passionate about creating beautiful and functional websites. I specialize in React and modern web technologies.</p>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-gray-100 dark:bg-gray-800 p-8">
    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Contact Me</h2>
    <ContactForm />
    <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
      <p>Email: josimar85209@gmail.com</p>
      <p>LinkedIn: https://www.linkedin.com/in/josimar-arias549/</p>
      <p>GitHub: https://github.com/josimar549</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;