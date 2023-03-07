import { render } from '@testing-library/react';

import { TokenGate } from './TokenVerify';

describe('LibsUiReactTokenGate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokenGate buttonPrompt={'hi'} />);
    expect(baseElement).toBeTruthy();
  });
});
