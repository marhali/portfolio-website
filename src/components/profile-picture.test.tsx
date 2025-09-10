import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProfilePicture from '@/components/profile-picture.tsx';

describe('<ProfilePicture />', () => {
  it('should render img with src and alt attribute', () => {
    const { getByRole } = render(<ProfilePicture />);
    const img = getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/imgs/profile.png');
    expect(img).toHaveAttribute('alt', 'Profile picture');
  });
});
