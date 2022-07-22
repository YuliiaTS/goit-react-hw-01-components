import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from 'path/to/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

const { username, tag, location, avatar, stats } = user;

const App = () => {
  return (
    <div
      style={{
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
