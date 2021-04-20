import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button
          type="submit"
          aria-label="Искать картинки"
          className={s['SearchForm-button']}
        >
          <span className={s['SearchForm-button-label']}>
            <BsSearch />
          </span>
        </button>

        <input
          className={s['SearchForm-input']}
          type="text"
          onChange={evt => setSearchQuery(evt.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handlerInput = evt => {
//     this.setState({ searchQuery: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state.searchQuery);
//   };

//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button
//             type="submit"
//             aria-label="Искать картинки"
//             className={s['SearchForm-button']}
//           >
//             <span className={s['SearchForm-button-label']}>
//               <BsSearch />
//             </span>
//           </button>

//           <input
//             className={s['SearchForm-input']}
//             type="text"
//             onChange={this.handlerInput}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
