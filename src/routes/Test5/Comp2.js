import { cssWrapper } from './style';

const Comp2 = ({ inputValue }) => {
  return (
    <>
      <div className={cssWrapper}>Latest inputted value is: {inputValue}</div>
    </>
  );
};

export default Comp2;
