import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { mdiEmail } from '@mdi/js';
import { Icon } from '@mdi/react';
import Section from '../../UI/Section';

const WorkWithUs = ({ i18n }) => {
  const { Title, Paragraph } = Typography;
  const lang = i18n.screenGroups.us.screens.workWithUs.mainSection;
  return (
    <Section fullHeight bgColor='#415161' bgImage={lang.bgImage}>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Icon
            path={mdiEmail}
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
          <Paragraph
            style={{
              color: 'white',
            }}
          >
            {lang.subtitle}
          </Paragraph>

          <Button
            type='primary'
            size='large'
            href={`mailto:${i18n.buttons.contact}`}
          >
            {i18n.buttons.contact}
          </Button>
        </Col>
      </Row>
    </Section>
  );
};

WorkWithUs.propTypes = {};
export default WorkWithUs;
