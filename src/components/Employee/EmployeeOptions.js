// ... (other imports and code)
import React, { useState } from 'react';
import '../../css/Employee/EmployeeOptions.css';
import AddInterview from './AddInterview';
import AddSubmission from './AddSubmission';
import AddAttendance from './AddAttendance';

const EmployeeOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

  const options = ['Option 1', 'Add Submission', 'Add Interview', 'Add Attendance', 'Option 5', 'Option 6'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === 'Add Interview') {
      setIsInterviewModalOpen(true);
      setIsSubmissionModalOpen(false); // Close submission modal if open
      setIsAttendanceModalOpen(false); // Close attendance modal if open
    } else if (option === 'Add Submission') {
      setIsSubmissionModalOpen(true);
      setIsInterviewModalOpen(false); // Close interview modal if open
      setIsAttendanceModalOpen(false); // Close attendance modal if open
    } else if (option === 'Add Attendance') {
      setIsAttendanceModalOpen(true);
      setIsInterviewModalOpen(false); // Close interview modal if open
      setIsSubmissionModalOpen(false); // Close submission modal if open
    }
  };

  const handleCloseInterviewModal = () => {
    setIsInterviewModalOpen(false);
  };

  const handleCloseSubmissionModal = () => {
    setIsSubmissionModalOpen(false);
  };

  const handleCloseAttendanceModal = () => {
    setIsAttendanceModalOpen(false);
  };

  const handleSubmitInterviewForm = (formData) => {
    console.log('Interview data:', formData);
    setIsInterviewModalOpen(false);
  };

  const handleSubmitSubmissionForm = (formData) => {
    console.log('Submission data:', formData);
    setIsSubmissionModalOpen(false);
  };

  const handleSubmitAttendanceForm = (attendanceReason) => {
    console.log('Attendance Reason:', attendanceReason);
    setIsAttendanceModalOpen(false);
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <div key={index} className="option" onClick={() => handleOptionClick(option)}>
          {option}
        </div>
      ))}
      {/* Modal for interview form */}
      <AddInterview isOpen={isInterviewModalOpen} onClose={handleCloseInterviewModal} onSubmit={handleSubmitInterviewForm}>
        {/* Interview form content */}
      </AddInterview>

      {/* Modal for submission form */}
      {isSubmissionModalOpen && (
        <AddSubmission onClose={handleCloseSubmissionModal} onSubmit={handleSubmitSubmissionForm}>
          {/* Submission form content */}
        </AddSubmission>
      )}

      {/* Modal for attendance form */}
      <AddAttendance isOpen={isAttendanceModalOpen} onClose={handleCloseAttendanceModal} onSubmit={handleSubmitAttendanceForm} />
    </div>
  );
};

export default EmployeeOptions;
