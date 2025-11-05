import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils/cn';

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('px-2', 'py-3')).toContain('px-2');
  });

  it('dedupes conflicting classes', () => {
    expect(cn('p-2', 'p-3')).toBe('p-3');
  });
});
