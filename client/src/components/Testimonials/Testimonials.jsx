function Testimonials() {
  const stories = [
    [
      'Ananya Sharma',
      'The dashboard makes every drive feel organised. I know where to report, what to carry, and how my hours are counted.',
    ],
    [
      'Rohit Mehra',
      'I joined for one weekend event and stayed because the team made volunteering simple, respectful, and meaningful.',
    ],
  ];

  return (
    <section className="page-section testimonials-section">
      <div className="section-header">
        <span>Testimonials</span>
        <h2>What Volunteers Say</h2>
      </div>
      <div className="testimonial-list">
        {stories.map(([name, quote]) => (
          <blockquote className="testimonial-card" key={name}>
            <p>"{quote}"</p>
            <cite>{name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
