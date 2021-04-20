// import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={s.Button}>
      Load more
    </button>
  );
};

// class Button extends Component {
//   render() {
//     return (
//       <button type="button" onClick={this.props.onClick} className={s.Button}>
//         Load more
//       </button>
//     );
//   }
// }

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
