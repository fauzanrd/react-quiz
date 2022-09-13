import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({ planetCount = 0 }) => {
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
        {Array(planetCount)
          .fill(1)
          .map((_, idx) => (
            <div key={idx} className={cssPlanet(60 + idx * 30)} />
          ))}
      </div>
    </div>
  );
};

export default Solar;
