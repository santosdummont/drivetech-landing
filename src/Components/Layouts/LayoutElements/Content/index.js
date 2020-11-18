import React from 'react';
import Grid from '../../../UI/Grid';
import styles from './styles.less';
const Content = ({ maxWidth, fixed, children, topOffset }) => {
  return (
    <Grid className={styles.contentContainer} justify='center'>
      {children}
    </Grid>
  );
};

export default Content;
