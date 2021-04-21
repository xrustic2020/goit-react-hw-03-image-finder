import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button';

const ImageGallery = ({ data, onNextPage, query }) => {
  return (
    <>
      {data.length > 0 ? (
        <>
          <ul className={s.ImageGallery}>
            {data.map(img => (
              <ImageGalleryItem
                key={img.id}
                image={img.webformatURL}
                name={img.tags}
                largeImage={img.largeImageURL}
              />
            ))}
          </ul>

          <Button onClick={onNextPage} />
        </>
      ) : (
        <h2 className={s.notFound}>
          По запросу "{query}" ничего не найдено, попробуй ещё раз
        </h2>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
  onNextPage: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
