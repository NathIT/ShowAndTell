import * as React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AnalyticsWrapper } from '@infotrack/zenith-ui/au';
import { InputComponent } from '../components';
import { LandingPage } from '../features';
import { RoutePaths } from '../models';

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route
        path={RoutePaths.base}
        element={
          <AnalyticsWrapper path={RoutePaths.base}>
            <LandingPage />
          </AnalyticsWrapper>
        }
      />

      <Route
        path={RoutePaths.component}
        element={
          <AnalyticsWrapper path={RoutePaths.component}>
            <InputComponent name={'Welcome'} />
          </AnalyticsWrapper>
        }
      />
    </Routes>
  </BrowserRouter>
);
