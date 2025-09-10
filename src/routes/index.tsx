import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import PageContainer from '@/components/page/page-container.tsx';
import PageSection from '@/components/page/page-section.tsx';
import ProjectLinkList from '@/components/project/project-link-list.tsx';
import SkillBadgeList from '@/components/skill/skill-badge-list.tsx';
import { Button } from '@/components/ui/button.tsx';
import { projectListByStatusActive } from '@/config/project-list.ts';
import skillList from '@/config/skill-list.ts';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [email, setEmail] = useState<string | undefined>();

  useEffect(() => {
    const partials = ['website-contact@shield', 'marhali', 'de'];
    setEmail(partials.join('.'));
  }, []);

  return (
    <PageContainer heading="Portfolio">
      <PageSection heading="About">
        <p className="text-justify">
          Hello my name is Marcel, I am an experienced software and systems engineer. I love working on new projects to
          keep developing myself.
        </p>
      </PageSection>
      <PageSection heading="Skills">
        <SkillBadgeList items={skillList} />
      </PageSection>
      <PageSection heading="Projects">
        <ProjectLinkList items={projectListByStatusActive} />
        <Button asChild variant="link" className="px-0 pt-4">
          <Link to="/project/archive">List of archived or unmaintained projects.</Link>
        </Button>
      </PageSection>
      <PageSection heading="Contact">
        <p>{email ?? 'Incoming...'}</p>
      </PageSection>
    </PageContainer>
  );
}
