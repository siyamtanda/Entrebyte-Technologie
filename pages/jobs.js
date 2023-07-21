import React, { useEffect, useState } from 'react';
import ApplyModal from '../components/ApplyModal';
import Navbar from '../components/common/NavBar';
const JobsPage = () => {

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const openApplyModal = jobId => {
    setSelectedJobId(jobId);
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    setSelectedJobId(null);
    setShowApplyModal(false);
  };

  const handleJobApplication = applicationData => {
   
    console.log('Submitting job application:', applicationData);
    
    closeApplyModal();
  };

  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://documenter.getpostman.com/view/18545278/UVJbJdKh');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const applyForJob = jobId => {
    // Perform the job application logic here
    // You can open a form/modal to collect the necessary information from the user and submit it to the backend
    // You can use jobId to identify the job for which the user is applying
    console.log(`Applying for job ${jobId}`);
  };

  const saveJob = jobId => {
    // Perform the job save logic here
    // You can add the jobId to the user's saved jobs list in the backend
    // You can also update the UI to reflect that the job has been saved
    console.log(`Saving job ${jobId}`);
  };

  return (
    <div>
       <Navbar />
      <h1>Jobs Page</h1>

      <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search jobs" />

      {filteredJobs.length > 0 ? (
        filteredJobs.map(job => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            {/* Additional job information */}

            {/* Apply and Save buttons */}
            <button onClick={() => applyForJob(job.id)}>Apply</button>
            <button onClick={() => saveJob(job.id)}>Save</button>
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}


      
      {showApplyModal && (
        <ApplyModal
          jobId={selectedJobId}
          onClose={closeApplyModal}
          onSubmit={handleJobApplication}
        />
      )}
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

export default JobsPage;
