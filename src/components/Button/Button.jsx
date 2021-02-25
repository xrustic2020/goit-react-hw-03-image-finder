import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className={s.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
