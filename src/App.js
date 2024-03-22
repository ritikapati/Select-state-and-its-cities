import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const handleState = (e) => {
    const state = e.target.value;
    console.log(e);
    setSelectedState(state);
    if (state === 'karnataka') {
      setCities(['BANGALORE', 'HUBLI', 'MYSORE','VIJAYAPUR','TUMKUR']);
    } else if (state === 'maharashtra') {
      setCities(['MUMBAI', 'PUNE', 'NAGPUR','NASHIK','AURANGABAD']);
    } else if (state === 'tamil nadu') {
      setCities(['CHENNAI', 'COMBAITORE', 'MADURAI','TRICHY']);
    } else {
      setCities([]);
    }
    setSelectedCity('');
  };

  const handleCity = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <h1>Select state</h1>
      <select value={selectedState} onChange={handleState}>
        <option value="">select</option>
        <option value="karnataka">KARNATAKA</option>
        <option value="maharashtra">MAHARASHTRA</option>
        <option value="tamil nadu">TAMIL NADU</option>
      </select>
      <h1>Select city</h1>
      <select
        value={selectedCity}
        onChange={handleCity}
        disabled={!selectedState}
      >
        <option value="">select </option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
