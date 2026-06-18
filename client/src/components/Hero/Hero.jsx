import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarCheck, FaHandsHelping, FaUserPlus } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="eyebrow">Volunteer Management Platform</span>
        <h1>Mobilise people faster. Track impact better.</h1>
        <p>
          NayePankh Foundation connects volunteers with education, health, and awareness
          campaigns through a clean digital hub built for everyday coordination.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/volunteer">
            Join as volunteer <FaArrowRight aria-hidden="true" />
          </Link>
          <Link className="btn btn-secondary" to="/programs">
            Explore programs
          </Link>
        </div>
        <div className="hero-highlights" aria-label="Platform highlights">
          <div>
            <FaUserPlus aria-hidden="true" />
            <strong>Quick signup</strong>
            <span>Apply in minutes</span>
          </div>
          <div>
            <FaCalendarCheck aria-hidden="true" />
            <strong>Live drives</strong>
            <span>See upcoming work</span>
          </div>
          <div>
            <FaHandsHelping aria-hidden="true" />
            <strong>Impact log</strong>
            <span>Track service hours</span>
          </div>
        </div>
      </div>
      <div className="hero-panel" aria-label="Current impact snapshot">
        <div className="impact-card featured">
          <span>Active campaign</span>
          <strong>Back-to-School Kit Drive</strong>
          <p>142 volunteers matched across 8 city chapters this month.</p>
        </div>
        <div className="impact-metrics">
          <div>
            <strong>5k+</strong>
            <span>Students supported</span>
          </div>
          <div>
            <strong>800+</strong>
            <span>Volunteers</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Campaigns</span>
          </div>
          <div>
            <strong>25</strong>
            <span>Cities</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
