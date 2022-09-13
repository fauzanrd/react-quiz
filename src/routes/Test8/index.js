import { useState } from 'react';
import Modal from './Modal';
import { cssForm, cssFieldset } from './style';
import { DEFAULT_DATA } from './_data';

const Test8 = () => {
  const [data, setData] = useState({ ...DEFAULT_DATA });
  const [showModal, setShowModal] = useState(false);

  const resetForm = () => {
    setData({ ...DEFAULT_DATA });
    setShowModal(false);
  };

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((v) => ({ ...v, [name]: value }));
  };

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>
          Reset the form and close the modal when user click the reset button
        </li>
      </ul>
      <form
        className={cssForm}
        onSubmit={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <fieldset className={cssFieldset} disabled={showModal}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={data.age}
            onChange={handleInput}
          />
          <textarea
            type="text"
            placeholder="address"
            name="address"
            value={data.address}
            onChange={handleInput}
          />
          <button>Submit</button>
        </fieldset>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {showModal && <Modal data={data} resetForm={resetForm} />}
    </div>
  );
};

export default Test8;
