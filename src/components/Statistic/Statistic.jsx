import PropTypes from 'prop-types';
import css from './statistic.module.css';
import { StatisticItem } from './StatisticItem';
import { getColor } from 'Utils/utils';
export const Statistic = ({ items, title }) => {
  const elements = items.map(({ id, ...props }) => (
    <StatisticItem key={id} {...props} color={`#${getColor()}`} />
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
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ),
};
