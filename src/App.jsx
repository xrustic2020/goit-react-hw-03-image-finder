import { Component } from 'react';

import s from './App.module.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import API from './services/Api';

export default class App extends Component {
  state = {
    query: '',
    data: null,
    count: 0,
  };

  setData = response => {
    this.setState({ data: response });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      API(this.state.query).then(images => this.setState({ data: images }));
    }
  }

  onSubmit = searchQuery => {
    this.setState({ query: searchQuery });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.data && <ImageGallery data={this.state.data} />}
      </div>
    );
  }
}
