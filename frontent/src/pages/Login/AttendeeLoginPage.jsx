// src/components/AttendeeLoginPage.js
import React, { useState } from 'react';

const AttendeeLoginPage = () => {
  // State to manage form fields
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data here, e.g., send it to a server
    console.log({
      name,
      year,
      rollNo,
      email,
    });
    // Add additional logic for authentication or API calls
  };

  return (
    <div>
      <h2>Attendee Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Year:
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </label>
        <br />

        <label>
          Roll No:
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AttendeeLoginPage;