import PropTypes from 'prop-types';
import { TransactionsItem } from './TransactionsItem';
import css from './transactions.module.css';
export const TransactionHistory = ({ items }) => {
  const elements = items.map(({ type, id, ...props }) => (
    <TransactionsItem key={id} type={type} {...props} />
  ));
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
