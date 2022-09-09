import { cssWrapper } from './style';

import { useEffect, useState } from 'react';
import Comp2 from './Comp2';
import { useNo5 } from '../../provider/no5Provider';

const Comp1 = ({ parentNumber }) => {
  const [latestInputSource, setLatestInputSource] = useState('');
  const [latestInputValue, setLatestInputValue] = useState(0);
  const [isOverwrite, setIsOverwrite] = useState(false);
  const [{ mynumber1 }, dispatch] = useNo5();

  const onChangeOverwrite = (e) => setIsOverwrite(e.target.checked);
  const onChangeMynumber1 = (e) =>
    dispatch({ type: 'setMynumber1', payload: e.target.value });

  // latest update from parent
  useEffect(() => {
    setLatestInputValue(parentNumber);
    setLatestInputSource('Test5');
  }, [parentNumber]);

  // latest update by mynumber1
  useEffect(() => {
    setLatestInputValue(mynumber1);
    setLatestInputSource('Comp1');
  }, [mynumber1]);

  return (
    <div className={cssWrapper}>
      Latest Inputted from <code>{latestInputSource}</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite:{' '}
        <input
          id="overwrite"
          type="checkbox"
          value={isOverwrite}
          onChange={onChangeOverwrite}
        />
        {isOverwrite && (
          <input
            id="mynumber1"
            type="text"
            placeholder="input mynumber1"
            value={mynumber1}
            onChange={onChangeMynumber1}
          />
        )}
      </label>
      <Comp2 inputValue={latestInputValue} />
    </div>
  );
};

export default Comp1;
