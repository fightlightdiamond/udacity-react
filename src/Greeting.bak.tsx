import React from 'react';
import { render, screen } from '@testing-library/react';
import Greetings from './Greeting';

describe('Greetings Component', () => {
    test('renders personalized welcome message when name is provided', () => {
        render(<Greetings name="Kevin" />);
        const personalizedMessage = screen.getByText('Welcome back Kevin!');
        expect(personalizedMessage).toBeInTheDocument();
    });

    test('matches snapshot for personalized message', () => {
        const { asFragment } = render(<Greetings name="Kevin" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
