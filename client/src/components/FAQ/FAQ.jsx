function FAQ() {
  const faqs = [
    [
      'How can I volunteer?',
      'Open the volunteer page, share your skills and city, then choose the causes you want to support.',
    ],
    ['Can I join weekend-only drives?', 'Yes. Many education and health awareness campaigns have weekend slots.'],
    [
      'How is my contribution tracked?',
      'The dashboard shows application status, assigned events, service hours, and next actions.',
    ],
  ];

  return (
    <section className="page-section faq-section">
      <div className="section-header">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details className="faq-item" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
