import styles from './app.scss';
import React, { Component } from 'react';
import Carousel from './components/Carousel';

export default class App extends Component {

  render() {
    return (
      <div
        className={styles.app}
        ><Carousel />
      </div>
    );
  }
}
