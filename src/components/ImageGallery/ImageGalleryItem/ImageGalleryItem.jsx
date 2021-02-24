import s from './ImageGalleryItem.module.css';
const { Component } = require('react');

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={this.props.image}
          alt=""
          className={s['ImageGalleryItem-image']}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
