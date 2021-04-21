import { useState, useEffect } from 'react';
import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';

import API from './services/Api';
import './cat.jpg';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onNextPage = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  const scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const onSubmit = searchQuery => {
    setQuery(searchQuery);
    setLoading(true);
  };

  useEffect(() => {
    if (query) {
      API(query)
        .then(images => setData(images))
        .finally(() => setLoading(false));
    }
  }, [query]);

  useEffect(() => {
    if (page > 1) {
      setTimeout(() => {
        API(query, page)
          .then(images => setData(prev => [...prev, ...images]))
          .finally(() => {
            setLoading(false);
            setTimeout(scrolling(), 500);
          });
      }, 2000);
    }
  }, [page]);

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}
      {data && (
        <ImageGallery data={data} onNextPage={onNextPage} query={query} />
      )}
    </div>
  );
};

export default App;
