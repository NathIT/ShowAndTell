import { ThemeUIStyleObject } from 'theme-ui';

export const wrapper = (isMobile: boolean): ThemeUIStyleObject => ({
  flexDirection: isMobile ? 'column' : 'row',
  padding: '1rem',
  height: '40vh',
  '> button': {
    margin: '2rem',
  },
});
