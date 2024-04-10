// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter';
import { render, fireEvent, screen } from '@testing-library/react';


beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above

    const countmessage = screen.getByText(/count/i);
    expect(countmessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    // Complete the unit test below based on the objective in the line above

    const countvalue = screen.getByText(/0/i);
    expect(countvalue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above

    fireEvent.click(screen.getByText('+'));

    const countvalue = screen.getByText(/1/i);
    expect(countvalue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    fireEvent.click(screen.getByText('-'));

    const countvalue = screen.getByText(/-1/i);
    expect(countvalue).toBeInTheDocument();
});
