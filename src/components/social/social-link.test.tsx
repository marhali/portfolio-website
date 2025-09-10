import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SocialLink from '@/components/social/social-link.tsx';

const DummySvg = vi.fn();

describe('<SocialLink />', () => {
  it('should render anchor with proper href and rel attributes', () => {
    const { getByRole } = render(<SocialLink name="myName" href="myHref" icon={DummySvg} />);
    const anchor = getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAccessibleName('myName');
    expect(anchor).toHaveAttribute('href', 'myHref');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
