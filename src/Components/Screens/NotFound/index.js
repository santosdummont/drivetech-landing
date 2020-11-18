import React from 'react';
import Section from '../../UI/Section';
import { Typography, Row, Col, Button } from 'antd';
import { mdiRobotConfused } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Link } from 'react-router-dom';

const NotFound = ({ i18n }) => {
  const { Title } = Typography;
  const lang = i18n.screenGroups.notFound;
  return (
    <Section fullHeight bgColor='#415161' bgImage={lang.bgImage}>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Icon
            path={mdiRobotConfused}
            className='not-found-icon'
            color='white'
            size={6}
          />
          <Title
            level={1}
            style={{
              color: 'white',
            }}
          >
            {lang.title}
          </Title>
          <Link to='/'>
            <Button type='primary' size='large'>
              {i18n.buttons.companyName}
            </Button>
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

NotFound.propTypes = {};
export default NotFound;
