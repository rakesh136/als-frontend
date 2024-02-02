// AddAttendance.js
import React, { useState } from 'react';
import '../../css/Employee/AddAttendance.css';

const AddAttendance = ({ isOpen, onClose, onSubmit }) => {
  const [attendanceReason, setAttendanceReason] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const currentDateAndTime = new Date().toLocaleString();

  const handlePresent = () => {
    setSelectedOption('Present');
    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setAttendanceStatus(formattedDateTime);
  };

  const handleNotAvailable = () => {
    setSelectedOption('Not Available');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      attendanceStatus,
      attendanceReason
    };
    onSubmit(formData);
    onClose(); // Close the modal after submission
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="attendance-modal">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <div className="attendance-container">
            <div className="date-time">
              <h3>Current Date and Time:</h3>
              <p2>{currentDateAndTime}</p2>
            </div>




            <div className="availability">
              <h3>Availability:</h3>
              <div>
                <input
                  type="radio"
                  id="present"
                  name="attendanceOption"
                  value="Present"
                  onChange={handlePresent}
                  checked={selectedOption === 'Present'}
                />
                <label htmlFor="present">Present</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="not-available"
                  name="attendanceOption"
                  value="Not Available"
                  onChange={handleNotAvailable}
                  checked={selectedOption === 'Not Available'}
                />
                <label htmlFor="not-available">Not Available</label>
              </div>
              {selectedOption === 'Not Available' && (
                <div className="attendance-reason">
                  <label htmlFor="reason">Reason If Not Available:</label>
                  <input
                    type="text"
                    id="reason"
                    aria-label="With textarea"
                    value={attendanceReason}
                    onChange={(e) => setAttendanceReason(e.target.value)}
                    required
                   rows="4"
                   cols="50"
                   resize="vertical"
                  /><br/>
                </div>
              )}
            </div>
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  );
};

export default AddAttendance;