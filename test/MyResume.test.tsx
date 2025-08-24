import React from 'react';
import { describe, it, expect } from 'vitest';
import MyResume from '../src/MyResume';
import { render } from '@testing-library/react';

describe('MyResume', () => {
    it('renders My Resume heading', () => {
        const { getByText } = render(<MyResume />);
        expect(getByText('My Resume')).toBeDefined();
    });
});
