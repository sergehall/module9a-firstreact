import UserProfile from './UserProfile';
import userProfiles from '../data/userProfiles';
import '../App.css';

function UserList() {
  return (
    <div className="profile-panel">
      {userProfiles.map((user) => (
        <UserProfile
          key={user.id}
          name={user.name}
          bio={user.bio}
          image={user.profileImage}
        />
      ))}
    </div>
  );
}

export default UserList;
