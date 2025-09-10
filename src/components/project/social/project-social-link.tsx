import { Button } from '@/components/ui/button.tsx';
import RiLinkIcon from '@/icons/ri-link-icon.svg?react';
import type { ProjectSocial } from '@/model/project.ts';

export type ProjectLinkProperties = Pick<ProjectSocial, 'name' | 'href'>;

function ProjectLink({ name, href }: Readonly<ProjectLinkProperties>) {
  return (
    <Button asChild variant="outline" size="sm">
      <a href={href} target="_blank" rel="noreferrer noopener">
        {name}
        <RiLinkIcon />
      </a>
    </Button>
  );
}

export default ProjectLink;
