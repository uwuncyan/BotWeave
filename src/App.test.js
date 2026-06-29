// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BotWeave title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BotWeave/i);
    expect(titleElement).toBeInTheDocument();
});
