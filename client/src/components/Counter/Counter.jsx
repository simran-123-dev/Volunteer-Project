function Counter() {
  const metrics = [
    ['5,000+', 'Students Supported'],
    ['800+', 'Verified Volunteers'],
    ['120+', 'Campaigns Completed'],
    ['25+', 'Cities Reached'],
  ];

  return (
    <section className="page-section counter-section">
      <div className="section-header">
        <span>Impact</span>
        <h2>Our Reach</h2>
      </div>
      <div className="counter-grid">
        {metrics.map(([value, label]) => (
          <div className="metric-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
