import React from 'react';
import { describe, it, expect } from 'vitest';
import Home from '../src/Home';
import { render } from '@testing-library/react';

describe('Home', () => {
    it('renders homepage heading', () => {
        const { getByText } = render(<Home />);
        expect(getByText("Kartik's Website")).toBeDefined();
    });
});
