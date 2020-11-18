import React from 'react';
// import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import Section from '../../UI/Section';
import TextGenerator from '../../UI/TextGenerator';
import LinkBar from '../../UI/LinkBar';
import paths from '../../../Routes/paths';
import './styles.less';
const Terms = ({ isMobile, i18n, topOffset }) => {
  const lang = i18n.screenGroups.legal.screens;
  const { Title } = Typography;

  return (
    <>
      <Section topOffset={topOffset} style={{ paddingTop: 100 }}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <LinkBar
              isMobile={isMobile}
              links={[
                {
                  title: lang.terms.title,
                  path: paths.TERMS,
                },
                {
                  title: lang.privacy.title,
                  path: paths.PRIVACY,
                },
              ]}
            />
          </Col>
          <Col span={24}>
            <Title level={1}>{lang.privacy.title}</Title>
            <TextGenerator contents={lang.privacy.contents} />
          </Col>
        </Row>
      </Section>
    </>
  );
};

Terms.propTypes = {};

export default Terms;
