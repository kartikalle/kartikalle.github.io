import React from 'react';
import { describe, it, expect } from 'vitest';
import { Header } from '../src/components/header';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    it('renders Home link', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(getByText('Home')).toBeDefined();
    });
});
