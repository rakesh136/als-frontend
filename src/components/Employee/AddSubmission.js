// AddSubmission.js

import React, { useState } from 'react';
import '../../css/Employee/AddSubmission.css'; 
//import './Employee/AddSubmission.css'; // Import the CSS file for styling
//import AddSubmission from '../Components/admin/Employee/AddSubmission';


const AddSubmission = ({ onClose, onSubmit }) => {
  const [role, setRole] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorPhoneNumber, setVendorPhoneNumber] = useState('');
  const [client, setClient] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [payRate, setPayRate] = useState('');
  const [onsiteHybridRole, setOnsiteHybridRole] = useState('');

  const handleSubmit = () => {
    // Validate input and perform submission
    // You can call the onSubmit prop to pass the data to the parent component
    onSubmit({
      role,
      vendorEmail,
      vendorPhoneNumber,
      client,
      submissionDate,
      payRate,
      onsiteHybridRole,
    });

    // Close the AddSubmission component
    onClose();
  };

  return (
    <div className="add-submission-container">
      <h2>Add Submission</h2>
      <label>Role:</label>
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />

      <label>Vendor Email:</label>
      <input type="text" value={vendorEmail} onChange={(e) => setVendorEmail(e.target.value)} />

      <label>Vendor Phone Number:</label>
      <input type="text" value={vendorPhoneNumber} onChange={(e) => setVendorPhoneNumber(e.target.value)} />

      <label>Client:</label>
      <input type="text" value={client} onChange={(e) => setClient(e.target.value)} />

      <label>Submission Date:</label>
      <input type="text" value={submissionDate} onChange={(e) => setSubmissionDate(e.target.value)} />

      <label>Pay Rate:</label>
      <input type="text" value={payRate} onChange={(e) => setPayRate(e.target.value)} />

      <label>Onsite/Hybrid Role:</label>
      <input type="text" value={onsiteHybridRole} onChange={(e) => setOnsiteHybridRole(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddSubmission;
