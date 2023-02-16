import PropTypes from 'prop-types';
import css from './statistic.module.css';

export const StatisticItem = ({ label, percentage, color }) => {
  return (
    <li className={css.item} style={{ backgroundColor: color }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
