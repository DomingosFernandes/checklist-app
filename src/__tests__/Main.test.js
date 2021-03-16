import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../components/Main';

test('renders title and button on page load',()=>{
    render(<Main/>);
    const headerElement = screen.getByRole('heading',{name:/Checklist\sApp/});
    const buttonElement = screen.getByText('Add Items');

    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('render input field to add new item on clicking "add items"',async ()=>{
    render(<Main/>);
    userEvent.click(screen.getByText('Add Items'));

    await waitFor(()=>screen.getByPlaceholderText('Enter a task'));
    expect(screen.getByPlaceholderText('Enter a task')).toBeInTheDocument();
});