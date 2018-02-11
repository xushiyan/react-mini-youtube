import React, { Component } from 'react';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDopZpl1-aBFAnktFHvvIgrnvf84lB2su0';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
