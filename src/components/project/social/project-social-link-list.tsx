import ProjectSocialLink from '@/components/project/social/project-social-link.tsx';
import type { ProjectSocial } from '@/model/project.ts';

type ProjectSocialLinkListProperties = {
  items: ProjectSocial[];
};

function ProjectSocialLinkList({ items }: Readonly<ProjectSocialLinkListProperties>) {
  return (
    <div className="flex flex-wrap gap-1.5 pt-1.5">
      {items.map((item) => (
        <ProjectSocialLink key={item.name} {...item} />
      ))}
    </div>
  );
}

export default ProjectSocialLinkList;
