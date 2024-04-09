import styles from './Profile.module.css';
import PropTypes from 'prop-types';
// import clsx from 'clsx';

function Profile({username, tag, location, avatar, stats}) {
    // console.log(data);
    return (
        <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}><b>{username}</b></p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.listItem}>
      <span className={styles.label}><b>Followers:</b></span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.label}><b>Views:</b></span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.label}><b>Likes:</b></span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    ) ;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
};
export default Profile;