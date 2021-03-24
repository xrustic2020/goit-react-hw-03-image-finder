import { Component } from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button';

class ImageGallery extends Component {
  render() {
    return (
      <>
        {this.props.data && <></>}
        {this.props.data.length > 0 ? (
          <>
            <ul className={s.ImageGallery}>
              {this.props.data.map(img => (
                <ImageGalleryItem
                  key={img.id}
                  image={img.webformatURL}
                  name={img.tags}
                  largeImage={img.largeImageURL}
                />
              ))}
            </ul>

            <Button onClick={this.props.onNextPage} />
          </>
        ) : (
          <h2 style={{ textAlign: 'center' }}>
            По запросу "{this.props.query}" ничего не найдено, попробуй ещё раз
          </h2>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.array,
  onNextPage: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
