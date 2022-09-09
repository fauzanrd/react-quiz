import { useRef } from 'react';

const Input = ({ onKeywordChange }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    typeof onKeywordChange === 'function' && onKeywordChange(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
