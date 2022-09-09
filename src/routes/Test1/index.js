import { useState } from 'react';

const Test1 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {inputValue}
      </p>
      <input type="text" placeholder="input here" onChange={handleChange} />
    </div>
  );
};

export default Test1;
