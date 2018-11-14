import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const year = (new Date()).getFullYear();

    return (
      <footer>&copy;{year} - <a href="https://github.com/Jonur">Jonur</a></footer>
    )
  }
};
