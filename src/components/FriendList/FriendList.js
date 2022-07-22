import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({friends}) {
    return (
        <ul className="FriendList">
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
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};