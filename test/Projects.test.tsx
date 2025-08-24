import React from 'react';
import { describe, it, expect } from 'vitest';
import Projects from '../src/Projects';
import { render } from '@testing-library/react';

describe('Projects', () => {
    it('renders Projects heading', () => {
        const { getByText } = render(<Projects />);
        expect(getByText('Projects')).toBeDefined();
    });
});
