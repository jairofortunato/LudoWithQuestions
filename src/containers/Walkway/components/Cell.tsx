import React from 'react';

import { getStyleObject } from 'containers/utils';
import { CELL_SIZE } from 'globalConstants';

import styles from './Cell.module.css';

export class Cell extends React.PureComponent {
  render() {
    return (
      <div className={styles.Container} style={getStyleObject(CELL_SIZE, CELL_SIZE)}/>
    );
  }
}
