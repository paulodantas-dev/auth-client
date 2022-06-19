import { render, screen } from '@testing-library/react';

import Login from '../Login';

jest.mock('@hookform/resolvers/yup');
jest.mock('yup');

describe('Login', () => {
  it('should render correctly', () => {
    render(<Login />);
    expect(screen.getByText('Auth Login')).toBeInTheDocument();
  });
});
