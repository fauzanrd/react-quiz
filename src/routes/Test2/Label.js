import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  lineHeight: '28px',
  button: {
    display: 'none',
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  },
  ':hover': {
    button: {
      display: 'inline-block',
    },
  },
});

const Label = ({ labelText, onClose }) => {
  const handleClose = () => {
    typeof onClose === 'function' && onClose();
  };

  return (
    <span className={cssLabel}>
      {labelText}
      <button type="button" onClick={handleClose}>
        ⊗
      </button>
    </span>
  );
};

export default Label;
