import { useState, useEffect } from 'react';
import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';

import API from './services/Api';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setData([]);
    setLoading(true);
    API(query)
      .then(images => setData(images))
      .finally(() => setLoading(false));
  }, [query]);

  useEffect(() => {
    API(query, page)
      .then(images => setData(prev => [...prev, ...images]))
      .finally(() => {
        setTimeout(scrolling(), 500);
      });
  }, [page]);

  const onSubmit = searchQuery => {
    setQuery(searchQuery);
    setLoading(true);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} />
      {data && (
        <ImageGallery data={data} onNextPage={onNextPage} query={query} />
      )}
      {loading && <Loader />}
    </div>
  );
};

// class App extends Component {
//   state = {
//     query: '',
//     data: null,
//     page: 1,
//     isLoading: false,
//   };

//   onNextPage = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   setData = response => {
//     this.setState({ data: response });
//   };

//   scrolling = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;

//     if (query !== prevState.query) {
//       this.setState({ data: null, isLoading: true });
//       API(query)
//         .then(images => this.setState({ page: 1, data: images }))
//         .finally(() => this.setState({ isLoading: false }));
//     }
//     if (page > prevState.page) {
//       API(query, page)
//         .then(images =>
//           this.setState(prev => ({ data: [...prev.data, ...images] })),
//         )
//         .finally(() => {
//           setTimeout(this.scrolling(), 500);
//         });
//     }
//   }

//   onSubmit = searchQuery => {
//     this.setState({ query: searchQuery, isLoading: true });
//   };

//   render() {
//     const { data, isLoading } = this.state;

//     return (
//       <div className={s.App}>
//         <Searchbar onSubmit={this.onSubmit} />
//         {data && (
//           <ImageGallery
//             data={data}
//             onNextPage={this.onNextPage}
//             query={this.state.query}
//           />
//         )}
//         {isLoading && <Loader />}
//       </div>
//     );
//   }
// }

export default App;
