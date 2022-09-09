const Input = ({ inputValue, onInputChange }) => {
  const handleChange = (e) => {
    typeof onInputChange === 'function' && onInputChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="input here"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Input;
