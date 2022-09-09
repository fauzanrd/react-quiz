import { useNo5 } from '../../provider/no5Provider';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const [{ mynumber2 }, dispatch] = useNo5();

  const onChangeMynumber2 = (e) =>
    dispatch({ type: 'setMynumber2', payload: e.target.value });

  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input
          id="mynumber2"
          type="text"
          placeholder="input mynumber2"
          value={mynumber2}
          onChange={onChangeMynumber2}
        ></input>
      </div>
    </>
  );
};

export default Comp4;
