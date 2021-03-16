import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SignIn from './components/SignIn';

test('renders text "Sign In" on page load', () => {
  render(<App />);
  const textElement = screen.getByText(/sign\sin\s.*checklist\sapp/i);
  
});

test('renders "Sign Up" on button click',()=>{
  render(<App/>);
  userEvent.click(screen.getByRole('button',{name:/sign\sup/i}));
  const textElement = screen.getByText(/sign\sup\s.*checklist\sapp/i);
  expect(textElement).toBeInTheDocument();
});

