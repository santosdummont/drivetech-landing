import React from 'react';
import { Typography, Avatar, Row, Col } from 'antd';
import './styles.less';
const UserTestimony = ({
  name,
  avatar,
  logo,
  testimony,
  companyName,
  charge,
}) => {
  const { Title, Paragraph } = Typography;
  return (
    <Row gutter={[32, 32]} justify='center' className='testimony-container'>
      <Col span={24} className='text-center'>
        <Avatar size={100} src={avatar} alt={name} />
      </Col>
      <Col span={24} className='text-center'>
        <div className='text-center'>
          <img src={logo} alt={companyName} className='testimony-logo' />
        </div>
      </Col>
      <Col span={24} className='text-center'>
        <Paragraph className='testimony-paragraph'>{testimony}</Paragraph>
      </Col>
      <Col span={24} className='text-center'>
        <Title level={4} className='text-center'>
          {name}
        </Title>
        <Paragraph>{charge}</Paragraph>
      </Col>
    </Row>
  );
};

export default UserTestimony;
