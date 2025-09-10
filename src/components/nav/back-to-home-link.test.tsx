import { Link } from '@tanstack/react-router';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BackToHomeLink from '@/components/nav/back-to-home-link.tsx';
import type { PropsWithChildren } from 'react';

vi.mock('@tanstack/react-router', () => ({
  Link: vi.fn(({ children }: PropsWithChildren) => children),
}));

describe('<BackToHomeLink />', () => {
  it('should render a button with text "Back to home"', () => {
    const { getByText } = render(<BackToHomeLink />);
    expect(getByText(/Back to home/)).toBeInTheDocument();
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(Link).toHaveBeenLastCalledWith(expect.objectContaining({ to: '/' }), undefined);
  });
});
