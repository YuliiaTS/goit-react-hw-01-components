import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className="item" key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.bool,
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
}