import ProjectLink from '@/components/project/project-link.tsx';
import type { Project } from '@/model/project.ts';

type ProjectLinkListProperties = {
  items: Project[];
};

function ProjectLinkList({ items }: Readonly<ProjectLinkListProperties>) {
  return (
    <div className="flex flex-wrap gap-1.5 pt-1.5">
      {items.map((item) => (
        <ProjectLink key={item.name} {...item} />
      ))}
    </div>
  );
}

export default ProjectLinkList;
