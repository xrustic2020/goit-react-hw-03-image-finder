import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handler);
  }

  handler = evt => {
    if (evt.code === 'Escape' || evt.currentTarget !== evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.handler}>
        <div className={s.Modal}>
          <img src={this.props.image} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
