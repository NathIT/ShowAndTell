// import from test utils to get access to Context
import { T, render } from '../../utils/testWrapper.utils';

import { LandingPage } from './landing.feat';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';

afterEach(T.cleanup);

describe('Testing the Landing Page Page', () => {
  it('Renders', () => {
    const { getByText } = render(<LandingPage />);
    prettyDOM();
    const target = getByText('test');
    const target2 = getByText('test3');

    expect(target).toBeInTheDocument();
    expect(target2).toBeInTheDocument();
  });
});
