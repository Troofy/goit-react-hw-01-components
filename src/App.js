import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import TransactionHistory from './components/transactions/TransactionHistory';
import FriendList from './components/friendlist/FriendList';

import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friendlist/friends.json';
import items from './components/transactions/transactions.json';

export default function App() {
return (
<> 
    <Profile 
    avatar={user.avatar}
    tag={user.tag} 
    username={user.username} 
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data} />
{/*     <Statistics stats={data} /> */}
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
</>
    );
}
    

    