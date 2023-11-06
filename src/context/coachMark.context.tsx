import * as React from 'react';
import {
  CoachMarkArrowPosition,
  useCoachMarkContext,
} from '@infotrack/zenith-ui';

const ids = {
  welcome: 'hsWelcomeTourRun',
};

export const CoachMarkProvider = () => {
  const coachMarkContext = useCoachMarkContext();
  const [welcomeTourShouldRun, setWelcomeTourShouldRun] =
    React.useState<boolean>();
  const isStageOrDev =
    process.env.NODE_ENV !== 'production' ||
    window.location.hostname.includes('stage');

  const registerTours = () => {
    coachMarkContext.registerTours([
      {
        id: ids.welcome,
        shouldRun: welcomeTourShouldRun,
        onComplete: async () => {
          // Do something here to persist to a database somewhere
        },
        steps: [
          {
            id: 'welcomeCoachmark',
            heading: 'Demo Coachmark',
            text: 'This is a demo coachmark! Hit up the UI/UX team to create some coachmarks for your project if they havent already.',
            arrowPosition: 'top-left' as CoachMarkArrowPosition,
            canClose: isStageOrDev,
          },
        ],
      },
    ]);
  };

  React.useEffect(() => {
    // fetch some data about your coachmarks here
    // and determine which need to show
    setWelcomeTourShouldRun(true);
  }, []);

  React.useEffect(registerTours, [welcomeTourShouldRun]);

  return <React.Fragment />;
};
