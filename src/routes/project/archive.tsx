import { createFileRoute } from '@tanstack/react-router';
import BackToHomeLink from '@/components/nav/back-to-home-link.tsx';
import PageContainer from '@/components/page/page-container.tsx';
import PageSection from '@/components/page/page-section.tsx';
import ProjectLinkList from '@/components/project/project-link-list.tsx';
import { projectListByStatusArchive } from '@/config/project-list.ts';

export const Route = createFileRoute('/project/archive')({
  component: RouteComponent,
  loader: () => projectListByStatusArchive,
  head: () => ({
    meta: [
      {
        title: `marhali.de | project archive`,
      },
      // OG Tags
      {
        property: 'og:title',
        content: `marhali.de | project archive`,
      },
      {
        property: 'og:description',
        content: 'List of archived or unmaintained projects.',
      },
      {
        property: 'og:type',
        content: 'article',
      },
    ],
  }),
});

function RouteComponent() {
  const projects = Route.useLoaderData();

  return (
    <PageContainer heading="Project archive">
      <BackToHomeLink />
      <PageSection heading={undefined}>
        <ProjectLinkList items={projects} />
      </PageSection>
    </PageContainer>
  );
}
