import React from 'react';
import Section from '../../UI/Section';
import { Typography, Row, Col } from 'antd';
import './styles.less';

const BrandsSection = ({ title }) => {
  const { Title } = Typography;
  return (
    <>
      <Section>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Title level={2} style={{ textAlign: 'center', width: '100%' }}>
              {title}
            </Title>
          </Col>
          <Col lg={4} xs={12}>
            <img
              alt='brand'
              src='https://storage.googleapis.com/website-production/uploads/2020/06/Souncloud.svg'
            />
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <img
              alt='brand'
              src='https://storage.googleapis.com/website-production/uploads/2020/06/Souncloud.svg'
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <img
              alt='brand'
              src='https://storage.googleapis.com/website-production/uploads/2020/06/Souncloud.svg'
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <img
              alt='brand'
              src='https://storage.googleapis.com/website-production/uploads/2020/06/Souncloud.svg'
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <img
              alt='brand'
              src='https://storage.googleapis.com/website-production/uploads/2020/06/Souncloud.svg'
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <img
              alt='brand'
              src='https://storage.googleapis.com/website-production/uploads/2020/06/Souncloud.svg'
            />
          </Col>
        </Row>
      </Section>
    </>
  );
};
export default BrandsSection;
