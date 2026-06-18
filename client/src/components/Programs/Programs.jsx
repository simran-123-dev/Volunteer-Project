import { FaBookOpen, FaHeartbeat, FaLightbulb, FaVenus } from 'react-icons/fa';

const programs = [
  {
    icon: <FaBookOpen aria-hidden="true" />,
    title: 'Education Support',
    text: 'Mentoring, school kits, digital literacy, and after-class learning circles.',
  },
  {
    icon: <FaVenus aria-hidden="true" />,
    title: 'Women Empowerment',
    text: 'Skills workshops, safety awareness, financial literacy, and leadership sessions.',
  },
  {
    icon: <FaHeartbeat aria-hidden="true" />,
    title: 'Health Awareness',
    text: 'Community camps focused on hygiene, nutrition, mental wellness, and prevention.',
  },
  {
    icon: <FaLightbulb aria-hidden="true" />,
    title: 'Youth Leadership',
    text: 'Volunteer-led campaigns that build communication, planning, and field skills.',
  },
];

function ProgramsSection() {
  return (
    <section className="page-section programs-section">
      <div className="section-header">
        <span>Programs</span>
        <h2>Supporting Education, Health & Women Empowerment</h2>
        <p>Choose a cause, see what is needed, and join a team that can use your strengths.</p>
      </div>
      <div className="program-cards">
        {programs.map((program) => (
          <article className="feature-card" key={program.title}>
            <div className="feature-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;
