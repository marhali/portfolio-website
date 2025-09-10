import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PageSection from '@/components/page/page-section.tsx';

describe('<PageSection />', () => {
  it('should render provided heading and children', () => {
    const { getByRole, getByText } = render(<PageSection heading="my Header">my Children</PageSection>);
    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByText(/my Header/)).toBeInTheDocument();
    expect(getByText(/my Children/)).toBeInTheDocument();
  });
});
