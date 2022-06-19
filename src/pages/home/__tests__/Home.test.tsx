import { render, screen } from '@testing-library/react';

import useAuth from '../../../hooks/useAuth';
import Home from '../Home';

describe('Home', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockImplementation(() => ({
      user: {
        id: '1',
        name: 'John Doe',
      },
      isLoading: false,
      logout: jest.fn(),
    }));
  });
  it('should render correctly', () => {
    render(<Home />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
