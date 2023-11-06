import { useBreakpointIndex } from '@infotrack/zenith-ui';

export const breakpoints = {
  mobile: 0,
  tablet: 1,
  desktopSmall: 2,
  desktopLarge: 3,
};

export const useIsMobile = () => useBreakpointIndex() === breakpoints.mobile;
