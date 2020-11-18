import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Section from '../../Section';
import { Typography, Button, Row, Col } from 'antd';
import ReactPlayer from 'react-player';

import './styles.less';

const SubSection = ({
  name,
  title,
  description,
  buttons,
  bgImage,
  bgColor,
  dark,
  image,
  isMobile,
  children,
  height,
  topOffset,
  fullHeight,
  reversed,
  index,
  video,
  style,
  id,
}) => {
  const { Title, Paragraph, Text } = Typography;
  const checkOdd = (number) => {
    const odd = number % 2 === 0;
    if (odd) return true;
    return false;
  };

  return (
    <>
      <Section
        fullHeight={fullHeight && !height}
        bgColor={bgColor || 'white'}
        bgImage={bgImage}
        height={height}
        topOffset={topOffset}
        style={style}
        id={id}
      >
        <div className='main-section-content'>
          <Row
            align='middle'
            gutter={[32, 64]}
            className={`main-section-row ${
              checkOdd(index) || reversed ? 'reversed' : null
            }`}
          >
            <Col lg={12}>
              <Text
                style={{
                  color: dark ? 'white' : null,
                }}
                className='main-section-name'
                level={4}
              >
                {name}
              </Text>
              <Title
                style={{
                  color: dark ? 'white' : null,
                }}
                className='main-section-title'
                level={1}
              >
                {title}
              </Title>
              <Paragraph
                style={{
                  color: dark ? 'white' : null,
                  textAlign: isMobile ? 'center' : null,
                }}
                className='main-section-description'
              >
                {description}
              </Paragraph>
              {buttons && (
                <div className='main-section-buttonBar'>
                  {buttons.map((button, index) => (
                    <Link to={button.path}>
                      <Button
                        key={index}
                        type={button.type}
                        size='large'
                        onClick={button.onClick}
                        href={button.url}
                        style={button.buttonStyles}
                      >
                        {button.text}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </Col>
            <Col lg={12}>
              {video && <ReactPlayer url={video.url} controls={false} />}
              {image && (
                <div>
                  <img
                    className='main-section-image'
                    src={image}
                    alt='presentation'
                  />
                </div>
              )}
            </Col>
          </Row>
          {children}
        </div>
      </Section>
    </>
  );
};

SubSection.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttons: PropTypes.array,
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  dark: PropTypes.bool,
  image: PropTypes.string,
  isMobile: PropTypes.bool,
  children: PropTypes.node,
};

export default SubSection;
