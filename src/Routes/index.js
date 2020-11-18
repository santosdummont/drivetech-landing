import React, { Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import paths from './paths';
import ScrollToTop from './scrollToTop';
import Loading from '../Components/UI/Loading';
import DefaultLayout from '../Components/Layouts/DefaultLayout';
import Home from '../Components/Screens/Home';
import Security from '../Components/Screens/Security';
import Control from '../Components/Screens/Control';
import Tracking from '../Components/Screens/Tracking';
import Terms from '../Components/Screens/Terms';
import Privacy from '../Components/Screens/Privacy';
import NotFound from '../Components/Screens/NotFound';
import WorkWithUs from '../Components/Screens/WorkWithUs';

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <DefaultLayout
            exact
            path={paths.HOME}
            Component={Home}
            solidNavBar={false}
          />
          <DefaultLayout exact path={paths.SECURITY} Component={Security} />
          <DefaultLayout exact path={paths.CONTROL} Component={Control} />
          <DefaultLayout exact path={paths.TRACKING} Component={Tracking} />
          <DefaultLayout exact path={paths.TERMS} Component={Terms} />
          <DefaultLayout exact path={paths.PRIVACY} Component={Privacy} />
          <DefaultLayout exact path={paths.WORK_WITH_US} Component={WorkWithUs} />
          <DefaultLayout Component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
