import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button.tsx';
import RiLinkIcon from '@/icons/ri-link-icon.svg?react';
import type { Project } from '@/model/project.ts';

export type ProjectLinkProperties = Pick<Project, 'name' | 'title'>;

function ProjectLink({ name, title }: Readonly<ProjectLinkProperties>) {
  const to = `/project/${name}`;

  return (
    <Button asChild variant="outline" size="sm">
      <Link to={to}>
        {title}
        <RiLinkIcon />
      </Link>
    </Button>
  );
}

export default ProjectLink;
