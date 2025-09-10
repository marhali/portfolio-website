import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PageContainer from '@/components/page/page-container.tsx';

describe('<PageContainer />', () => {
  it('should render provided heading and children', () => {
    const { getByRole, getByText } = render(<PageContainer heading="my Header">my Children</PageContainer>);
    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByText(/my Header/)).toBeInTheDocument();
    expect(getByText(/my Children/)).toBeInTheDocument();
  });
});
