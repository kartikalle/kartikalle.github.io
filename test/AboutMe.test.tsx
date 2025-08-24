import React from 'react';
import { describe, it, expect } from 'vitest';
import AboutMe from '../src/AboutMe';
import { render } from '@testing-library/react';

describe('AboutMe', () => {
    it('renders About Me heading', () => {
        const { getByText } = render(<AboutMe />);
        expect(getByText('About Me')).toBeDefined();
    });
});
