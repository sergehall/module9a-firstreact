function UserProfile() {
  const name = "Serge Hall";
  const bio = "Full-stack developer passionate about creating user-friendly applications.";
  const profileImage = "https://avatars.githubusercontent.com/u/60080971?v=4";

  return (
    <div style={{
      maxWidth: '400px',
      margin: '20px auto',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #e1e5e9',
          marginBottom: '16px'
        }}
      />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
