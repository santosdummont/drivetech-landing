import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Row, Col } from 'antd';
import './styles.less';
import TextCenter from '../TextCenter';
import SectionsShortcuts from '../../SectionsShortcuts';

const MainSection = ({
  name,
  title,
  subtitle,
  baitTitle,
  baitSubtitle,
  buttons,
  bgImage,
  bgColor,
  dark,
  image,
  isMobile,
  style,
  brands,
  topOffset,
  sections,
}) => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: bgColor || '#415161',
          backgroundImage: `url(${bgImage})`,
          backgroundBlendMode: 'soft-light',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          paddingTop: topOffset,
          ...style,
        }}
      >
        <div className='top-content'>
          <div style={{ width: '100%' }}>
            <Row align='middle' gutter={[32, 64]}>
              <Col lg={12} style={{ textAlign: isMobile ? 'center' : null }}>
                <Text
                  style={{
                    color: dark ? 'white' : null,
                  }}
                  className='main-section-name'
                >
                  {name}
                </Text>
                <Title
                  style={{
                    color: dark ? 'white' : null,
                    marginTop: 20,
                    textAlign: isMobile ? 'center' : null,
                  }}
                  level={1}
                >
                  {title}
                </Title>
                <Paragraph
                  style={{
                    color: dark ? 'white' : null,
                    textAlign: isMobile ? 'center' : null,
                  }}
                >
                  {subtitle}
                </Paragraph>
                {buttons &&
                  buttons.map((button, index) => (
                    <Button
                      key={index}
                      type={button.type}
                      size='large'
                      onClick={button.onClick}
                      style={{
                        alignSelf: isMobile ? 'center' : null,
                        color: button.textColor,
                        ...button.buttonStyles,
                      }}
                    >
                      {button.text}
                    </Button>
                  ))}
              </Col>
              <Col lg={12}>
                {sections ? (
                  <SectionsShortcuts dark={dark} sections={sections} />
                ) : null}
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
          </div>
        </div>
        {brands && (
          <div name='brands' style={{ background: '#fafbfd' }}>
            <div className='main-section-brands-container'>
              <Row gutter={[32]} justify='center'>
                {brands.map((brand, index) => (
                  <Col key={index} lg={24 / (brands.length + 1)} xs={8}>
                    <a
                      href={brand.url}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <img
                        alt={brand.name}
                        src={brand.src}
                        className={`brands-image ${isMobile ? 'mobile' : null}`}
                      />
                    </a>
                  </Col>
                ))}
              </Row>
              <TextCenter title={baitTitle} subtitle={baitSubtitle} heading />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

MainSection.propTypes = {
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
  sections: PropTypes.array,
};

export default MainSection;
