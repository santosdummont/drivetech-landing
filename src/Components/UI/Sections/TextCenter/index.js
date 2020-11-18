import React from 'react';
import { Typography, Button } from 'antd';
import Section from '../../Section';
import './styles.less';
const TextCenter = ({
  icon,
  title,
  subtitle,
  alt,
  bgColor,
  heading,
  bgImage,
  textColor,
  bgSize,
  buttons,
  children,
}) => {
  const { Title, Paragraph } = Typography;
  return (
    <Section
      style={{ paddingBottom: heading ? 0 : null }}
      bgColor={bgColor}
      bgImage={bgImage}
      bgSize={bgSize}
    >
      {icon ? (
        <div className='text-center-icon-container'>
          <img alt={alt} src={icon} className='icon' />
        </div>
      ) : null}
      <Title className='text-center' style={{ color: textColor || null }}>
        {title}
      </Title>
      {subtitle ? (
        <Paragraph
          className='text-center text-center-subtitle'
          style={{ color: textColor || null, marginBottom: heading ? 0 : null }}
        >
          {subtitle}
        </Paragraph>
      ) : null}
      {buttons && (
        <div className='text-center-buttonBar'>
          {buttons.map((button, index) => (
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
          ))}
        </div>
      )}
      {children}
    </Section>
  );
};

export default TextCenter;
