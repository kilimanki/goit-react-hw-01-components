import PropTypes from "prop-types";
import { Friendlistitem } from "./FriendlistItem";
import css from "./friendlist.module.css";
export const Friendlist = ({ list, id }) => {
  const elements = list.map(({ id, ...props }) => (
    <Friendlistitem key={id} {...props} />
  ));
  return (
    <div>
      <ul className="friend-list">{elements}</ul>
    </div>
  );
};
Friendlist.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
