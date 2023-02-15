import PropTypes from "prop-types";
import css from "./statistic.module.css";

export const StatisticList = ({ label, percentage, color }) => {
  return (
    <li className={css.item} style={{ backgroundColor: color }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
StatisticList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
