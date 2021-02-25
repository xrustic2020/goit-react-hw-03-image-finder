import { Component } from 'react';

import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';

import API from './services/Api';

export default class App extends Component {
  state = {
    query: '',
    data: null, // change null []
    page: 1,
    isLoading: false,
  };

  onNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  setData = response => {
    this.setState({ data: response });
  };

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query) {
      this.setState({ data: null, isLoading: true });
      API(query)
        .then(images => this.setState({ page: 1, data: images }))
        .finally(() => this.setState({ isLoading: false }));
    }
    if (page > prevState.page) {
      API(query, page)
        .then(images =>
          this.setState(prev => ({ data: [...prev.data, ...images] })),
        )
        .finally(() => {
          setTimeout(this.scrolling(), 500);
        });
    }
  }

  onSubmit = searchQuery => {
    this.setState({ query: searchQuery, isLoading: true });
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {data && (
          <ImageGallery
            data={data}
            onNextPage={this.onNextPage}
            query={this.state.query}
          />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
