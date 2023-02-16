import PropTypes from 'prop-types';
import { Friendlistitem } from './FriendlistItem';
export const Friendlist = ({ list, id }) => {
  const elements = list.map(({ id, ...props }) => (
    <Friendlistitem key={id} {...props} />
  ));
  return <ul className="friend-list">{elements}</ul>;
};
Friendlist.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
