import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import classes from './FriendList.module.css';

export default function FriendList({friends}) {
  return (
    <ul className={classes.friend_list}>
      {friends.map(friend => {
        const {id, name, avatar, isOnline} = friend;
        return (
            <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        friend: PropTypes.object,
      }),
    ),
  };