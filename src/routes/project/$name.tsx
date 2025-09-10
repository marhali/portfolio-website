import { createFileRoute, notFound } from '@tanstack/react-router';
import { lazy } from 'react';
import BackToHomeLink from '@/components/nav/back-to-home-link.tsx';
import PageContainer from '@/components/page/page-container.tsx';
import PageSection from '@/components/page/page-section.tsx';
import ProjectSocialLinkList from '@/components/project/social/project-social-link-list.tsx';
import { projectByName } from '@/config/project-list.ts';

export const Route = createFileRoute('/project/$name')({
  component: RouteComponent,
  notFoundComponent: lazy(() => import('@/components/project/project-not-found.tsx')),
  loader: ({ params }) => {
    const { name } = params;
    const project = projectByName(name);

    if (!project) {
      throw notFound() as Error;
    }

    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `marhali.de | ${loaderData?.title}`,
      },
      // OG Tags
      {
        property: 'og:title',
        content: `marhali.de | ${loaderData?.title}`,
      },
      {
        property: 'og:description',
        content: loaderData?.description,
      },
      {
        property: 'og:type',
        content: 'article',
      },
    ],
  }),
});

function RouteComponent() {
  const project = Route.useLoaderData();

  return (
    <PageContainer heading={`Project: ${project.title}`}>
      <BackToHomeLink />
      <PageSection heading="Description">
        <p className="text-justify">{project.description}</p>
      </PageSection>
      <PageSection heading="Links">
        <ProjectSocialLinkList items={project.socials} />
      </PageSection>
    </PageContainer>
  );
}
