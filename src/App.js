import styles from './app.scss';
import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <div
        className={styles.app}
        >Hello
      </div>
    );
  }
}
