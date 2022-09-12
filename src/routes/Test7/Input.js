const Input = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
