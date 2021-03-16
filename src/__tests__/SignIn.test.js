import { render, screen } from '@testing-library/react';
import SignIn from '../components/SignIn';

test('renders Sign In form on page load', () => {
    render(<SignIn />);
    
    const usernameInputElement = screen.getByPlaceholderText(/username/i);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    const buttonElement = screen.getByRole('button',{name:/sign\sin/i});
   
    expect(usernameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });