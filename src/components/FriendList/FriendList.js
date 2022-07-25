import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={style.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
               key={id}
               isOnline={isOnline}
               avatar={avatar}
               name={name}
            />
         ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
       PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
       })
    ),
  };