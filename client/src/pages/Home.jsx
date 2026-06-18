import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Programs from '../components/Programs/Programs';
import Counter from '../components/Counter/Counter';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import AIImpactAssistant from '../components/AIImpactAssistant/AIImpactAssistant';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Counter />
      <Programs />
      <AIImpactAssistant />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
