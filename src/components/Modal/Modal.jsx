import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ image, alt, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const handler = evt => {
    if (evt.code === 'Escape' || evt.currentTarget !== evt.target) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handler}>
      <div className={s.Modal}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
