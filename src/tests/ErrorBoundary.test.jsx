import { render, screen } from '@testing-library/react';
// import { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { useEffect } from 'react';

describe('Tests in <ErrorBoundary />', () => { 

    beforeEach(() => {
        console.error = jest.fn();
    });

    const invalidFetch = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        console.error('Cannot fetch users. Server is Down!');
        throw new Error('Cannot fetch users. Server is Down!');

        return users;
    }

    const renderComponent = (InvalidComponent) => {
        render(
            <ErrorBoundary fallback={<ErrorBoundary />}>
                <InvalidComponent />
            </ErrorBoundary>
        );
    }
    
    test('should display the <Error500 /> component when an error occurs', () => { 
        console.log = jest.fn();
        const InvalidComponent = () => {
            throw new Error('I am an error');
        }

        renderComponent(InvalidComponent);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toBe('500');
    });

    test('should work <ErrorBoundary /> using async and await', () => { 
        const InvalidComponent = () => {
            useEffect(async() => {
                await invalidFetch();
            }, []);

            return (<h3>Hello World</h3>);
        }

        renderComponent(InvalidComponent);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.innerHTML).toBe('500');
    });
});