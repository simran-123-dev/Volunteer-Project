import { useMemo, useState } from 'react';
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { submitVolunteerForm } from '../../services/volunteerService';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
  availability: 'Weekends',
  interest: 'Education Support',
  skills: '',
};

function VolunteerForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const matchScore = useMemo(() => {
    const filled = Object.values(form).filter(Boolean).length;
    return Math.round((filled / Object.keys(form).length) * 100);
  }, [form]);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await submitVolunteerForm(form);
    setStatus(response.message);
    setForm(initialForm);
  };

  return (
    <section className="page-section volunteer-form-section">
      <div className="volunteer-layout">
        <div>
          <div className="section-header">
            <span>Volunteer</span>
            <h2>Join the right campaign faster</h2>
            <p>
              Share your availability, interest area, and skills. The platform prepares a
              clean profile that coordinators can match with upcoming drives.
            </p>
          </div>
          <div className="volunteer-benefits">
            <div>
              <FaClock aria-hidden="true" />
              Flexible slots
            </div>
            <div>
              <FaMapMarkerAlt aria-hidden="true" />
              City-based matching
            </div>
            <div>
              <FaCheckCircle aria-hidden="true" />
              Application tracking
            </div>
          </div>
        </div>

        <form className="volunteer-form" onSubmit={handleSubmit}>
          <div className="match-score" aria-label={`Profile completion ${matchScore}%`}>
            <span>Profile strength</span>
            <strong>{matchScore}%</strong>
            <div>
              <i style={{ width: `${matchScore}%` }} />
            </div>
          </div>

          <div className="form-grid">
            <label className="form-group">
              <span className="form-label">Full name</span>
              <input className="form-input" name="name" value={form.name} onChange={updateField} required />
            </label>
            <label className="form-group">
              <span className="form-label">Email</span>
              <input className="form-input" name="email" type="email" value={form.email} onChange={updateField} required />
            </label>
            <label className="form-group">
              <span className="form-label">Phone</span>
              <input className="form-input" name="phone" value={form.phone} onChange={updateField} required />
            </label>
            <label className="form-group">
              <span className="form-label">City</span>
              <input className="form-input" name="city" value={form.city} onChange={updateField} required />
            </label>
            <label className="form-group">
              <span className="form-label">Availability</span>
              <select className="form-select" name="availability" value={form.availability} onChange={updateField}>
                <option>Weekends</option>
                <option>Weekdays</option>
                <option>Evenings</option>
                <option>Flexible</option>
              </select>
            </label>
            <label className="form-group">
              <span className="form-label">Interest</span>
              <select className="form-select" name="interest" value={form.interest} onChange={updateField}>
                <option>Education Support</option>
                <option>Women Empowerment</option>
                <option>Health Awareness</option>
                <option>Youth Leadership</option>
              </select>
            </label>
          </div>
          <label className="form-group">
            <span className="form-label">Skills or notes</span>
            <textarea
              className="form-textarea"
              name="skills"
              rows="4"
              value={form.skills}
              onChange={updateField}
              placeholder="Teaching, event coordination, content, design, field support..."
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Submit application <FaPaperPlane aria-hidden="true" />
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default VolunteerForm;
