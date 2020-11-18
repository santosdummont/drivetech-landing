import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Menu, Row, Col } from 'antd';
import './styles.less';

const LinkBar = ({ links, isMobile }) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const desktop = (
    <Menu
      mode={isMobile ? 'vertical-left' : 'horizontal'}
      selectedKeys={history.location.pathname}
    >
      {links &&
        links.map((link, index) => {
          return (
            <Menu.Item key={link.path}>
              <Link to={link.path}>{link.title}</Link>
            </Menu.Item>
          );
        })}
    </Menu>
  );
  const mobile = (
    <>
      <Row>
        <Col>
          {links &&
            links.map((link, index) => {
              return (
                <Button
                  key={index}
                  block
                  type='text'
                  className={`link-bar-button ${
                    pathname === link.path ? 'active' : null
                  }`}
                >
                  <Link to={link.path}>{link.title}</Link>
                </Button>
              );
            })}
        </Col>
      </Row>
    </>
  );
  return <>{isMobile ? mobile : desktop}</>;
};

export default LinkBar;
