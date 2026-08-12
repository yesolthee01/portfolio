import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { WorkSection } from '../components/WorkSection';
import { AiToolkitSection } from '../components/AiToolkitSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { WaveDivider } from '../components/WaveDivider';

export function Home() {
  return (
    <div className="page">
      <Nav variant="home" />

      <div className="frame">
        <Hero />
      </div>

      <WaveDivider watchId="work" />
      <div className="frame">
        <WorkSection />
      </div>

      <WaveDivider watchId="ai" />
      <div className="frame">
        <AiToolkitSection />
      </div>

      <WaveDivider watchId="about" />
      <div className="frame">
        <AboutSection />
      </div>

      <WaveDivider watchId="contact" />
      <div className="frame">
        <ContactSection />
      </div>
    </div>
  );
}
