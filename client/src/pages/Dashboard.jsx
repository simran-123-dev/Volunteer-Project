import { FaCalendarAlt, FaCheck, FaClipboardList, FaHourglassHalf, FaStar } from 'react-icons/fa';

const events = [
  ['School Kit Packing', '22 Jun', 'Delhi', '42 volunteers needed'],
  ['Digital Literacy Camp', '25 Jun', 'Noida', '18 volunteers needed'],
  ['Health Awareness Walk', '30 Jun', 'Gurugram', '26 volunteers needed'],
];

const tasks = [
  ['Complete profile verification', true],
  ['Choose preferred city chapter', true],
  ['Upload ID proof', false],
  ['Attend orientation call', false],
];

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-hero">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Volunteer Management Hub</h1>
          <p>Monitor applications, campaign slots, service hours, and coordinator actions from one focused workspace.</p>
        </div>
        <div className="status-pill">
          <FaHourglassHalf aria-hidden="true" />
          Application under review
        </div>
      </div>

      <div className="dashboard-stats">
        <article>
          <FaClipboardList aria-hidden="true" />
          <strong>4</strong>
          <span>Open tasks</span>
        </article>
        <article>
          <FaCalendarAlt aria-hidden="true" />
          <strong>3</strong>
          <span>Upcoming drives</span>
        </article>
        <article>
          <FaStar aria-hidden="true" />
          <strong>36</strong>
          <span>Service hours</span>
        </article>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-panel">
          <div className="panel-heading">
            <h2>Upcoming Events</h2>
            <span>June 2026</span>
          </div>
          <div className="event-list">
            {events.map(([title, date, place, need]) => (
              <article className="event-row" key={title}>
                <div className="event-date">{date}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{place} - {need}</p>
                </div>
                <button className="mini-button" type="button">Apply</button>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-panel">
          <div className="panel-heading">
            <h2>Onboarding Checklist</h2>
            <span>2 of 4 done</span>
          </div>
          <div className="task-list">
            {tasks.map(([task, done]) => (
              <div className={done ? 'task-row done' : 'task-row'} key={task}>
                <span>{done && <FaCheck aria-hidden="true" />}</span>
                {task}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
