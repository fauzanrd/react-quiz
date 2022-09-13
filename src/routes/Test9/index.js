import { useState } from 'react';
import Solar from './Solar';

const Test9 = () => {
  const [planetCount, setPlanetCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    const number = Number(value) || 0;
    setPlanetCount(Math.max(number, 0));
  };

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input
        type="text"
        placeholder="number of planet"
        onChange={handleChange}
      />
      <Solar planetCount={planetCount} />
    </>
  );
};

export default Test9;
