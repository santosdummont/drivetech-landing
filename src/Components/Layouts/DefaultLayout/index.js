import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import { useResizeObserver } from '../../../Utils/utils';
import { NavBar, Footer, ScrollHandler } from '../LayoutElements';
import { Layout } from 'antd';
import i18n from '../../../i18n';

const DefaultLayout = ({ path, Component, solidNavBar }) => {
  const language = i18n();
  const navRef = useRef();
  const navBarDimensions = useResizeObserver(navRef);
  const isMobile = navBarDimensions && navBarDimensions.width < 1024;
  const navBarWidth = navBarDimensions && navBarDimensions.width;
  const navBarHeight = navBarDimensions && navBarDimensions.height;
  const { Content } = Layout;

  return (
    <Layout>
      <ScrollHandler offSetTop={navBarHeight} />
      <NavBar
        useRef={navRef}
        isMobile={isMobile}
        drawerWidth={navBarWidth}
        solid={solidNavBar}
        i18n={language}
      />
      <Content style={{ marginTop: -navBarHeight }}>
        <Route
          path={path}
          render={() => (
            <Component
              isMobile={isMobile}
              i18n={language}
              topOffset={navBarHeight}
            />
          )}
        ></Route>
      </Content>
      <Footer isMobile={isMobile} />
    </Layout>
  );
};

export default DefaultLayout;
