/** @jsxImportSource theme-ui */

import * as styles from './landing.feat.styles';

import { Flex, PageHeader } from '@infotrack/zenith-ui';

interface LandingPageProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LandingPage = (props: LandingPageProps) => {
  return (
    <Flex sx={styles.wrapper}>
      <PageHeader
        paths={['test', 'test2', 'test3']}
        imageSrc="https://cf.infotrack.com.au/new-ui-assets/authority_logos/vic_lrs_mark.svg"
      />
    </Flex>
  );
};
