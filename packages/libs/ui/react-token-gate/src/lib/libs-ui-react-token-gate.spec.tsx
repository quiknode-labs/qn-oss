import { render } from '@testing-library/react';

import LibsUiReactTokenGate from './libs-ui-react-token-gate';

describe('LibsUiReactTokenGate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsUiReactTokenGate />);
    expect(baseElement).toBeTruthy();
  });
});
