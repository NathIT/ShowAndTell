/**  @jsxImportSource theme-ui  */
import React, { ReactElement } from 'react';
import { DataContextProvider } from '../context/data.context';
import { Layout } from '@infotrack/zenith-ui/au';
import * as T from '@testing-library/react';

const TestWrapper = ({ children }): any => {
  return (
    // set it as big as your header
    <React.Fragment>
      <Layout
        basename="/"
        applicationName="XXXX"
        clientVersion={'1.0.0'}
        __testing
      >
        <DataContextProvider>{children}</DataContextProvider>
      </Layout>
    </React.Fragment>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<T.RenderOptions, 'wrapper'>
) => T.render(ui, { wrapper: TestWrapper, ...options });

export { T };

export { customRender as render };

/**
 *   Make sure you add additional Context providers you make here
 *   this is so your tests can access them.
 *
 *   <Zenith toastContainerOffsetTop={'4rem'}>
      <DataContextProvider>

      <YOURPROVIDER >

      {children}

      </YOURPROVIDER >

      </DataContextProvider>
    </Zenith>
 *
 *
 * */
