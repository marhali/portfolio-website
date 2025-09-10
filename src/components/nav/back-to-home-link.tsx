import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button.tsx';
import RiArrowLeftLongLineIcon from '@/icons/ri-arrow-left-long-line-icon.svg?react';

function BackToHomeLink() {
  return (
    <Button asChild variant="outline" size="sm">
      <Link to="/">
        <RiArrowLeftLongLineIcon />
        Back to home
      </Link>
    </Button>
  );
}

export default BackToHomeLink;
