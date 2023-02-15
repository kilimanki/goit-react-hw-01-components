import PropTypes from "prop-types";
const getBgColor = (variant) => {
  switch (variant) {
    case "payment":
      return "blue";
    case "invoice":
      return "green";
    case "withdrawal":
      return "red";
    case "deposit":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};
export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td style={{ backgroundColor: getBgColor(type) }}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
