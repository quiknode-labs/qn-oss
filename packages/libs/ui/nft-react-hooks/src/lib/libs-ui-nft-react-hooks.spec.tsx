import { render } from '@testing-library/react';

import LibsUiNftReactHooks from './libs-ui-nft-react-hooks';

describe('LibsUiNftReactHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsUiNftReactHooks />);
    expect(baseElement).toBeTruthy();
  });
});
