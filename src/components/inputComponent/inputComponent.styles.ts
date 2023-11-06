import { ThemeUIStyleObject } from 'theme-ui';

export const wrapper: ThemeUIStyleObject = {
  flexDirection: 'column',
  padding: '2rem',
  width: '100%',
  height: '60vh',
};

export const innerWrapper = (canDragDrop: boolean): ThemeUIStyleObject => ({
  pointerEvents: canDragDrop ? undefined : 'none',
});

export const word: ThemeUIStyleObject = {
  variant: 'text.hero',
  marginTop: '1rem',
};

export const input: ThemeUIStyleObject = {
  padding: '3rem',
  flexDirection: 'column',
};
