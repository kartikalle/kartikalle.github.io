import React from 'react';
import { describe, it, expect } from 'vitest';
import NotFound from '../src/NotFound';
import { render } from '@testing-library/react';

describe('NotFound', () => {
    it('renders 404 heading', () => {
        const { getByText } = render(<NotFound />);
        expect(getByText('404')).toBeDefined();
    });
});
