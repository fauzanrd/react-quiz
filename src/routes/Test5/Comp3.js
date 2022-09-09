import { cssWrapper } from './style';

import { useState } from 'react';
import Comp4 from './Comp4';
import { useNo5 } from '../../provider/no5Provider';

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [showModal, setShowModal] = useState(false);
  const [{ mynumber }] = useNo5();

  return (
    <>
      <div className={cssWrapper}>The Inputted Value is: {mynumber}</div>
      <button type="button" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      {showModal && <Comp4 />}
    </>
  );
};

export default Comp3;
