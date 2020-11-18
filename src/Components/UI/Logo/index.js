import React from 'react';

const Logo = ({ src, alt, width }) => {
  return <img src={src} alt={alt} style={{ width: width }} />;
};

export default Logo;
