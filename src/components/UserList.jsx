import UserProfile from './UserProfile';
import userProfiles from '../data/userProfiles';

function UserList() {
  return (
    <div style={{
      backgroundColor: '#e6f2fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column', // для вертикального размещения
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        maxWidth: '1000px',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        marginBottom: '40px'
      }}>
        {userProfiles.map(user => (
          <UserProfile
            key={user.id}
            name={user.name}
            bio={user.bio}
            image={user.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
