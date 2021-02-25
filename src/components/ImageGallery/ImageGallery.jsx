import { Component } from 'react';

import s from './ImageGallery.module.css';

import ImageGalleryItem from './ImageGalleryItem';

import Button from 'components/Button';

class ImageGallery extends Component {
  // componentDidUpdate() {
  //   console.log('Обновился ImageGallery');
  // }
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

export default ImageGallery;
