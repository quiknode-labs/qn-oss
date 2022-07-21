import { render } from '@testing-library/react';

import LibsUiUtil from './libs-ui-util';

describe('LibsUiUtil', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsUiUtil />);
    expect(baseElement).toBeTruthy();
  });
});
