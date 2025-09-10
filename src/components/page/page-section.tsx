import type { PropsWithChildren, ReactNode } from 'react';

type PageSectionProperties = PropsWithChildren & {
  heading: ReactNode;
};

function PageSection({ heading, children }: PageSectionProperties) {
  return (
    <section>
      <h2 className="mt-4 text-2xl font-bold">{heading}</h2>
      {children}
    </section>
  );
}

export default PageSection;
