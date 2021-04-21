import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from 'components/Modal';

const modalRoot = document.querySelector('#modal-root');

const ImageGalleryItem = ({ image, name, largeImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={s.ImageGalleryItem} onClick={() => setIsOpen(prev => !prev)}>
      <img src={image} alt={name} className={s['ImageGalleryItem-image']} />
      {isOpen &&
        createPortal(
          <Modal
            image={largeImage}
            alt={name}
            onClose={() => setIsOpen(prev => !prev)}
          />,
          modalRoot,
        )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
