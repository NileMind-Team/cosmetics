import ScrollToHomeButton from '../components/ScrollToHomeButton';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from './Contact';
import Projects from './Projects';
import Slider from './Slider';

const Home = ({ lang }) => {
  return (
    <div>
      <section id="home">
        <Slider lang={lang} />
        <ScrollToHomeButton lang={lang} />
      </section>
      <section id="about">
        <About lang={lang} />
      </section>
      <section id="projects">
        <Projects lang={lang} />
      </section>
      <section id="services">
        <Services lang={lang} />
      </section>
      <section id="contact">
        <Contact lang={lang} />
      </section>
    </div>
  );
};

export default Home;
