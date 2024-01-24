import React, { useState } from 'react';

const Dropdown = () => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Dummy data for dropdown options
  const options = ['Dr. John Doe, Physiotherapy, New York', 'Dr. Jane Smith, Orthopedics, Los Angeles', 'Dr. Michael Johnson, Cardiology, Chicago', ' '];

  // Event handler for when the dropdown value changes
  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedValue && <p> {selectedValue}</p>}
    </div>
  );
};

export default Dropdown;
