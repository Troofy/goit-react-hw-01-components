import PropTypes from 'prop-types'
import classes from './Profile.module.css'
import defaultImage from '../default-image.jpg'

export default function Profile(props) {
    const {username, tag, location, avatar = defaultImage, followers, views, likes} = props
        return(
      <div className={classes.profile}>
      <div className={classes.description}>
        <img
          src={avatar ?? defaultImage}
          alt="Аватар пользователя"
          className={classes.avatar}
        />
        <p className={classes.name}>{username}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>
      <ul className={classes.stats}>
        <li>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{followers}</span>
        </li>
        <li>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{views}</span>
        </li>
        <li>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{likes}</span>
        </li>
      </ul>
      </div>)}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};