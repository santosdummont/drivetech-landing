import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography } from 'antd';
import { Icon } from '@mdi/react';
import routes from '../../../../Routes/siteRoutes';
import dtLockIcon from '../../../../Theme/Images/dt-lock-icon.svg';
import './styles.less';
import i18n from '../../../../i18n';
import { TELEPHONES, SOCIAL } from '../../../../Utils/constants';
import Flag from 'react-world-flags';
import paths from '../../../../Routes/paths';

const Footer = ({ copyRight, title, icon, isMobile }) => {
  const lang = i18n();

  const year = new Date().getFullYear();
  const { Text, Title } = Typography;
  const renderRoutes = (routes) =>
    routes.map((route, index) => {
      if (route.subRoutes)
        return (
          <Col key={index} lg={Math.round(24 / (routes.length + 1))} xs={24}>
            <h5 className='footer-title'>{route.title}</h5>
            {route.subRoutes.map((subRoute, index) =>
              subRoute.path ? (
                <Link
                  key={index}
                  to={subRoute.path || subRoute.url}
                  className='footer-link'
                >
                  {subRoute.title}
                </Link>
              ) : subRoute.url ? (
                <a key={index} className='footer-link' href={subRoute.url}>
                  {subRoute.title}
                </a>
              ) : (
                <span className='footer-link' key={index}>
                  {subRoute.title}
                </span>
              )
            )}
          </Col>
        );
      return null;
    });

  const renderedRoutes = renderRoutes(routes);
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <Row justify='space-between' align='top' gutter={[32, 32]}>
          <Col lg={Math.round(24 / (routes.length + 1))}>
            <img className='footer-lock-icon' alt='dt' src={dtLockIcon} />
            <Title className='footer-title'>
              {lang.screenGroups.home.screens.home.mainSection.title}
            </Title>
          </Col>
          {renderedRoutes}
        </Row>
        <Row gutter={[32]}>
          {TELEPHONES
            ? TELEPHONES.map((phone, index) => (
                <Col key={index} lg={4}>
                  <div className='footer-phone-number-container'>
                    <Flag code={phone.flag} height={12} />
                    <div>{phone.country}</div>
                  </div>
                  <div className='phone-number'>{phone.phone}</div>
                </Col>
              ))
            : null}
        </Row>
        <Row
          className='footer-bottom-content'
          align='middle'
          justify='space-between'
          gutter={[32, 32]}
        >
          <Col className='footer-col'>
            <Row gutter={[32]} align='bottom'>
              <Col span={isMobile ? 24 : null}>
                <Text className='footer-company-name'>
                  © {year} {copyRight || 'Drivetech'}{' '}
                </Text>
              </Col>
              <Col>
                <Link to={paths.TERMS} className='footer-link small'>
                  {lang.screenGroups.legal.screens.terms.title}
                </Link>
              </Col>
              <Col>
                <Link to={paths.PRIVACY} className='footer-link small'>
                  {lang.screenGroups.legal.screens.privacy.title}
                </Link>
              </Col>
            </Row>
          </Col>
          <Col className='footer-col'>
            {SOCIAL &&
              SOCIAL.map((link, index) => (
                <Button
                  key={index}
                  type='link'
                  icon={<Icon path={link.icon || null} size={1} />}
                  href={link.link}
                  target='_blank'
                  style={{ marginLeft: 10 }}
                />
              ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};
Footer.propTypes = {
  copyRight: PropTypes.string,
};
export default Footer;
