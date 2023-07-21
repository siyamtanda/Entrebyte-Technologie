import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/common/NavBar';

export default function Home() {
  return (
    <div >
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px'
      }}>
        <h6 style={{ 
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>Gateway to Opportunities!</h6>
        <p style={{ 
          fontSize: '16px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          Welcome to Gateway to Opportunities, the ultimate recruitment hub that connects talented individuals with their dream careers. Our platform is designed to streamline the job search process, providing you with a user-friendly interface and access to a vast array of job listings from diverse industries.
        </p>

        <Link href="/jobs" passHref={true} legacyBehavior>
          <a style={{ 
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '24px',
            transition: 'background-color 0.3s ease',
            marginTop: '20px'
          }}>Go to Jobs</a>
        </Link>

        <div style={{ marginTop: '50px' }}>
          <Image src="https://cdn.dribbble.com/userupload/4486164/file/original-d5f55917430e0dc338e1b4d18716e3ee.png?compress=1&resize=752x" alt="Image" width={752} height={376} />
        </div>
      </main>

      <footer style={{ 
        backgroundColor: '#f2f2f2',
        padding: '20px',
        marginTop: '50px',
        textAlign: 'center',
        MarginTop: 200
      }}>
        <p>© 2023 Your App. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
