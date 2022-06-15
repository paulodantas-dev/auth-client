import { render } from '@testing-library/react';

import { Home } from '../Home';
import { HomeView } from '../HomeView';

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(HomeView).toBeDefined();
  });
});
