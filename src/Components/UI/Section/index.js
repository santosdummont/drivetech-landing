import React from 'react';
import { Row, Col, Layout } from 'antd';
import './styles.less';
const Section = ({
  children,
  fullWidth,
  fullHeight,
  bgColor,
  bgImage,
  height,
  style,
  topOffset,
  bgSize,
  alignItems,
  id,
}) => {
  return (
    <Layout
      id={`#${id}`}
      className={`SectionContainer ${fullWidth && 'maxWidth'} 
      ${fullHeight && 'fullHeight'}
      `}
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
        backgroundBlendMode: 'soft-light',
        backgroundSize: bgSize || 'cover',
        height: height,
        paddingTop: topOffset,
        alignItems: alignItems,
        ...style,
      }}
    >
      <Row
        className={`section ${fullWidth && 'maxWidth'} ${
          fullHeight && 'fullHeight'
        }`}
      >
        <Col span={24}>{children}</Col>
      </Row>
    </Layout>
  );
};

export default Section;
