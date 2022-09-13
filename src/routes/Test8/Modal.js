import { cssModal } from './style';

const Modal = ({ data = {}, resetForm }) => {
  const handleReset = () => {
    if (typeof resetForm === 'function') resetForm();
  };

  return (
    <div className={cssModal}>
      Name: {data.name}
      <br />
      Age: {data.age}
      <br />
      Address: {data.address}
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Modal;
