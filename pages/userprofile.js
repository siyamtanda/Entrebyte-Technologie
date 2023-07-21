import React, { useState } from 'react';
import Navbar from '../components/common/NavBar';
const UserProfilePage = () => {
  const [user, setUser] = useState({
    username: 'example',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    cvDocument: null,
    applicationHistory: [
      {
        jobId: '1',
        jobTitle: 'Software Engineer',
        dateApplied: '2023-07-01',
        status: 'Pending',
      },
      {
        jobId: '2',
        jobTitle: 'Product Manager',
        dateApplied: '2023-06-28',
        status: 'Rejected',
      },
    ],
  });

  const handleProfileUpdate = (field, value) => {
    setUser(prevUser => ({ ...prevUser, [field]: value }));
  };

  const handleCVUpload = event => {
    const file = event.target.files[0];
    // Handle file upload logic, such as storing the file in the backend or cloud storage
    setUser(prevUser => ({ ...prevUser, cvDocument: file }));
  };

  return (
    <div>
       <Navbar />
      <h1>User Profile</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={user.username}
            onChange={event => handleProfileUpdate('username', event.target.value)}
          />
        </label>
        <label>
          Full Name:
          <input
            type="text"
            value={user.fullName}
            onChange={event => handleProfileUpdate('fullName', event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={event => handleProfileUpdate('email', event.target.value)}
          />
        </label>
      </form>
      <div>
        <h2>CV Document</h2>
        {user.cvDocument ? (
          <p>Filename: {user.cvDocument.name}</p>
        ) : (
          <p>No CV document uploaded</p>
        )}
        <input type="file" accept="application/pdf" onChange={handleCVUpload} />
      </div>
      <div>
        <h2>Application History</h2>
        {user.applicationHistory.length === 0 ? (
          <p>No job applications found</p>
        ) : (
          <ul>
            {user.applicationHistory.map(application => (
              <li key={application.jobId}>
                <p>Job Title: {application.jobTitle}</p>
                <p>Date Applied: {application.dateApplied}</p>
                <p>Status: {application.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer style={{ 
        backgroundColor: '#f2f2f2',
        padding: '20px',
        marginTop: '800px',
        textAlign: 'center',
        
      }}>
        <p>© 2023 Your App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserProfilePage;
