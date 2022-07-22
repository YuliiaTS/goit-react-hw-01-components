import user from '../data/user.json';
// import data from '/path/to/data.json';
// import friends from 'path/to/friends.json';
// import transactions from 'path/to/transactions.json';

import Profile from './Profile/Profile';

const {username, tag, location, avatar, stats} = user;

export const App = () => {
  return (
    <div
      style={{
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework 1
      <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
         />
    </div>
  );
};
