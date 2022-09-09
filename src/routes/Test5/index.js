import { cssWrapper } from './style';

import Comp1 from './Comp1';
import Comp3 from './Comp3';
import No5Provider, { useNo5 } from '../../provider/no5Provider';

const question = (
  <ul>
    <li>
      primarily, user can input the value from <code>#mynumber</code>
    </li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>
      Show <b>ODD</b> or <b>EVEN</b> in first render section
    </li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code>{' '}
      checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of
      input in <code>Comp1</code> and it's value in <code>Comp2</code>
    </li>
    <li>
      <code>Comp2</code> will display latest inputted from{' '}
      <code>#mynumber</code> &amp; <code>#mynumber1</code>
    </li>
    <li>
      <code>Comp3</code> will display <code>#mynumber</code>
    </li>
    <li>
      show <code>Comp4</code> modal when user click <b>Show Modal</b> button in{' '}
      <code>Comp3</code>
    </li>
    <li>
      update whole <code>input</code> and value render when user input{' '}
      <code>#mynumber2</code>
    </li>
  </ul>
);

const Test5 = () => {
  const [{ mynumber }, dispatch] = useNo5();

  const oddEven = Math.abs(mynumber) % 2 === 1 ? 'ODD' : 'EVEN';

  const onChangeMynumber = (e) =>
    dispatch({ type: 'setMynumber', payload: e.target.value });
  const incrementMynumber = () => dispatch({ type: 'increment' });
  const decrementMynumber = () => dispatch({ type: 'decrement' });

  return (
    <div>
      {question}
      <button id="numbermin" type="button" onClick={decrementMynumber}>
        -
      </button>
      <input
        id="mynumber"
        type="text"
        placeholder="input mynumber"
        value={mynumber}
        onChange={onChangeMynumber}
      />
      <button id="numberplus" type="button" onClick={incrementMynumber}>
        +
      </button>
      <br />
      <br />
      <div className={cssWrapper}>The inputted value is {oddEven}</div>
      <Comp1 parentNumber={mynumber} />
      <Comp3 />
    </div>
  );
};

const Page = () => (
  <No5Provider>
    <Test5 />
  </No5Provider>
);

export default Page;
