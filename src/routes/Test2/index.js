import { useState } from 'react';
import Input from './Input';
import Label from './Label';

const Test2 = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const onLabelClose = () => {
    setInputValue('');
  };

  return (
    <div>
      {inputValue}
      <ul>
        <li>Render user input value inside the label below</li>
        <li>
          show "close button" only when hovered, and clear the input value when
          clicked.
        </li>
      </ul>
      <p>
        <Label labelText={inputValue} onClose={onLabelClose} />
      </p>
      <Input inputValue={inputValue} onInputChange={onInputChange} />
    </div>
  );
};

export default Test2;
