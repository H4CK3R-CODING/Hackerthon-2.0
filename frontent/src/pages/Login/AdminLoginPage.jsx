// src/components/AdminLoginPage.js
import React, { useState } from 'react';
import "../../css/Login/AdminLoginPage.css"

const AdminLoginPage = () => {
  // State to manage form fields
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [minPercentageTime, setMinPercentageTime] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data here, e.g., send it to a server
    console.log({
      eventName,
      eventDescription,
      startTime,
      endTime,
      minPercentageTime,
      adminEmail,
    });
    // Add additional logic for authentication or API calls
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Start Time:
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          End Time:
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Minimum Percentage Time:
          <input
            type="number"
            value={minPercentageTime}
            onChange={(e) => setMinPercentageTime(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Admin Email:
          <input
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;