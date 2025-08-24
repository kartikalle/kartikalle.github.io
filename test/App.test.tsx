import React from 'react';
import { describe, it } from 'vitest';
import App from '../src/App';
import { render } from '@testing-library/react';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
    });
});
