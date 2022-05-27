import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from './user.json';
import data from './data.json';

export default function App() {
return (
<div> 
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
<Statistics stats={data} />
    </div>
    );
}
