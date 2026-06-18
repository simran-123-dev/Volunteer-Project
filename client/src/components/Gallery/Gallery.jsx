function GallerySection() {
  const moments = [
    [
      'Learning camp',
      'Students receiving mentoring support',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Health drive',
      'Community volunteers managing registrations',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Women workshop',
      'Skill-building and awareness session',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Food support',
      'Field team preparing community relief kits',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Awareness rally',
      'Youth volunteers leading a public outreach campaign',
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Team orientation',
      'New volunteers learning campaign responsibilities',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
    ],
  ];

  return (
    <section className="page-section gallery-section">
      <div className="section-header">
        <span>Gallery</span>
        <h2>Pictures From Our Campaigns</h2>
      </div>
      <div className="gallery-grid">
        {moments.map(([title, caption, image]) => (
          <figure className="gallery-tile" key={title}>
            <img src={image} alt={`${title} campaign moment`} loading="lazy" />
            <figcaption>
              <strong>{title}</strong>
              <span>{caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
