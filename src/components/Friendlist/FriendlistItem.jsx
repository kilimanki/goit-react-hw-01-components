import PropTypes from "prop-types";
import css from "./friendlist.module.css";
export const Friendlistitem = ({ avatar, name, isOnline }) => {
  const statusIs = isOnline ? `${css.online}` : `${css.offline}`;
  return (
    <li className={css.item}>
      <span className={css.status + " " + statusIs}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
Friendlistitem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
