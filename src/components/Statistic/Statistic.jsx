import PropTypes from "prop-types";
import css from "./statistic.module.css";
import { StatisticList } from "./StatisticList";
function getColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
export const Statistic = ({ items, title }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const elements = items.map(({ id, ...props }) => (
    <StatisticList key={id} {...props} color={`#${getColor()}`} />
  ));
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}
      <ul className={css.list_items}>{elements}</ul>
    </section>
  );
};
Statistic.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
