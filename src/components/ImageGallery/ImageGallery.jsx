import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import { Component } from 'react';
// import API from 'services/Api';

class ImageGallery extends Component {
  render() {
    // console.log(this.state.data);
    return (
      <ul className={s.ImageGallery}>
        {this.props.data.map(img => (
          <ImageGalleryItem
            key={img.id}
            image={img.webformatURL}
            largeImage={img.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
