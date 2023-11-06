/** @jsxImportSource theme-ui */

import { AppProvider } from './context';
import { Layout } from '@infotrack/zenith-ui/au';
import { Router } from './router/Router';

const App = () => {
  return (
    /*
      If you do not require the full AU Services Layout (or are in a non-AU/NZ region), you can use SimpleLayout instead of Layout:
      <SimpleLayout region="XX" applicationName="XXXXX" basename="XXXXX" headerContent={<p>I can put anything here</p>} >
    */
    <Layout
      applicationName="XXXXX"
      basename="XXXXX"
      clientVersion="XXXXX"
      deliverySystem="ALL Delivery Systems"
      clientVersionCheckProps={{ endpoint: '/app/version' }}>
      <AppProvider>
        <Router />
      </AppProvider>
    </Layout>
  );
};

export default App;
