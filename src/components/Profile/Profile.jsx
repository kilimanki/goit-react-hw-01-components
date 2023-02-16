import PropTypes from 'prop-types';
import css from './profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <h2 className="name">{username}</h2>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
      <ul className={css.items}>
        <li className={css.list}>
          <span className="label">Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>

        <li className={css.list}>
          <span className="label">Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>

        <li className={css.list}>
          <span className="label">Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
