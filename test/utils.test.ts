import { describe, it, expect } from 'vitest';
import { cn } from '../src/lib/utils';

describe('cn', () => {
    it('merges class names', () => {
        expect(cn('foo', 'bar')).toContain('foo');
        expect(cn('foo', 'bar')).toContain('bar');
    });
});
