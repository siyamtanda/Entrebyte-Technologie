import React, { useState } from 'react';

const ApplyModal = ({ jobId, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Add other necessary fields for the job application

  const handleSubmit = event => {
    event.preventDefault();

    // Validate the form fields
    // Perform any necessary validation checks here before submitting

    // Prepare the job application data
    const applicationData = {
      jobId,
      name,
      email,
      // Include other fields in the job application data object
    };

    // Submit the job application to the backend
    onSubmit(applicationData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Job Application</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          {/* Add other form fields for the job application */}

          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
