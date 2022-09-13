import { css, keyframes } from 'react-emotion';

const sun = 80;

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
});

export const cssSun = css({
  width: sun,
  height: sun,
  backgroundColor: 'yellow',
  borderRadius: sun / 2,
  position: 'relative',
});

const randomNum = (max) => Math.floor(Math.random() * (max + 1));

export const cssPlanet = (range = 0) => {
  const planet = 20;
  const color = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
  const revolveTime = range / 30;

  return css({
    width: planet,
    height: planet,
    borderRadius: planet / 2,
    backgroundColor: color,
    position: 'absolute',
    transformOrigin: range,
    top: sun / 2 - planet / 2,
    left: (range - sun / 2) * -1,
    animation: `${revolve} ${revolveTime}s linear infinite`,
  });
};

const revolve = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});
