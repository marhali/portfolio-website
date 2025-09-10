import BackToHomeLink from '@/components/nav/back-to-home-link.tsx';
import PageContainer from '@/components/page/page-container.tsx';

function ProjectNotFound() {
  return (
    <PageContainer heading="Missing link: Unknown project">
      <BackToHomeLink />
    </PageContainer>
  );
}

export default ProjectNotFound;
