import { render, screen } from '@testing-library/react';
import { Error500 } from '../../../components/Errors';

describe('Tests in <Error500 />', () => { 
    beforeEach( () => render(<Error500 />) );

    test('should render the component', () => { 
        expect(screen.container).toMatchSnapshot();
    });

    test('should H2 tag exist', () => { 
        const h2 = screen.getByRole('heading', { level: 2 });
        expect(h2).toBeTruthy();
    });

    test('should show the error message', () => { 
        const message = 'I am an error';
        render(<Error500 message={message} />);

        expect( screen.getByText(`Error: ${message}`) ).toBeTruthy();
    });
});