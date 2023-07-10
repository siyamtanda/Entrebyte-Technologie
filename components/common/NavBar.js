import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav style={{ 
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '15px'
    }}>
      <div className="logo" style={{ marginLeft: '10px' }}>
        <Image src="/images/logo1.png" alt="Logo" width={200} height={80} />
      </div>
      <ul style={{ 
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }}>
        <li style={{ marginRight: '100px' }}>
          <Link href="/userprofile" passHref={true} legacyBehavior>
            <a style={{ 
              display: 'block',
              color: '#000',
              textDecoration: 'none',
              fontSize: '20px'
            }}>User Profile</a>
          </Link>
        </li>
        <li style={{ marginRight: '100px' }}>
          <Link href="/jobs" passHref={true} legacyBehavior>
            <a style={{ 
              display: 'block',
              color: '#000',
              textDecoration: 'none',
              fontSize: '20px'
            }}>Jobs</a>
          </Link>
        </li>
        <li style={{ marginRight: '100px' }}>
          <Link href="/saved-jobs" passHref={true} legacyBehavior>
            <a style={{ 
              display: 'block',
              color: '#000',
              textDecoration: 'none',
              fontSize: '20px'
            }}>Saved Jobs</a>
          </Link>
        </li>
        <li className="signupButton">
          <Link href="/signup" passHref={true} legacyBehavior>
            <a style={{ 
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#4caf50',
              color: 'white',
              textAlign: 'center',
              textDecoration: 'none',
              borderRadius: '24px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginRight: '10px' // Add margin-right to create space
            }}>Sign Up</a>
          </Link>
        </li>
        <li className="signinButton">
          <Link href="/signin" passHref={true} legacyBehavior>
            <a style={{ 
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#4caf50',
              color: 'white',
              textAlign: 'center',
              textDecoration: 'none',
              borderRadius: '24px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}>Sign In</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

