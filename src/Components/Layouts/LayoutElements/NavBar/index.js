import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { Menu, Row, Col, Button, Affix, Drawer } from 'antd';
import logo from '../../../../Theme/Images/logo-new-en.png';
import logoB from '../../../../Theme/Images/logo-bnw.png';
import routes from '../../../../Routes/siteRoutes';
import './styles.less';
import SubMenu from 'antd/lib/menu/SubMenu';
import GetDemo from '../../../Modals/GetDemo';

const NavBar = ({
  maxWidth,
  useRef,
  isMobile,
  drawerWidth,
  solid = true,
  i18n,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [invertedNavBar, setInvertedNavBar] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerMenu = true;
  const lang = i18n.buttons;
  const history = useHistory();
  const pathName = history.location.pathname;
  const renderRoutes = (routes, isDrawer) =>
    routes.map((route, index) => {
      if (route.subRoutes)
        return (
          <SubMenu
            key={index}
            title={route.title}
            className={`menu-item ${
              invertedNavBar || solid || isDrawer ? '' : 'menu-item-inverted'
              }`}
          >
            {route.subRoutes.map((subRoute, index) => (
              <Menu.Item key={subRoute.path || subRoute.title}>
                {subRoute.path ? (
                  <Link to={subRoute.path} onClick={() => setOpenDrawer(false)}>
                    {subRoute.title}
                  </Link>
                ) : subRoute.url ? (
                  <a href={subRoute.url}>{subRoute.title}</a>
                ) : (
                      subRoute.title
                    )}
              </Menu.Item>
            ))}
          </SubMenu>
        );
      else
        return (
          <Menu.Item
            key={route.path || route.title}
            className={`menu-item ${
              invertedNavBar || solid ? '' : 'menu-item-inverted'
              }`}
          >
            {route.path ? (
              <Link to={route.path} onClick={() => setOpenDrawer(false)}>
                {route.title}
              </Link>
            ) : route.url ? (
              <a className='menu-item-link' href={route.url}>
                {route.title}
              </a>
            ) : (
                  route.title
                )}
          </Menu.Item>
        );
    });

  const mobile = (
    <Row justify='space-between' align='middle'>
      <Col flex='120px' className='navbar-logo'>
        <Link to='/'>
          <img src={invertedNavBar || solid ? logo : logoB} alt='Drivetech' />
        </Link>
      </Col>
      <Col>
        <Button
          type='text'
          icon={
            <Icon
              path={mdiMenu}
              style={{
                color: invertedNavBar || solid ? 'black' : 'white',
              }}
            />
          }
          onClick={() => setOpenDrawer(true)}
        ></Button>
      </Col>
    </Row>
  );

  const desktop = (
    <Row
      justify='space-between'
      style={{ maxWidth: maxWidth }}
      className='desktop-navbar'
      align='middle'
    >
      <Col flex='140px' className='navbar-logo'>
        <Link to='/'>
          <img src={invertedNavBar || solid ? logo : logoB} alt='Drivetech' />
        </Link>
      </Col>
      <Col>
        <Row align='middle'>
          <Col>
            <Menu
              mode='horizontal'
              selectedKeys={pathName}
              style={{ borderBottom: 0 }}
            >
              {renderRoutes(routes)}
            </Menu>
          </Col>
          <Col>
            <Button
              type='primary'
              size='large'
              block
              onClick={() => setIsVisible(true)}
            >
              {lang.freeDemo}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  const drawer = (
    <Drawer
      title='Drivetech'
      width={drawerWidth}
      onClose={() => setOpenDrawer(false)}
      visible={openDrawer}
      bodyStyle={{ padding: 10 }}
    >
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Menu
            style={{ borderBottom: 0 }}
            mode='inline'
            selectedKeys={pathName}
          >
            {renderRoutes(routes, drawerMenu)}
          </Menu>
        </Col>
        <Col span={24}>
          <Button size='large' block>
            {lang.login}
          </Button>
        </Col>
        <Col span={24}>
          <Button
            type='primary'
            size='large'
            block
            onClick={() => setIsVisible(true)}
          >
            {lang.freeDemo}
          </Button>
        </Col>
      </Row>
    </Drawer>
  );

  return (
    <>
      <Affix onChange={() => setInvertedNavBar(!invertedNavBar)}>
        <span></span>
      </Affix>
      <div ref={useRef} id="navbar" style={{ position: 'sticky', top: 0, zIndex: 2 }}>
        <div
          name='navbar-container'
          className={`navbar-container ${
            invertedNavBar || solid ? 'active' : 'default'
            }`}
        >
          <div className='navbar-content' justify='center'>
            {isMobile ? mobile : desktop}
          </div>
        </div>
        {drawer}
      </div>
      <GetDemo visible={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
};

export default NavBar;
