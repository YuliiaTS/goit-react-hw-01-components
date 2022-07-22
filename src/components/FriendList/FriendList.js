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