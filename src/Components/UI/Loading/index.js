import React from 'react';
import './styles.less';
const Loading = ({ loading, children }) => {
  return (
    <div className='loading-container'>
      <div
        className={`loading-children-container ${loading ? 'loading' : null}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Loading;
