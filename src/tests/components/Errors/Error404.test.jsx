import { render, screen } from '@testing-library/react';
import { Error404 } from '../../../components/Errors';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Tests in <Error404 />', () => { 
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={ <Error404 /> } />
                </Routes>
            </MemoryRouter>
        );
    });

    test('should render the component', () => { 
        expect(screen.container).toMatchSnapshot();
    });

    test('should H2 tag have the correct text', () => { 
        const h2 = screen.getByRole('heading', { level:2 });
        expect(h2.innerHTML).toContain('404 - Page not found');
    });
});